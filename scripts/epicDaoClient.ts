import { ZkIdentity } from "@zk-kit/identity"
import { poseidon } from "circomlibjs"
import { IncrementalMerkleTree } from "@zk-kit/incremental-merkle-tree"
import { Semaphore, genExternalNullifier,generateMerkleProof, genSignalHash } from "@zk-kit/protocols"
import { parseBytes32String, formatBytes32String } from "ethers/lib/utils";
import { json } from "stream/consumers";
import * as verification_key from '../build/snark/verification_key.json'


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
const semaphoreAddress = "0x5C83c041825fc6DCB21cd8e0a5bf394669A2f612"
const semaphoreContract = new web3.eth.Contract(semaphoreABI.abi, semaphoreAddress);



const tree = new IncrementalMerkleTree(poseidon, 20, BigInt(0), 5) // Binary tree.
let rootHistory = new Map<number, boolean>();

async function main() {

    var identity;
    var identityCommitment;
    var identityNullifier;

    [identity, identityCommitment, identityNullifier] = await registerIdentity();

    console.log(tree.depth)
    const merkleProof = await genMerkleProof(identityCommitment);

    var externalNullifier;
    var proof;
    [externalNullifier, proof] = await createZKProof(identity, merkleProof)
    
    
    var nullifierHash = Semaphore.genNullifierHash(BigInt(String(externalNullifier)), BigInt(String(identityNullifier)))


    //console.log(await semaphoreContract.methods.sender().call({from: PUBLIC_KEY}))
    //console.log(await semaphoreContract.methods.owner().call({from: PUBLIC_KEY}))
    

    var signal = 'yes'
    var signalHash = genSignalHash(signal)
    await broadcastSignal(0, proof, tree.root, nullifierHash, signalHash, externalNullifier)
    //console.log(msg)
    clearTree()

    
}


async function broadcastSignal(vote:any, proof:any, root:any, nullifierHash:any, signalHash:any, externalNullifier:any){

  if(!rootHistory.get(root)){
    throw 'root has not been seen before'
  }
  await semaphoreContract.methods.preBroadcastCheck(vote, proof, root, nullifierHash, signalHash, externalNullifier).call({from: PUBLIC_KEY})
  await semaphoreContract.methods.broadcastSignal(vote, proof, root, nullifierHash, externalNullifier).call({from: PUBLIC_KEY})
}

async function registerIdentity(){
  //create new identity and identity commitment
  const identity = new ZkIdentity()
  const identityCommitment = identity.genIdentityCommitment();
  const identityNullifier = identity.getNullifier()


  tree.insert(identityCommitment)

  rootHistory.set(tree.root, true)

  
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


    console.log("adding external nullifier....")
    //await addExternalNullifierToContract(externalNullifier)

    console.log("added external nullifier")

    //generate secret witness 
    const witness = Semaphore.genWitness(identity.getTrapdoor(),identity.getNullifier(), merkleProof, externalNullifier, signal)

    console.log("witness generated", witness)
    const proof = await Semaphore.genProof(witness, "./build/snark/semaphore.wasm", "./build/snark/semaphore_final.zkey")
    
    console.log("proof generated")

    const solidity_proof = await Semaphore.packToSolidityProof(proof)

    console.log("proof packed generated")


    console.log( verification_key)
    var verify = await Semaphore.verifyProof(verification_key, proof)

    console.log("proof verified:", verify)

    return [externalNullifier, solidity_proof]
}




//HELPER FUNCTIONS


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

async function clearTree(){
  const leaf_list = tree.leaves
  for(let leaf of leaf_list){
    const idx = tree.indexOf(leaf);

    tree.delete(idx)
  }

}





main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });