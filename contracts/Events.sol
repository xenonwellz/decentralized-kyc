// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Events {
    event orgAdded(string name, address ethAddress);
    event orgRemoved(address ethAddress);
    event customerAdded(address custAddress, bool kycStatus);
    event customerUpdated(address custAddress, bool kycStatus);
    event CustomerRated(
        address indexed customerAddress,
        address indexed orgAddress,
        uint rating
    );
    event requestAdded(
        uint reqid,
        address ethAddress,
        address custAddress,
        bool isAllowed
    );
    event requestRemoved(uint reqid, address ethAddress);
    event accessGiven(
        uint reqid,
        address custAddress,
        address ethAddress,
        bool isAllowed
    );
    event accessRevoked(address custAddress, address ethAddress);
    event kycRemoved(address custAddress, address ethAddress);
}