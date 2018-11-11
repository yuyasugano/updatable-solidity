var KeyStorageContract = artifacts.require("./KeyStorage.sol");
var DelegateV1Contract = artifacts.require("./DelegateV1.sol");
var DelegateV2Contract = artifacts.require("./DelegateV2.sol");
var ProxyContract = artifacts.require("./ProxyContract.sol");

contract("Updatable-solidity", async function(accounts) {

  it("should create and upgrade the delegate contract", async function() {
    var initialNumber = 10;
    var updatedNumber = 20;

    let keyStorage = await KeyStorageContract.deployed();
    let delegateV1 = await DelegateV1Contract.deployed();
    let delegateV2 = await DelegateV2Contract.deployed();
    let proxyContract = await ProxyContract.deployed();

    // Change _implementation to delegateV1 address
    await proxyContract.upgradeTo(delegateV1.address);
    proxyContract = _.extend(proxyContract, DelegateV1Contract.at(proxyContract.address));

    // Call setNumberOfOwners function and set a number
    await proxyContract.setNumberOfOwners(initialNumber);
    let numOwnerV1 = await proxyContract.getNumberOfOwners();

    // Change _implementation to delegateV2 address
    await proxyContract.upgradeTo(delegateV2.address);
    proxyContract = DelegateV2Contract.at(proxyContract.address);
    // Call getNumberOfOwners function and get the number that was modified by DelegateV1
    let previousOwnerState = await proxyContract.getNumberOfOwners();

    // Call setNumberOfOwners function and set a number
    await proxyContract.setNumberOfOwners(20, {from:accounts[0]});
    let numOwnerV2 = await proxyContract.getNumberOfOwners();

    // console.log(numOwnerV1.toNumber());
    // console.log(previousOwnerState.toNumber());
    // console.log(numOwnerV2.toNumber());
    assert.equal(previousOwnerState.toNumber(), numOwnerV1.toNumber(), "Initial number changed after the contract upgraded");
    assert.equal(numOwnerV2.toNumber(), updatedNumber, "Updated number was wrong after the contract upgraded");
  });
});

