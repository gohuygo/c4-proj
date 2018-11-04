const MyStringStore = artifacts.require("MyStringStore");
const City = artifacts.require("City");

module.exports = function(deployer) {
  deployer.deploy(MyStringStore);
  deployer.deploy(City);
};
