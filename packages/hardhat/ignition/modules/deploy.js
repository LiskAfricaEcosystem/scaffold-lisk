// https://hardhat.org/hardhat-runner/docs/advanced/migrating-from-hardhat-waffle (Migrating away from hardhat-waffle)
const hre = require("hardhat");

async function main() {
  
  // compile the contract to get the latest bytecode and ABI - Optional
  await hre.run('compile');

  // step one get the NFT Marketplace 
  const mockNFTMarketplace = await hre.ethers.getContractFactory("MockNFTMarketplace");
    // step one deploy the NFT Marketplace 
  const deployedNFT = await mockNFTMarketplace.deploy();
  await deployedNFT.waitForDeployment()    //  deployed(); depreciated
  console.log("NFT marketplace deployed to:", await deployedNFT.getAddress()) // .address); depreciated

  // Step two, create a new instance of the NFTDAO contract
  // const nftDao = await hre.ethers.getContractFactory("NFTDAO");
  // let dao = await nftDao.deploy(deployedNFT.address);
  // await dao.waitForDeployment();
  // console.log("NFT DAO deployed to:", dao.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exit(1);
});


// const { defineModule, deploy } = require("@nomicfoundation/hardhat-ignition/modules");

// module.exports = defineModule("Deploy NFT Marketplace and DAO", (builder) => {
//   builder
//     .deploy("MockNFTMarketplace", {
//       deployer: "default", // uses the default account from hardhat
//       args: [], // constructor arguments if any
//     })
//     .afterDeploy(async ({ contract }) => {
//       // The 'contract' is the deployed MockNFTMarketplace instance
//       console.log(`MockNFTMarketplace deployed at ${contract.address}`);
//     })
//     .deploy("NFTDAO", {
//       deployer: "default",
//       args: [], // constructor arguments if any, e.g., [contract.address] to pass marketplace address
//     })
//     .afterDeploy(({ contract }) => {
//       console.log(`NFTDAO deployed at ${contract.address}`);
//     });
// });

