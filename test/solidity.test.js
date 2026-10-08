import { expect } from "chai";
import hre from "hardhat";

const { ethers } = hre;

describe("Storage_test.sol", function () {
  it("checkWriteRead", async function () {
    const StorageTest = await ethers.getContractFactory("StorageTest");
    const storageTest = await StorageTest.deploy();
    await storageTest.deployed();
    await storageTest.beforeAll();
    await storageTest.checkWriteRead();
  });
});

describe("Ballot_test.sol", function () {
  it("checkWinningProposal", async function () {
    const BallotTest = await ethers.getContractFactory("BallotTest");
    const ballotTest = await BallotTest.deploy();
    await ballotTest.deployed();
    await ballotTest.beforeAll();
    await ballotTest.checkWinningProposal();
    expect(await ballotTest.checkWinninProposalWithReturnValue()).to.equal(true);
  });
});
