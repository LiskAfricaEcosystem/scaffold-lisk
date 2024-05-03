
// const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");

// Test Cases
// 1. Initial State Check: Verify that the initial price is set correctly and that a token is initially available.
// 2. Purchase Token: Test purchasing an NFT and ensure the correct ownership and token availability post-purchase.
// 3. Purchase Price Validation: Attempt to purchase with an incorrect amount and expect a revert.
// 4. Token availability: Ensure that a token isn't available after being purchased.
const { time, loadFixture, } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");
// const { constants } = ethers;

describe("MockNFTMarketplace", function () {
  // Fixture to deploy the contract before each test
  async function deployNFTMarketplaceFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    // console.log("owner and other account", owner.address, otherAccount.address);
    const MockNFTMarketplace = await ethers.getContractFactory("MockNFTMarketplace");
    const marketplace = await MockNFTMarketplace.deploy();
    await marketplace.waitForDeployment();
    return { marketplace, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right NFT price", async function () {
      const { marketplace } = await loadFixture(deployNFTMarketplaceFixture);
      expect(await marketplace.getPrice()).to.equal(ethers.parseEther("0.1"));
    });

    it("Should ensure a token is available initially", async function () {
      const { marketplace } = await loadFixture(deployNFTMarketplaceFixture);
      expect(await marketplace.available(1)).to.be.false;
    });
  });

  describe("Purchase", function () {
    it("Should allow purchasing an NFT if payment is correct", async function () {
      const { marketplace, owner } = await loadFixture(deployNFTMarketplaceFixture);
      await marketplace.purchase(1, { value: ethers.parseEther("0.1") })
        

     expect(await marketplace.tokens(1)).to.equal(owner.address);
      expect(await marketplace.available(1)).to.be.true;
    });

    it("Should fail if the payment is incorrect", async function () {
      const { marketplace } = await loadFixture(deployNFTMarketplaceFixture);
      await expect(marketplace.purchase(1, { value: ethers.parseEther("0.05") }))
        .to.be.revertedWith("This NFT costs 0.1 ether");
    });
  });
});

