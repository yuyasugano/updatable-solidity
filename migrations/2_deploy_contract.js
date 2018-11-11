var KeyStorageContract = artifacts.require("./KeyStorage.sol");
var DelegateV1Contract = artifacts.require("./DelegateV1.sol");
var DelegateV2Contract = artifacts.require("./DelegateV2.sol");
var ProxyContract = artifacts.require("./ProxyContract.sol");

module.exports = function(deployer) {
    deployer.then(async function () {
        await deployer.deploy(KeyStorageContract);
        await deployer.deploy(DelegateV1Contract);
        await deployer.deploy(DelegateV2Contract);
        return deployer.deploy(ProxyContract, KeyStorageContract.address, web3.eth.accounts[0]);
    });
}
