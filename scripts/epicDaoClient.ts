import { ZkIdentity } from "@zk-kit/identity"
import { poseidon } from "circomlibjs"
import { IncrementalMerkleTree } from "@zk-kit/incremental-merkle-tree"
import { Semaphore, genExternalNullifier,generateMerkleProof } from "@zk-kit/protocols"

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
const address = "0xB48d480AD73E573B313cdaD26CD7e0972e000878"


const semaphoreContract = new web3.eth.Contract(semaphoreABI.abi, address);


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


    //var identityNullifier = identity.getNullifier()
    var nullifierHash = Semaphore.genNullifierHash(externalNullifier,identityNullifier)


    broadcastSignal(0, proof, tree.root, nullifierHash, externalNullifier)
    clearTree()
}


async function broadcastSignal(vote:any, proof:any, root:any, nullifierHash:any, externalNullifier:any){
  await semaphoreContract.methods.broadcastSignal(vote, proof, root, nullifierHash, externalNullifier).send()
}
async function registerIdentity(){

  const identity = new ZkIdentity()
  const identityCommitment = identity.genIdentityCommitment();




  tree.insert(identityCommitment)



  const identityNullifier = identity.getNullifier()

  // let reg = document.getElementById("register")
  // let output = document.createElement("p");
  // output.textContent = "identity: " + identity.toString() + ", identity commitment: "+ identityCommitment.toString();
  // reg.append(output);
  return [identity, identityCommitment, identityNullifier]
}

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

    //generate secret witness 
    const witness = Semaphore.genWitness(identity.getTrapdoor(),identity.getNullifier(), merkleProof, externalNullifier, signal)

    const proof = await Semaphore.genProof(witness, "./zkey_files/semaphore.wasm", "./zkey_files/semaphore_final.zkey")
    return [externalNullifier, proof]
}

async function clearTree(){
  const leaf_list = tree.leaves
  console.log(leaf_list)
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