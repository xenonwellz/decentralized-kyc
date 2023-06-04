// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Variables.sol";
import "./Modifiers.sol";
import "./Events.sol";
import "./Functions.sol";

contract Cust is Variables, Modifiers,Events, Functions{
        function viewYourKYC() public view returns (Customer memory) {
        require(validCust(), "Customer not valid");
        return customers[msg.sender];
    }

    function viewOrgWithAccess() public view returns (address[] memory) {
        require(
            customers[msg.sender].custAddress == msg.sender,
            "You dont have authority"
        );
        return customers[msg.sender].organization;
    }

    function viewRequestCust() public view returns (kycRequestList[] memory) {
        require(validCust(), "Customer not valid");
        kycRequestList[] memory ret = new kycRequestList[](
            kycrequestsbycust[msg.sender].kycrequestlist.length
        );
        uint j = 0;
        for (
            uint i = 0;
            i < kycrequestsbycust[msg.sender].kycrequestlist.length;
            i++
        ) {
            ret[j] = kycrequestsbycust[msg.sender].kycrequestlist[i];
            j++;
        }
        return (ret);
    }


    //Delete User KYC Request after user provides access
    function deleteRequestCust(uint _reqcount, address _ethAddress) public {
        require(
            organizations[_ethAddress].ethAddress == _ethAddress,
            "This particular organizations doesnt exist"
        );
        require(
            kycrequestsbyorg[_ethAddress].kycrequestlist[_reqcount].Address ==
                msg.sender,
            "User not valid"
        );
        require(
            kycrequestsbyorg[_ethAddress].kycrequestlist[_reqcount].req_count ==
                _reqcount,
            "Request doesnt exist"
        );
        deleteRequest(_reqcount, msg.sender, _ethAddress);
    }

    //Return Array of all pending request of the orgs
    function listRequest()
        public
        view
        isOrgValid
        returns (kycRequestList[] memory)
    {
        kycRequestList[] memory ret = new kycRequestList[](
            kycrequestsbyorg[msg.sender].req_count
        );
        uint j = 0;
        for (uint i = 0; i < kycrequestsbyorg[msg.sender].req_count; i++) {
            ret[j] = kycrequestsbyorg[msg.sender].kycrequestlist[i];
            j++;
        }
        return (ret);
    }

    //Give User KYC access to Org
    function giveAccessKYC(
        uint _reqcount,
        address _ethAddress,
        bool _isAllowed
    ) public returns (bool) {
        require(
            customers[msg.sender].custAddress == msg.sender,
            "You dont have authority to give access"
        );
        require(
            kycrequestsbyorg[_ethAddress].kycrequestlist[_reqcount].Address ==
                msg.sender,
            "User not valid"
        );
        require(
            kycrequestsbyorg[_ethAddress].kycrequestlist[_reqcount].req_count ==
                _reqcount,
            "Requests not found"
        );
        if (_isAllowed == true) {
            if (findOrg(msg.sender, _ethAddress) == false) {
                customers[msg.sender].organization.push(_ethAddress);
            }
            deleteRequestCust(_reqcount, _ethAddress);
            emit Events.accessGiven(
                _reqcount,
                msg.sender,
                _ethAddress,
                _isAllowed
            );
        } else {
            deleteRequestCust(_reqcount, _ethAddress);
        }
        return true;
    }

    //Revoke User KYC access of Orgs
    function revokeAccessKYC(address _ethAddress) public returns (bool) {
        require(
            customers[msg.sender].custAddress == msg.sender,
            "You dont have authority to revoke access"
        );
        require(
            findOrg(msg.sender, _ethAddress),
            "You dont have access to this user"
        );
        remove(msg.sender, _ethAddress);
        emit Events.accessRevoked(msg.sender, _ethAddress);
        return true;
    }
}