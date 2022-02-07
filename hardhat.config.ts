import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-waffle"
import "@typechain/hardhat"
import { config as dotenvConfig } from "dotenv"
import "hardhat-gas-reporter"
import { HardhatUserConfig } from "hardhat/config"
import { resolve } from "path"
import "solidity-coverage"
import { config } from "/Users/sidu/Downloads/semaphore_server/package.json"
import "./tasks/deploySemphore"
import "@nomiclabs/hardhat-ethers"
import "@nomiclabs/hardhat-etherscan"

const { RINKEBY_API_URL, ROPSTEN_API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;


dotenvConfig({ path: resolve(__dirname, "./.env") })

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
      accounts: ['0x857a00ccb22178ab0387154dcbd3b2cd2c887f21ba2cec5664cf7957381e2831'],
      gasMultiplier: 10,
      gas: 5000000,
    },
  },
  etherscan: {
    apiKey: {
      ropsten: ETHERSCAN_API_KEY,
      rinkeby: ETHERSCAN_API_KEY,    }
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