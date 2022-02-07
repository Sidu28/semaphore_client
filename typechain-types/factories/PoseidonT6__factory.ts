/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoseidonT6, PoseidonT6Interface } from "../PoseidonT6";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "input",
        type: "uint256[5]",
      },
    ],
    name: "poseidon",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x61014761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80634937a2581461003a575b600080fd5b61004e610048366004610060565b50600090565b60405190815260200160405180910390f35b600060a08284031215610071578081fd5b82601f83011261007f578081fd5b60405160a0810181811067ffffffffffffffff821117156100a2576100a26100e2565b604052808360a081018610156100b6578384fd5b835b60058110156100d75781358352602092830192909101906001016100b8565b509195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212200c47e2bb5e4fc7b1b4c615c85f77ca6c83618ffe56aeeda257cee442b1daba1e64736f6c63430008040033";

type PoseidonT6ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoseidonT6ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoseidonT6__factory extends ContractFactory {
  constructor(...args: PoseidonT6ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PoseidonT6";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoseidonT6> {
    return super.deploy(overrides || {}) as Promise<PoseidonT6>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoseidonT6 {
    return super.attach(address) as PoseidonT6;
  }
  connect(signer: Signer): PoseidonT6__factory {
    return super.connect(signer) as PoseidonT6__factory;
  }
  static readonly contractName: "PoseidonT6";
  public readonly contractName: "PoseidonT6";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoseidonT6Interface {
    return new utils.Interface(_abi) as PoseidonT6Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoseidonT6 {
    return new Contract(address, _abi, signerOrProvider) as PoseidonT6;
  }
}