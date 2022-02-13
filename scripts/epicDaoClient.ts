import { ZkIdentity } from "@zk-kit/identity"
import { poseidon } from "circomlibjs"
import { IncrementalMerkleTree } from "@zk-kit/incremental-merkle-tree"
import { Semaphore, genExternalNullifier,generateMerkleProof } from "@zk-kit/protocols"
import { parseBytes32String, formatBytes32String } from "ethers/lib/utils";

const process = require("process");
require("dotenv").config();


const ALCHEMY_KEY = process.env.RINKEBY_API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


//initalize alchemy API
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(ALCHEMY_KEY);

//contract data
const semaphoreABI = require("../artifacts/contracts/Semaphore.sol/Semaphore.json")
const semaphoreAddress = "0xf1C1F3256213A75fAFE08E402C62C0d760Dc7CFc"
const semaphoreContract = new web3.eth.Contract(semaphoreABI.abi, semaphoreAddress);



const tree = new IncrementalMerkleTree(poseidon, 16, BigInt(0), 2) // Binary tree.

async function main() {

    var identity;
    var identityCommitment;
    var identityNullifier;

    [identity, identityCommitment, identityNullifier] = await registerIdentity();


    const merkleProof = await genMerkleProof(identityCommitment);

    var externalNullifier;
    var proof;
    [externalNullifier, proof] = await createZKProof(identity, merkleProof)


    var nullifierHash = Semaphore.genNullifierHash(externalNullifier,identityNullifier)


    await broadcastSignal(0, proof, tree.root, nullifierHash, externalNullifier)
    //console.log(msg)
    clearTree()
}


async function broadcastSignal(vote:any, proof:any, root:any, nullifierHash:any, externalNullifier:any){

  await semaphoreContract.methods.broadcastSignal(vote, proof, root, nullifierHash, externalNullifier).call({from: PUBLIC_KEY})
}

async function registerIdentity(){
  //create new identity and identity commitment
  const identity = new ZkIdentity()
  const identityCommitment = identity.genIdentityCommitment();


  tree.insert(identityCommitment)


  const identityNullifier = identity.getNullifier()
  return [identity, identityCommitment, identityNullifier]
}


/* 
Creates the Merkle Proof associated with a given leaf in the merkle tree
*/
async function genMerkleProof(leaf:any){
    const leafIndex = tree.indexOf(leaf)
  
    if (leafIndex === -1) {
      throw new Error("The leaf does not exists")
    }
    return tree.createProof(leafIndex)
  }

async function createZKProof(identity:any, merkleProof:any){
    const signal = "0x111"
    const externalNullifier = genExternalNullifier("voting_1")
    //await addExternalNullifierToContract(externalNullifier)

    //generate secret witness 
    const witness = Semaphore.genWitness(identity.getTrapdoor(),identity.getNullifier(), merkleProof, externalNullifier, signal)

    const proof = await Semaphore.genProof(witness, "./zkey_files/semaphore.wasm", "./zkey_files/semaphore_final.zkey")
    const solidity_proof = await generateSolidityProof(proof)

    return [externalNullifier, solidity_proof]
}



async function clearTree(){
  const leaf_list = tree.leaves
  for(let leaf of leaf_list){
    const idx = tree.indexOf(leaf);

    tree.delete(idx)
  }

}




//HELPER FUNCTIONS

async function generateSolidityProof(proof:any){
  const proof_temp = await Semaphore.packToSolidityProof(proof);

  var solidity_proof = [
    proof_temp.a[0],
    proof_temp.a[1],
    proof_temp.b[0][1],
    proof_temp.b[0][0],
    proof_temp.b[1][1],
    proof_temp.b[1][0],
    proof_temp.c[0],
    proof_temp.c[1]
  ]
  return solidity_proof
}


async function addExternalNullifierToContract(externalNullifier:any){
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

  console.log(nonce)
  //the transaction
  const tx = {
    'from': PUBLIC_KEY,
    'to': semaphoreAddress,
    'nonce': nonce+6,
    'gas': 550000,
    'maxPriorityFeePerGas': 2000000108,
    'data': semaphoreContract.methods.addExternalNullifier(externalNullifier).encodeABI()
  };
  const signPromise = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);


  await web3.eth.sendSignedTransaction(signPromise.rawTransaction, function(error:any, hash:any) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   }).on('receirpt', function(receipt:any){
    console.log(receipt)
   })
}





main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });