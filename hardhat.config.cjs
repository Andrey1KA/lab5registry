require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-chai-matchers");

const path = require("path");
const { subtask } = require("hardhat/config");
const {
  TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS,
} = require("hardhat/builtin-tasks/task-names");

subtask(TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS).setAction(async (_, __, runSuper) => {
  const paths = await runSuper();
  paths.push(path.join(__dirname, "test", "Storage_test.sol"));
  paths.push(path.join(__dirname, "test", "Ballot_test.sol"));
  return paths;
});

module.exports = {
  solidity: "0.8.24",
};
