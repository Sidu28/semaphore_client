/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Hasher",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Hasher__factory>;
    getContractFactory(
      name: "IncrementalQuinTree",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IncrementalQuinTree__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "PoseidonT3",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoseidonT3__factory>;
    getContractFactory(
      name: "PoseidonT6",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoseidonT6__factory>;
    getContractFactory(
      name: "Semaphore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Semaphore__factory>;
    getContractFactory(
      name: "SemaphoreClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SemaphoreClient__factory>;
    getContractFactory(
      name: "Verifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Verifier__factory>;

    getContractAt(
      name: "Hasher",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Hasher>;
    getContractAt(
      name: "IncrementalQuinTree",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IncrementalQuinTree>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "PoseidonT3",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoseidonT3>;
    getContractAt(
      name: "PoseidonT6",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoseidonT6>;
    getContractAt(
      name: "Semaphore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Semaphore>;
    getContractAt(
      name: "SemaphoreClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SemaphoreClient>;
    getContractAt(
      name: "Verifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Verifier>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}