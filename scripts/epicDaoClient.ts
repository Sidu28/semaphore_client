import { IncrementalMerkleTree } from "@zk-kit/incremental-merkle-tree"
import { Semaphore, genExternalNullifier,generateMerkleProof } from "@zk-kit/protocols"

import { ZkIdentity } from "@zk-kit/identity"
import { poseidon } from "circomlibjs"


const tree = new IncrementalMerkleTree(poseidon, 16, BigInt(0), 2) // Binary tree.

async function main() {

    var identity;
    var identityCommitment;
    
    [identity, identityCommitment] = await registerIdentity();

    console.log(identityCommitment)
    const merkleProof = await genMerkleProof(identityCommitment);

    var externalNullifier;
    var proof;
    [externalNullifier, proof] = await createZKProof(identity, merkleProof)



    clearTree()



}

async function registerIdentity(){

  const identity = new ZkIdentity()
  const identityCommitment = identity.genIdentityCommitment();

  console.log(tree)


  tree.insert(identityCommitment)

  console.log(tree)

  // let reg = document.getElementById("register")
  // let output = document.createElement("p");
  // output.textContent = "identity: " + identity.toString() + ", identity commitment: "+ identityCommitment.toString();
  // reg.append(output);
  return [identity, identityCommitment]
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