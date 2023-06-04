// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Variables.sol";


contract Modifiers is Variables{
    modifier isAdmin() {
        require(admin == msg.sender, "Admin only");
        _;
    }

    // Checks wheter the org exists or not
    modifier isOrgValid() {
        require(
            organizations[msg.sender].ethAddress == msg.sender,
            "Org not exist"
        );
        _;
    }
}