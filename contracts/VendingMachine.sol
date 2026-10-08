// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract VendingMachine {
    address public owner;
    mapping(address => uint) public balances;
    uint public stock;

    constructor() {
        owner = msg.sender;
        stock = 100;
    }

    function symbol() public pure returns (string memory) {
        return "CUP";
    }

    function getVendingMachineBalance() public view returns (uint) {
        return stock;
    }

    function balanceOf(address addr) public view returns (uint) {
        return balances[addr];
    }

    function refill(uint amount) public {
        require(msg.sender == owner, "Only the owner can refill.");
        stock += amount;
    }

    function purchase(uint amount) public payable {
        require(msg.value >= amount * 1 gwei, "You must pay at least 1 gwei per cupcake");
        require(stock >= amount, "Not enough cupcakes");
        stock -= amount;
        balances[msg.sender] += amount;
    }
}
