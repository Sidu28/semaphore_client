/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  IncrementalQuinTree,
  IncrementalQuinTreeInterface,
} from "../IncrementalQuinTree";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_treeLevels",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "_zeroValue",
        type: "uint256",
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
        name: "leaf",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
    ],
    name: "LeafInsertion",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "array",
        type: "uint256[]",
      },
    ],
    name: "hash11",
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
  {
    inputs: [
      {
        internalType: "uint256[5]",
        name: "array",
        type: "uint256[5]",
      },
    ],
    name: "hash5",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_left",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_right",
        type: "uint256",
      },
    ],
    name: "hashLeftRight",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_leaf",
        type: "uint256",
      },
    ],
    name: "insertLeaf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
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
    name: "rootHistory",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006001553480156200001657600080fd5b50604051620014073803806200140783398101604081905262000039916200029e565b600080546001600160a01b0319163390811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a360008260ff16118015620000905750602060ff831611155b620001075760405162461bcd60e51b815260206004820152603960248201527f496e6372656d656e74616c5175696e547265653a205f747265654c6576656c7360448201527f206d757374206265206265747765656e203020616e6420333300000000000000606482015260840160405180910390fd5b6000805460ff60a01b1916600160a01b60ff851602179055806200012a62000267565b60005b8460ff168160ff161015620001c35760005b600560ff821610156200018b5783838260ff16600581106200017157634e487b7160e01b600052603260045260246000fd5b602002015280620001828162000305565b9150506200013f565b5060ff81166000908152600360205260409020839055620001ac82620001d1565b925080620001ba8162000305565b9150506200012d565b505060025550620003329050565b604051630926f44b60e31b815260009073__$223301b175b06473d424a7afc957d4e96c$__90634937a258906200020d908590600401620002d2565b60206040518083038186803b1580156200022657600080fd5b505af41580156200023b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000261919062000285565b92915050565b6040518060a001604052806005906020820280368337509192915050565b60006020828403121562000297578081fd5b5051919050565b60008060408385031215620002b1578081fd5b825160ff81168114620002c2578182fd5b6020939093015192949293505050565b60a08101818360005b6005811015620002fc578151835260209283019290910190600101620002db565b50505092915050565b600060ff821660ff8114156200032957634e487b7160e01b82526011600452602482fd5b60010192915050565b6110c580620003426000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80639cfced9711610076578063ebf0c7171161005b578063ebf0c71714610166578063f1c621ee1461016f578063f2fde38b1461019257600080fd5b80639cfced9714610140578063b72024341461015357600080fd5b80638a1a52d2116100a75780638a1a52d2146100f35780638da5cb5b146101065780638f32d59b1461012157600080fd5b80635bb93995146100c3578063715018a6146100e9575b600080fd5b6100d66100d1366004610e3c565b6101a5565b6040519081526020015b60405180910390f35b6100f161024a565b005b6100d6610101366004610d64565b610300565b6000546040516001600160a01b0390911681526020016100e0565b6000546001600160a01b031633145b60405190151581526020016100e0565b6100d661014e366004610ce2565b61074a565b6100d6610161366004610e0c565b6107d4565b6100d660025481565b61013061017d366004610e0c565b60056020526000908152604090205460ff1681565b6100f16101a0366004610cb4565b610b2e565b60006101af610c78565b838152602081018390526040516314d2f97b60e11b815273__$86e0c54df1042e28bf2dd20ccf184dc428$__906329a5f2f6906101f0908490600401610e5d565b60206040518083038186803b15801561020857600080fd5b505af415801561021c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102409190610e24565b9150505b92915050565b6000546001600160a01b031633146102a95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b60408051600b80825261018082019092526000918291906020820161016080368337019050509050610330610c96565b610338610c96565b60005b85518110156103a95785818151811061036457634e487b7160e01b600052603260045260246000fd5b602002602001015184828151811061038c57634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806103a181610ffe565b91505061033b565b5084515b600b8110156103f55760008482815181106103d857634e487b7160e01b600052603260045260246000fd5b6020908102919091010152806103ed81610ffe565b9150506103ad565b5060005b60058110156104b85783818151811061042257634e487b7160e01b600052603260045260246000fd5b602002602001015183826005811061044a57634e487b7160e01b600052603260045260246000fd5b60200201528361045b826005610ee7565b8151811061047957634e487b7160e01b600052603260045260246000fd5b60200260200101518282600581106104a157634e487b7160e01b600052603260045260246000fd5b6020020152806104b081610ffe565b9150506103f9565b506104c1610c78565b604051630926f44b60e31b815273__$223301b175b06473d424a7afc957d4e96c$__90634937a258906104f8908690600401610e8e565b60206040518083038186803b15801561051057600080fd5b505af4158015610524573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105489190610e24565b8152604051630926f44b60e31b815273__$223301b175b06473d424a7afc957d4e96c$__90634937a25890610581908590600401610e8e565b60206040518083038186803b15801561059957600080fd5b505af41580156105ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d19190610e24565b60208201526105de610c78565b6040516314d2f97b60e11b815273__$86e0c54df1042e28bf2dd20ccf184dc428$__906329a5f2f690610615908590600401610e5d565b60206040518083038186803b15801561062d57600080fd5b505af4158015610641573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106659190610e24565b815284518590600a90811061068a57634e487b7160e01b600052603260045260246000fd5b6020026020010151816001600281106106b357634e487b7160e01b600052603260045260246000fd5b60200201526040516314d2f97b60e11b815273__$86e0c54df1042e28bf2dd20ccf184dc428$__906329a5f2f6906106ef908490600401610e5d565b60206040518083038186803b15801561070757600080fd5b505af415801561071b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073f9190610e24565b979650505050505050565b604051630926f44b60e31b815260009073__$223301b175b06473d424a7afc957d4e96c$__90634937a25890610784908590600401610e8e565b60206040518083038186803b15801561079c57600080fd5b505af41580156107b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102449190610e24565b600080546001600160a01b0316331461082f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a0565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000182106108ea5760405162461bcd60e51b815260206004820152604560248201527f496e6372656d656e74616c5175696e547265653a20696e736572744c6561662060448201527f617267756d656e74206d757374206265203c20534e41524b5f5343414c41525f60648201527f4649454c44000000000000000000000000000000000000000000000000000000608482015260a4016102a0565b60005461090290600160a01b900460ff166005610f56565b600154106109785760405162461bcd60e51b815260206004820152602160248201527f496e6372656d656e74616c5175696e547265653a20747265652069732066756c60448201527f6c0000000000000000000000000000000000000000000000000000000000000060648201526084016102a0565b60015482610984610c96565b6000610991600585611039565b905060005b60005460ff600160a01b90910481169082161015610ac05781610a005760015b600560ff821610156109fe5760ff80831660009081526003602090815260408083205460048352818420948616845293909152902055806109f681611019565b9150506109b6565b505b60ff8116600090815260046020908152604080832085845290915281208590555b600560ff82161015610a885760ff80831660009081526004602090815260408083209385168084529390915290205490859060058110610a7157634e487b7160e01b600052603260045260246000fd5b602002015280610a8081611019565b915050610a21565b50610a928361074a565b9350610a9f600586610eff565b9450610aac600586611039565b915080610ab881611019565b915050610996565b5060028390556000838152600560205260408120805460ff191660019081179091558054918190610af18285610ee7565b9091555050604051819088907fe6f49fa84abd31919f446b22a52bb3ceae774b4b87f062f022fec45c46f4f45890600090a3509295945050505050565b6000546001600160a01b03163314610b885760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102a0565b610b9181610b94565b50565b6001600160a01b038116610c105760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102a0565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60405180604001604052806002906020820280368337509192915050565b6040518060a001604052806005906020820280368337509192915050565b600060208284031215610cc5578081fd5b81356001600160a01b0381168114610cdb578182fd5b9392505050565b600060a08284031215610cf3578081fd5b82601f830112610d01578081fd5b60405160a0810181811067ffffffffffffffff82111715610d2457610d24611079565b604052808360a08101861015610d38578384fd5b835b6005811015610d59578135835260209283019290910190600101610d3a565b509195945050505050565b60006020808385031215610d76578182fd5b823567ffffffffffffffff80821115610d8d578384fd5b818501915085601f830112610da0578384fd5b813581811115610db257610db2611079565b8060051b9150610dc3848301610eb6565b8181528481019084860184860187018a1015610ddd578788fd5b8795505b83861015610dff578035835260019590950194918601918601610de1565b5098975050505050505050565b600060208284031215610e1d578081fd5b5035919050565b600060208284031215610e35578081fd5b5051919050565b60008060408385031215610e4e578081fd5b50508035926020909101359150565b60408101818360005b6002811015610e85578151835260209283019290910190600101610e66565b50505092915050565b60a08101818360005b6005811015610e85578151835260209283019290910190600101610e97565b604051601f8201601f1916810167ffffffffffffffff81118282101715610edf57610edf611079565b604052919050565b60008219821115610efa57610efa61104d565b500190565b600082610f0e57610f0e611063565b500490565b600181815b80851115610f4e578160001904821115610f3457610f3461104d565b80851615610f4157918102915b93841c9390800290610f18565b509250929050565b6000610cdb8383600082610f6c57506001610244565b81610f7957506000610244565b8160018114610f8f5760028114610f9957610fb5565b6001915050610244565b60ff841115610faa57610faa61104d565b50506001821b610244565b5060208310610133831016604e8410600b8410161715610fd8575081810a610244565b610fe28383610f13565b8060001904821115610ff657610ff661104d565b029392505050565b60006000198214156110125761101261104d565b5060010190565b600060ff821660ff8114156110305761103061104d565b60010192915050565b60008261104857611048611063565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212200da88419688260705fa91c97103ba6dde6f47e025873e7a1903a9c52171a756764736f6c63430008040033";

type IncrementalQuinTreeConstructorParams =
  | [linkLibraryAddresses: IncrementalQuinTreeLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IncrementalQuinTreeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class IncrementalQuinTree__factory extends ContractFactory {
  constructor(...args: IncrementalQuinTreeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        IncrementalQuinTree__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
    this.contractName = "IncrementalQuinTree";
  }

  static linkBytecode(
    linkLibraryAddresses: IncrementalQuinTreeLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$223301b175b06473d424a7afc957d4e96c\\$__", "g"),
      linkLibraryAddresses["contracts/Poseidon.sol:PoseidonT6"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$86e0c54df1042e28bf2dd20ccf184dc428\\$__", "g"),
      linkLibraryAddresses["contracts/Poseidon.sol:PoseidonT3"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    _treeLevels: BigNumberish,
    _zeroValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IncrementalQuinTree> {
    return super.deploy(
      _treeLevels,
      _zeroValue,
      overrides || {}
    ) as Promise<IncrementalQuinTree>;
  }
  getDeployTransaction(
    _treeLevels: BigNumberish,
    _zeroValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_treeLevels, _zeroValue, overrides || {});
  }
  attach(address: string): IncrementalQuinTree {
    return super.attach(address) as IncrementalQuinTree;
  }
  connect(signer: Signer): IncrementalQuinTree__factory {
    return super.connect(signer) as IncrementalQuinTree__factory;
  }
  static readonly contractName: "IncrementalQuinTree";
  public readonly contractName: "IncrementalQuinTree";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IncrementalQuinTreeInterface {
    return new utils.Interface(_abi) as IncrementalQuinTreeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IncrementalQuinTree {
    return new Contract(address, _abi, signerOrProvider) as IncrementalQuinTree;
  }
}

export interface IncrementalQuinTreeLibraryAddresses {
  ["contracts/Poseidon.sol:PoseidonT6"]: string;
  ["contracts/Poseidon.sol:PoseidonT3"]: string;
}
