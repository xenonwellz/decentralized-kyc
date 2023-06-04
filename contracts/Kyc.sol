// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Org.sol";
import "./Cust.sol";
import "./Admin.sol";

contract Kyc is Org, Cust, Admin {

    constructor() {
        admin = msg.sender;
    }

}
