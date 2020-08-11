# Updatable contract example
A demo solidity and test codes to upgrade the delegate contract. The codes and contracts are explained by Himanshu Chawla in Medium.
https://medium.com/quillhash/how-to-write-upgradable-smart-contracts-in-solidity-d8f1b95a0e9a

# Requirements
The code is written in solidity version 0.4.23 and the test uses async/await functions.
You may need node version above 7.6 to run those functions.

Here's information of workable environment of mine.

node --version
v10.13.0

npm --version
6.4.1

## Contracts
`KeyStorage` contract contains a common storage for all storage state variables that will be shared among all delegate contracts. It also has getter and setter functions to update and obtain values of state from delegate contracts. `DelegateV1/V2` contracts are implemented to run the actual functions of Dapps. DelegateV1 has been deployed but a bug was found. DelegateV2 is new version of the delegate contract and our aim is to replace the delegate contract which has application logics with newer contract. As an address change due to replacement of the delegate contracts, `ProxyContract` takes place to use the delegatecall opcode to forward functions calls to a target contract which was updatable. The delegatecall retains the state of the function call, the target contract logics can be updated and the state will remain in the proxy contract for the updated target contract logics to use.

## To Migrate:
1. Run: `truffle develop` under the application root
2. In the development console run: `compile`
3. Next run: `migrate` or (`migrate --reset`)

## To Test:
1. Migrate the contracts in the truffle development blockchain
2. `truffle test` or `test` in the truffle development console
 
## License
 
This code is licensed under the MIT License. 
