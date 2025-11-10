require(\"@nomicfoundation/hardhat-toolbox\");
require(\"dotenv\").config();

module.exports = {
  solidity: \"0.8.20\",
  networks: {
    sepolia: {
      url: https://sepolia.infura.io/v3/,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
