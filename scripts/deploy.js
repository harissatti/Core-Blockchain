
const hre = require("hardhat");
require('dotenv').config();
// //https://scan.test.btcs.network/address/0x698bF3CeD50FDf6eb2a93Df592755594A06Dc190#code
// //https://scan.test.btcs.network/address/0xcf4db00B810FDBf0F4673D6eC13B554976e7Fa22#code
const { ethers, run, network } = require("hardhat");

async function main() {

  const [deployer] = await ethers.getSigners();
  console.log(`Connected account: ${deployer.address}`);

  const ERC721a = await ethers.deployContract("Al_Hejin_CamelNFT",["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
     "https://gateway.pinata.cloud/ipfs/",1,10000000,300000]);
  await ERC721a.waitForDeployment();
  console.log(`ERC721 contract deployed to : ${ERC721a.target}`);



  // if (network.config.chainId === 97 && process.env.BINANCE_API || network.config.chainId === 80001 && process.env.POLYGON_API || network.config.chainId === 11155111 && process.env.ETHEREUM_API) {
    if(network.config.chainId==1115 && process.env.CORE_MAINNET_API ){
    setTimeout(async () => {
      verify(ERC721a.target, ["0x5B38Da6a701c568545dCfcB03FcB875f56beddC4",
      "https://gateway.pinata.cloud/ipfs/",1,10000000,300000], 'Al_Hejin_CamelNFT').then(async () => {
      }).catch((e) => {
        console.log(`ERC721a: ${e.message}`)
      })
      // ERC721(ERC721a, deployer.address)
    }, 30000);

   }

}

async function verify(contractAddress, args, name) {
  console.log(`verifying ${name} contract....`)
  try {

    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
      // libraries: {   //If contract has libraries with undetectable addresses
      //   SomeLibrary: "0x...",
      // }
    });

  } catch (e) {

    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e)
    }

  }

}

// async function ERC721(ERC20Contract, deployer) {
//   try {
//     const result = await ERC20Contract.mint(deployer, ethers.parseUnits("10000000", 'ether'));
//     console.log(`ERC20Transaction Hash : ${result.hash}`);
//     const balance = await ERC20Contract.balanceOf(deployer)
//     console.log(`BalanceOf: ${Number(ethers.formatUnits(balance, 'ether'))}`)
//   } catch (e) {
//     console.log(`ERC20: ${e.message}`)
//   }
// }

// async function marketPlace(marketPlaceContract, erc20Address ) {
//   try {
//     const result = await marketPlaceContract.addCurrency("USDT", erc20Address);
//     console.log(`MarketPlace Transaction Hash : ${result.hash}`)
//     const currency = await marketPlaceContract.addressCurrency("USDT")
//     console.log(`Added currency address: ${currency}`)
//   } catch (e) {
//     console.log(`MarketPlace: ${e.message}`)
//   }
// }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// 0x66ec92D058f9dE850A7F40747199c5155395799e