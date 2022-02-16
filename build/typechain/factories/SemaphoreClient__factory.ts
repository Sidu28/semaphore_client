/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SemaphoreClient,
  SemaphoreClientInterface,
} from "../SemaphoreClient";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Semaphore",
        name: "_semaphore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "signalIndex",
        type: "uint256",
      },
    ],
    name: "SignalBroadcastByClient",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_signal",
        type: "bytes",
      },
      {
        internalType: "uint256[8]",
        name: "_proof",
        type: "uint256[8]",
      },
      {
        internalType: "uint256",
        name: "_root",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nullifiersHash",
        type: "uint256",
      },
      {
        internalType: "uint232",
        name: "_externalNullifier",
        type: "uint232",
      },
    ],
    name: "broadcastSignal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getExternalNullifierBySignalIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getSignalBySignalIndex",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextSignalIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "semaphore",
    outputs: [
      {
        internalType: "contract Semaphore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "signalIndexToExternalNullifier",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "signalIndexToSignal",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060025534801561001557600080fd5b50604051610cf1380380610cf183398181016040528101906100379190610093565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610117565b60008151905061008d81610100565b92915050565b6000602082840312156100a557600080fd5b60006100b38482850161007e565b91505092915050565b60006100c7826100e0565b9050919050565b60006100d9826100bc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b610109816100ce565b811461011457600080fd5b50565b610bcb806101266000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80637b5d25341161005b5780637b5d2534146100fe5780638d2d593b1461011c578063911ca41e1461013a578063f9cdb5cd1461016a5761007d565b80630e57596f1461008257806327acf71b1461009e578063740afb77146100ce575b600080fd5b61009c60048036038101906100979190610649565b61019a565b005b6100b860048036038101906100b391906106dc565b6102e5565b6040516100c591906107e9565b60405180910390f35b6100e860048036038101906100e391906106dc565b610385565b6040516100f59190610884565b60405180910390f35b6101066103a2565b6040516101139190610869565b60405180910390f35b6101246103c8565b6040516101319190610884565b60405180910390f35b610154600480360381019061014f91906106dc565b6103ce565b60405161016191906107e9565b60405180910390f35b610184600480360381019061017f91906106dc565b610472565b6040516101919190610884565b60405180910390f35b6000600254905085600080600254815260200190815260200160002090805190602001906101c992919061048a565b50817cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16600160006002548152602001908152602001600020819055506002600081548092919061021690610a80565b9190505550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630e57596f87878787876040518663ffffffff1660e01b815260040161027e95949392919061080b565b600060405180830381600087803b15801561029857600080fd5b505af11580156102ac573d6000803e3d6000fd5b50505050807faa676fd106f1023de6c9eafff9af5bc8e299b3493d3aa816a3278a15d055657b60405160405180910390a2505050505050565b6000602052806000526040600020600091509050805461030490610a1d565b80601f016020809104026020016040519081016040528092919081815260200182805461033090610a1d565b801561037d5780601f106103525761010080835404028352916020019161037d565b820191906000526020600020905b81548152906001019060200180831161036057829003601f168201915b505050505081565b600060016000838152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60025481565b606060008083815260200190815260200160002080546103ed90610a1d565b80601f016020809104026020016040519081016040528092919081815260200182805461041990610a1d565b80156104665780601f1061043b57610100808354040283529160200191610466565b820191906000526020600020905b81548152906001019060200180831161044957829003601f168201915b50505050509050919050565b60016020528060005260406000206000915090505481565b82805461049690610a1d565b90600052602060002090601f0160209004810192826104b857600085556104ff565b82601f106104d157805160ff19168380011785556104ff565b828001600101855582156104ff579182015b828111156104fe5782518255916020019190600101906104e3565b5b50905061050c9190610510565b5090565b5b80821115610529576000816000905550600101610511565b5090565b600061054061053b846108c4565b61089f565b9050808285602086028201111561055657600080fd5b60005b85811015610586578161056c8882610634565b845260208401935060208301925050600181019050610559565b5050509392505050565b60006105a361059e846108ea565b61089f565b9050828152602081018484840111156105bb57600080fd5b6105c68482856109db565b509392505050565b600082601f8301126105df57600080fd5b60086105ec84828561052d565b91505092915050565b600082601f83011261060657600080fd5b8135610616848260208601610590565b91505092915050565b60008135905061062e81610b67565b92915050565b60008135905061064381610b7e565b92915050565b6000806000806000610180868803121561066257600080fd5b600086013567ffffffffffffffff81111561067c57600080fd5b610688888289016105f5565b9550506020610699888289016105ce565b9450506101206106ab88828901610634565b9350506101406106bd88828901610634565b9250506101606106cf8882890161061f565b9150509295509295909350565b6000602082840312156106ee57600080fd5b60006106fc84828501610634565b91505092915050565b600061071183836107cb565b60208301905092915050565b61072681610925565b6107308184610948565b925061073b8261091b565b8060005b8381101561076c5781516107538782610705565b965061075e8361093b565b92505060018101905061073f565b505050505050565b600061077f82610930565b6107898185610953565b93506107998185602086016109ea565b6107a281610b56565b840191505092915050565b6107b6816109b7565b82525050565b6107c581610984565b82525050565b6107d4816109ad565b82525050565b6107e3816109ad565b82525050565b600060208201905081810360008301526108038184610774565b905092915050565b60006101808201905081810360008301526108268188610774565b9050610835602083018761071d565b6108436101208301866107da565b6108516101408301856107da565b61085f6101608301846107bc565b9695505050505050565b600060208201905061087e60008301846107ad565b92915050565b600060208201905061089960008301846107da565b92915050565b60006108a96108ba565b90506108b58282610a4f565b919050565b6000604051905090565b600067ffffffffffffffff8211156108df576108de610b27565b5b602082029050919050565b600067ffffffffffffffff82111561090557610904610b27565b5b61090e82610b56565b9050602081019050919050565b6000819050919050565b600060089050919050565b600081519050919050565b6000602082019050919050565b600081905092915050565b600082825260208201905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60007cffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006109c2826109c9565b9050919050565b60006109d482610964565b9050919050565b82818337600083830152505050565b60005b83811015610a085780820151818401526020810190506109ed565b83811115610a17576000848401525b50505050565b60006002820490506001821680610a3557607f821691505b60208210811415610a4957610a48610af8565b5b50919050565b610a5882610b56565b810181811067ffffffffffffffff82111715610a7757610a76610b27565b5b80604052505050565b6000610a8b826109ad565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610abe57610abd610ac9565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610b7081610984565b8114610b7b57600080fd5b50565b610b87816109ad565b8114610b9257600080fd5b5056fea2646970667358221220beb8edb5880448e430fcd5c988c4e7a2cf0faf905dd0c53e18f1f74fc9937d3664736f6c63430008040033";

type SemaphoreClientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SemaphoreClientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SemaphoreClient__factory extends ContractFactory {
  constructor(...args: SemaphoreClientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SemaphoreClient";
  }

  deploy(
    _semaphore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SemaphoreClient> {
    return super.deploy(
      _semaphore,
      overrides || {}
    ) as Promise<SemaphoreClient>;
  }
  getDeployTransaction(
    _semaphore: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_semaphore, overrides || {});
  }
  attach(address: string): SemaphoreClient {
    return super.attach(address) as SemaphoreClient;
  }
  connect(signer: Signer): SemaphoreClient__factory {
    return super.connect(signer) as SemaphoreClient__factory;
  }
  static readonly contractName: "SemaphoreClient";
  public readonly contractName: "SemaphoreClient";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SemaphoreClientInterface {
    return new utils.Interface(_abi) as SemaphoreClientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SemaphoreClient {
    return new Contract(address, _abi, signerOrProvider) as SemaphoreClient;
  }
}