pragma solidity ^0.4.23;

contract KeyStorage {

    mapping(address => mapping(bytes32 => uint)) _uintStorage;
    mapping(address => mapping(bytes32 => address)) _addressStorage;
    mapping(address => mapping(bytes32 => bool)) _boolStorage;

    // Get Methods
    function getAddress(bytes32 key) public view returns (address) {
        return _addressStorage[msg.sender][key];
    }

    function getUint(bytes32 key) public view returns (uint) {
        return _uintStorage[msg.sender][key];
    }

    function getBool(bytes32 key) public view returns (bool) {
        return _boolStorage[msg.sender][key];
    }

    // Set Methods
    function setAddress(bytes32 key, address _value) public {
        _addressStorage[msg.sender][key] = _value;
    }
    
    function setUint(bytes32 key, uint _value) public {
        _uintStorage[msg.sender][key] = _value;
    }
    
    function setBool(bytes32 key, bool _value) public {
        _boolStorage[msg.sender][key] = _value;
    }
}
