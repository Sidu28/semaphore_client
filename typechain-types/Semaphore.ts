/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SemaphoreInterface extends utils.Interface {
  contractName: "Semaphore";
  functions: {
    "NOTHING_UP_MY_SLEEVE_ZERO()": FunctionFragment;
    "addExternalNullifier(uint232)": FunctionFragment;
    "broadcastSignal(bytes,uint256[8],uint256,uint256,uint232,uint256,string)": FunctionFragment;
    "castVote(uint256,uint8,string)": FunctionFragment;
    "deactivateExternalNullifier(uint232)": FunctionFragment;
    "externalNullifierLinkedList(uint232)": FunctionFragment;
    "firstExternalNullifier()": FunctionFragment;
    "getNextExternalNullifier(uint232)": FunctionFragment;
    "getNumIdentityCommitments()": FunctionFragment;
    "hash11(uint256[])": FunctionFragment;
    "hash5(uint256[5])": FunctionFragment;
    "hashLeftRight(uint256,uint256)": FunctionFragment;
    "insertIdentity(uint256)": FunctionFragment;
    "insertLeaf(uint256)": FunctionFragment;
    "isBroadcastPermissioned()": FunctionFragment;
    "isExternalNullifierActive(uint232)": FunctionFragment;
    "isOwner()": FunctionFragment;
    "isValidSignalAndProofs(bytes,uint256[8],uint256,uint256,uint232)": FunctionFragment;
    "lastExternalNullifier()": FunctionFragment;
    "nullifierHashHistory(uint256)": FunctionFragment;
    "numExternalNullifiers()": FunctionFragment;
    "owner()": FunctionFragment;
    "packProof(uint256[2],uint256[2][2],uint256[2])": FunctionFragment;
    "preBroadcastCheck(bytes,uint256[8],uint256,uint256,uint256,uint232)": FunctionFragment;
    "reactivateExternalNullifier(uint232)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "root()": FunctionFragment;
    "rootHistory(uint256)": FunctionFragment;
    "sender()": FunctionFragment;
    "setLogicAddyasProxy(address)": FunctionFragment;
    "setPermissioning(bool)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpackProof(uint256[8])": FunctionFragment;
    "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[4])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "NOTHING_UP_MY_SLEEVE_ZERO",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addExternalNullifier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "broadcastSignal",
    values: [
      BytesLike,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "castVote",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateExternalNullifier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "externalNullifierLinkedList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "firstExternalNullifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextExternalNullifier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNumIdentityCommitments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hash11",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "hash5",
    values: [
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "insertIdentity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "insertLeaf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isBroadcastPermissioned",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isExternalNullifierActive",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isValidSignalAndProofs",
    values: [
      BytesLike,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "lastExternalNullifier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nullifierHashHistory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "numExternalNullifiers",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "packProof",
    values: [
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "preBroadcastCheck",
    values: [
      BytesLike,
      BigNumberish[],
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "reactivateExternalNullifier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "root", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rootHistory",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "sender", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setLogicAddyasProxy",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPermissioning",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unpackProof",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      [BigNumberish, BigNumberish],
      [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      [BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "NOTHING_UP_MY_SLEEVE_ZERO",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addExternalNullifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "broadcastSignal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deactivateExternalNullifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "externalNullifierLinkedList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "firstExternalNullifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextExternalNullifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumIdentityCommitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hash11", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hash5", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "insertIdentity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "insertLeaf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isBroadcastPermissioned",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isExternalNullifierActive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignalAndProofs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastExternalNullifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numExternalNullifiers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "packProof", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "preBroadcastCheck",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reactivateExternalNullifier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "root", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rootHistory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLogicAddyasProxy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPermissioning",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unpackProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {
    "ExternalNullifierAdd(uint232)": EventFragment;
    "ExternalNullifierChangeStatus(uint232,bool)": EventFragment;
    "LeafInsertion(uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "PermissionSet(bool)": EventFragment;
    "Signal(uint8)": EventFragment;
    "Voter(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExternalNullifierAdd"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "ExternalNullifierChangeStatus"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LeafInsertion"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PermissionSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Signal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Voter"): EventFragment;
}

export type ExternalNullifierAddEvent = TypedEvent<
  [BigNumber],
  { externalNullifier: BigNumber }
>;

export type ExternalNullifierAddEventFilter =
  TypedEventFilter<ExternalNullifierAddEvent>;

export type ExternalNullifierChangeStatusEvent = TypedEvent<
  [BigNumber, boolean],
  { externalNullifier: BigNumber; active: boolean }
>;

export type ExternalNullifierChangeStatusEventFilter =
  TypedEventFilter<ExternalNullifierChangeStatusEvent>;

export type LeafInsertionEvent = TypedEvent<
  [BigNumber, BigNumber],
  { leaf: BigNumber; leafIndex: BigNumber }
>;

export type LeafInsertionEventFilter = TypedEventFilter<LeafInsertionEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PermissionSetEvent = TypedEvent<
  [boolean],
  { newPermission: boolean }
>;

export type PermissionSetEventFilter = TypedEventFilter<PermissionSetEvent>;

export type SignalEvent = TypedEvent<[number], { signal: number }>;

export type SignalEventFilter = TypedEventFilter<SignalEvent>;

export type VoterEvent = TypedEvent<[string], { voter: string }>;

export type VoterEventFilter = TypedEventFilter<VoterEvent>;

export interface Semaphore extends BaseContract {
  contractName: "Semaphore";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SemaphoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    NOTHING_UP_MY_SLEEVE_ZERO(overrides?: CallOverrides): Promise<[BigNumber]>;

    addExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    broadcastSignal(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      proposalId: BigNumberish,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    castVote(
      proposalId: BigNumberish,
      vote: BigNumberish,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deactivateExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    externalNullifierLinkedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, boolean] & {
        next: BigNumber;
        exists: boolean;
        isActive: boolean;
      }
    >;

    firstExternalNullifier(overrides?: CallOverrides): Promise<[BigNumber]>;

    getNextExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getNumIdentityCommitments(overrides?: CallOverrides): Promise<[BigNumber]>;

    hash11(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    insertIdentity(
      _identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    insertLeaf(
      _leaf: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isBroadcastPermissioned(overrides?: CallOverrides): Promise<[boolean]>;

    isExternalNullifierActive(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    isValidSignalAndProofs(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lastExternalNullifier(overrides?: CallOverrides): Promise<[BigNumber]>;

    nullifierHashHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    numExternalNullifiers(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    packProof(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    preBroadcastCheck(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _signalHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    reactivateExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    root(overrides?: CallOverrides): Promise<[BigNumber]>;

    rootHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    sender(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLogicAddyasProxy(
      _logic: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPermissioning(
      _newPermission: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpackProof(
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber],
        [[BigNumber, BigNumber], [BigNumber, BigNumber]],
        [BigNumber, BigNumber]
      ]
    >;

    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<[boolean] & { r: boolean }>;
  };

  NOTHING_UP_MY_SLEEVE_ZERO(overrides?: CallOverrides): Promise<BigNumber>;

  addExternalNullifier(
    _externalNullifier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  broadcastSignal(
    _signal: BytesLike,
    _proof: BigNumberish[],
    _root: BigNumberish,
    _nullifiersHash: BigNumberish,
    _externalNullifier: BigNumberish,
    proposalId: BigNumberish,
    reason: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  castVote(
    proposalId: BigNumberish,
    vote: BigNumberish,
    reason: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deactivateExternalNullifier(
    _externalNullifier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  externalNullifierLinkedList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean, boolean] & {
      next: BigNumber;
      exists: boolean;
      isActive: boolean;
    }
  >;

  firstExternalNullifier(overrides?: CallOverrides): Promise<BigNumber>;

  getNextExternalNullifier(
    _externalNullifier: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getNumIdentityCommitments(overrides?: CallOverrides): Promise<BigNumber>;

  hash11(array: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

  hash5(
    array: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hashLeftRight(
    _left: BigNumberish,
    _right: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  insertIdentity(
    _identityCommitment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  insertLeaf(
    _leaf: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isBroadcastPermissioned(overrides?: CallOverrides): Promise<boolean>;

  isExternalNullifierActive(
    _externalNullifier: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  isValidSignalAndProofs(
    _signal: BytesLike,
    _proof: BigNumberish[],
    _root: BigNumberish,
    _nullifiersHash: BigNumberish,
    _externalNullifier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lastExternalNullifier(overrides?: CallOverrides): Promise<BigNumber>;

  nullifierHashHistory(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  numExternalNullifiers(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  packProof(
    _a: [BigNumberish, BigNumberish],
    _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
    _c: [BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  preBroadcastCheck(
    _signal: BytesLike,
    _proof: BigNumberish[],
    _root: BigNumberish,
    _nullifiersHash: BigNumberish,
    _signalHash: BigNumberish,
    _externalNullifier: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  reactivateExternalNullifier(
    _externalNullifier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  root(overrides?: CallOverrides): Promise<BigNumber>;

  rootHistory(arg0: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

  sender(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLogicAddyasProxy(
    _logic: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPermissioning(
    _newPermission: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpackProof(
    _proof: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber, BigNumber],
      [[BigNumber, BigNumber], [BigNumber, BigNumber]],
      [BigNumber, BigNumber]
    ]
  >;

  verifyProof(
    a: [BigNumberish, BigNumberish],
    b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
    c: [BigNumberish, BigNumberish],
    input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    NOTHING_UP_MY_SLEEVE_ZERO(overrides?: CallOverrides): Promise<BigNumber>;

    addExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    broadcastSignal(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      proposalId: BigNumberish,
      reason: string,
      overrides?: CallOverrides
    ): Promise<void>;

    castVote(
      proposalId: BigNumberish,
      vote: BigNumberish,
      reason: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deactivateExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    externalNullifierLinkedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, boolean] & {
        next: BigNumber;
        exists: boolean;
        isActive: boolean;
      }
    >;

    firstExternalNullifier(overrides?: CallOverrides): Promise<BigNumber>;

    getNextExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumIdentityCommitments(overrides?: CallOverrides): Promise<BigNumber>;

    hash11(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    insertIdentity(
      _identityCommitment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    insertLeaf(
      _leaf: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBroadcastPermissioned(overrides?: CallOverrides): Promise<boolean>;

    isExternalNullifierActive(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    isValidSignalAndProofs(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    lastExternalNullifier(overrides?: CallOverrides): Promise<BigNumber>;

    nullifierHashHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    numExternalNullifiers(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    packProof(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    preBroadcastCheck(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _signalHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    reactivateExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    root(overrides?: CallOverrides): Promise<BigNumber>;

    rootHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    sender(overrides?: CallOverrides): Promise<string>;

    setLogicAddyasProxy(
      _logic: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setPermissioning(
      _newPermission: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpackProof(
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, BigNumber],
        [[BigNumber, BigNumber], [BigNumber, BigNumber]],
        [BigNumber, BigNumber]
      ]
    >;

    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "ExternalNullifierAdd(uint232)"(
      externalNullifier?: BigNumberish | null
    ): ExternalNullifierAddEventFilter;
    ExternalNullifierAdd(
      externalNullifier?: BigNumberish | null
    ): ExternalNullifierAddEventFilter;

    "ExternalNullifierChangeStatus(uint232,bool)"(
      externalNullifier?: BigNumberish | null,
      active?: boolean | null
    ): ExternalNullifierChangeStatusEventFilter;
    ExternalNullifierChangeStatus(
      externalNullifier?: BigNumberish | null,
      active?: boolean | null
    ): ExternalNullifierChangeStatusEventFilter;

    "LeafInsertion(uint256,uint256)"(
      leaf?: BigNumberish | null,
      leafIndex?: BigNumberish | null
    ): LeafInsertionEventFilter;
    LeafInsertion(
      leaf?: BigNumberish | null,
      leafIndex?: BigNumberish | null
    ): LeafInsertionEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "PermissionSet(bool)"(
      newPermission?: boolean | null
    ): PermissionSetEventFilter;
    PermissionSet(newPermission?: boolean | null): PermissionSetEventFilter;

    "Signal(uint8)"(signal?: null): SignalEventFilter;
    Signal(signal?: null): SignalEventFilter;

    "Voter(address)"(voter?: null): VoterEventFilter;
    Voter(voter?: null): VoterEventFilter;
  };

  estimateGas: {
    NOTHING_UP_MY_SLEEVE_ZERO(overrides?: CallOverrides): Promise<BigNumber>;

    addExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    broadcastSignal(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      proposalId: BigNumberish,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    castVote(
      proposalId: BigNumberish,
      vote: BigNumberish,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deactivateExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    externalNullifierLinkedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    firstExternalNullifier(overrides?: CallOverrides): Promise<BigNumber>;

    getNextExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNumIdentityCommitments(overrides?: CallOverrides): Promise<BigNumber>;

    hash11(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    insertIdentity(
      _identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    insertLeaf(
      _leaf: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isBroadcastPermissioned(overrides?: CallOverrides): Promise<BigNumber>;

    isExternalNullifierActive(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    isValidSignalAndProofs(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lastExternalNullifier(overrides?: CallOverrides): Promise<BigNumber>;

    nullifierHashHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numExternalNullifiers(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    packProof(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    preBroadcastCheck(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _signalHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reactivateExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    root(overrides?: CallOverrides): Promise<BigNumber>;

    rootHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sender(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLogicAddyasProxy(
      _logic: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPermissioning(
      _newPermission: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpackProof(
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    NOTHING_UP_MY_SLEEVE_ZERO(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    broadcastSignal(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      proposalId: BigNumberish,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    castVote(
      proposalId: BigNumberish,
      vote: BigNumberish,
      reason: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deactivateExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    externalNullifierLinkedList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    firstExternalNullifier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNumIdentityCommitments(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash11(
      array: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hash5(
      array: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashLeftRight(
      _left: BigNumberish,
      _right: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    insertIdentity(
      _identityCommitment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    insertLeaf(
      _leaf: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isBroadcastPermissioned(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExternalNullifierActive(
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isValidSignalAndProofs(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lastExternalNullifier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nullifierHashHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numExternalNullifiers(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    packProof(
      _a: [BigNumberish, BigNumberish],
      _b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      _c: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    preBroadcastCheck(
      _signal: BytesLike,
      _proof: BigNumberish[],
      _root: BigNumberish,
      _nullifiersHash: BigNumberish,
      _signalHash: BigNumberish,
      _externalNullifier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reactivateExternalNullifier(
      _externalNullifier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    root(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rootHistory(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sender(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLogicAddyasProxy(
      _logic: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPermissioning(
      _newPermission: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpackProof(
      _proof: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyProof(
      a: [BigNumberish, BigNumberish],
      b: [[BigNumberish, BigNumberish], [BigNumberish, BigNumberish]],
      c: [BigNumberish, BigNumberish],
      input: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
