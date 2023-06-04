// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Variables.sol";
import "./Modifiers.sol";
import "./Events.sol";

contract Admin is Variables, Modifiers, Events{

     //Add organization ONLY BY ADMIN
    function addOrg(
        string memory _name,
        address _ethAddress
    ) public isAdmin returns (bool) {
        require(
            organizations[_ethAddress].ethAddress != _ethAddress,
            "Org already added"
        );
        organizations[_ethAddress] = Organization(_name, _ethAddress);
        kycrequestsbyorg[_ethAddress].ethAddress = _ethAddress;
        kycrequestsbyorg[_ethAddress].req_count = 0;
        emit orgAdded(_name, _ethAddress);
        return true;
    }

    //Remove Organization ONLY BY ADMIN
    function removeOrg(address _ethAddress) public isAdmin returns (bool) {
        require(
            organizations[_ethAddress].ethAddress == _ethAddress,
            "Org doesnt exist"
        );
        delete organizations[_ethAddress];
        emit Events.orgRemoved(_ethAddress);
        return true;
    }

        //Return Organization Info if it exists
    function viewOrg(
        address _ethAddress
    ) public view isAdmin returns (Organization memory) {
        require(
            organizations[_ethAddress].ethAddress == _ethAddress,
            "Org doesnt exist"
        );
        return organizations[_ethAddress];
    }


}