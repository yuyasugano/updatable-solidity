pragma solidity ^0.4.23;

import "./SafeMath.sol";
import "./StorageState.sol";

contract DelegateV1 is StorageState {
    using SafeMath for uint256;
    
    function setNumberOfOwners(uint256 num) public {
        _storage.setUint("totalSupply", num);
    }
    
    function getNumberOfOwners() view public returns (uint256) {
        return _storage.getUint("totalSupply");
    }
}

