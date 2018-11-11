pragma solidity ^0.4.23;

import "./SafeMath.sol";
import "./StorageState.sol";

contract DelegateV2 is StorageState {
    using SafeMath for uint256;
    
    modifier onlyOwner() {
        require(msg.sender == _storage.getAddress("owner"));
        _;
    }
    
    function setNumberOfOwners(uint256 num) public onlyOwner {
        _storage.setUint("totalSupply", num);
    }
    
    function getNumberOfOwners() view public returns (uint256) {
        return _storage.getUint("totalSupply");
    }
}
