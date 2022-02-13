import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import { config as dotenvConfig } from "dotenv"
import "hardhat-gas-reporter"
import { HardhatUserConfig } from "hardhat/config"
import { resolve } from "path"
import "solidity-coverage"
import { config } from "/Users/sidu/Downloads/semaphore_client/package.json"
import "./tasks/deploySemphore"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"


const {RINKEBY_API_URL, ROPSTEN_API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;


//dotenvConfig({ path: resolve(__dirname, "./.env") })

const hardhatConfig: HardhatUserConfig = {
  solidity: config.solidity,
  defaultNetwork: "rinkeby", //"ropsten"
  networks: {
    hardhat: {
      chainId: 1337,
      allowUnlimitedContractSize: true
    },
    localhost: {
      url: "http://localhost:8545",
      allowUnlimitedContractSize: true
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/ElybgFn6H7hx1EfEsGvMKsD-psxb2gsy",
      accounts: ['e6c4b3975e11375e80cb7fdbd1b9048e8b5f114e54eb5b2396f75056e007b33e'],
      gasMultiplier: 10,
      gas: 10000000,
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: "DXYGH5PDSUKHP5FZQWS6T6FYTCG4U1E7HH"
    }
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS === "true",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY
  },
  typechain: {
    target: "ethers-v5"
  }
}

export default hardhatConfig