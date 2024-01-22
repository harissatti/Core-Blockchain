require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

require('dotenv').config();
// const CORE_TESTNET_RPC_URL= process.env.CORE_TESTNET_RPC_URL;
const CORE_MAINNET_API=process.env.CORE_MAINNET_API;
const CORE_TESTNET_PRIVATE_KEY= process.env.CORE_TESTNET_PRIVATE_KEY;
module.exports = {
  defaultNetwork: 'testnet',

  networks: {
     hardhat: {
     },
     testnet: {
        url: 'https://rpc.test.btcs.network',
        accounts: [CORE_TESTNET_PRIVATE_KEY],
        chainId: 1115,
     },
     mainnet: {
       url: 'https://rpc.coredao.org',
       accounts: [CORE_TESTNET_PRIVATE_KEY],
       chainId: 1116,
    },
  },
  etherscan: {
   apiKey: {
     testnet: CORE_MAINNET_API,
     mainnet: CORE_MAINNET_API,
   },
   customChains: [
     {
       network: "testnet",
       chainId: 1115,
       urls: {
         apiURL: "https://api.test.btcs.network/api",
         browserURL: "https://scan.test.btcs.network/"
       }
     },
     {
       network: "mainnet",
       chainId: 1116,
       urls: {
         apiURL: "https://openapi.coredao.org/api",
         browserURL: "https://scan.coredao.org/"
       }
     }
   ]
 },
 
  solidity: {
     compilers: [
       {
          version: '0.8.4',
          settings: {
             optimizer: {
                enabled: false,
                runs: 200,
             },
          },
       }
     ],
  },
  paths: {
     sources: './contracts',
     cache: './cache',
     artifacts: './artifacts',
  },
  mocha: {
     timeout: 20000,
  },
};



//https://scan.test.btcs.network/address/0x698bF3CeD50FDf6eb2a93Df592755594A06Dc190#code

//real one
//https://scan.test.btcs.network/address/0x66ec92D058f9dE850A7F40747199c5155395799e#code
//https://scan.test.btcs.network/address/0x693eeEa62A50240e1356Ba5AC1C803FD894381eD#code