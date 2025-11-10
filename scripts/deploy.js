async function main() {
  const StakingToken = await ethers.getContractFactory(\"StakingToken\");
  const token = await StakingToken.deploy();
  await token.waitForDeployment();
  console.log(\"Deployed to:\", await token.getAddress());
}
main();
