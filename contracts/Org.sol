// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Variables.sol";
import "./Modifiers.sol";
import "./Events.sol";
import "./Functions.sol";

contract Org is Variables, Modifiers,Events, Functions{
    //Register User KYC by registered Orgs
    function registerKYC(
        address _custaddress,
        string memory _jsonHash,
        string memory _photohash,
        string memory _citizenship_front_hash,
        string memory _citizenship_back_hash,
        bool _kycStatus,
        uint _d,
        uint _n
    ) public isOrgValid returns (bool) {
        require(
            customers[_custaddress].custAddress != _custaddress,
            "User already exists"
        );
        writeKYC(
            _custaddress,
            _jsonHash,
            _photohash,
            _citizenship_front_hash,
            _citizenship_back_hash,
            _kycStatus,
            _d,
            _n
        );
        requestKYC(_custaddress);
        emit Events.customerAdded(_custaddress, _kycStatus);
        return true;
    }

    function rateCustomer(
        address _custaddress,
        uint _rating
    ) public isOrgValid {
        require(_rating >= 1 && _rating <= 5, "Invalid rating");
        require(
            customers[_custaddress].custAddress == _custaddress,
            "Customer not found"
        );
        require(
            !customerRatings[_custaddress].ratedBy[msg.sender],
            "Already rated this customer"
        );

        customerRatings[_custaddress].totalRating += _rating;
        customerRatings[_custaddress].numRatings += 1;
        customerRatings[_custaddress].ratedBy[msg.sender] = true;

        emit Events.CustomerRated(_custaddress, msg.sender, _rating);
    }

    function getCustomerRating(
        address _custaddress
    ) public view returns (uint) {
        require(
            customers[_custaddress].custAddress == _custaddress,
            "Customer not found"
        );
        if (customerRatings[_custaddress].numRatings == 0) {
            return 0;
        }
        return
            customerRatings[_custaddress].totalRating /
            customerRatings[_custaddress].numRatings;
    }

    //View User KYC by Authorized Orgs
    function viewKYC(
        address _custaddress
    )
        public
        view
        returns (
            bool,
            string memory,
            string memory,
            string memory,
            string memory,
            uint,
            uint
        )
    {
        require(
            findOrg(_custaddress, msg.sender),
            "User hasnt given their consent"
        );
        return (
            customers[_custaddress].kycStatus,
            customers[_custaddress].jsonHash,
            customers[_custaddress].photoHash,
            customers[_custaddress].citizenship_front_hash,
            customers[_custaddress].citizenship_back_hash,
            customers[_custaddress].d,
            customers[_custaddress].n
        );
    }



    function validOrg() public view returns (bool) {
        if (organizations[msg.sender].ethAddress == msg.sender) {
            return true;
        } else {
            return false;
        }
    }

        function getYourOrgDetail()
        public
        view
        isOrgValid
        returns (Organization memory)
    {
        return organizations[msg.sender];
    }

        //Update User KYC by registered and authorized orgs
    function updateKYC(
        address _custaddress,
        string memory _jsonHash,
        string memory _photohash,
        string memory _citizenship_front_hash,
        string memory _citizenship_back_hash,
        bool _kycStatus,
        uint _d,
        uint _n
    ) public isOrgValid returns (bool) {
        require(
            customers[_custaddress].custAddress == _custaddress,
            "User doesn't exist"
        );
        require(
            findOrg(_custaddress, msg.sender),
            "You dont have access to this user"
        );
        writeKYC(
            _custaddress,
            _jsonHash,
            _photohash,
            _citizenship_front_hash,
            _citizenship_back_hash,
            _kycStatus,
            _d,
            _n
        );
        emit Events.customerUpdated(_custaddress, _kycStatus);
        return true;
    }

    //Delete User KYC request by organization
    function deleteRequestOrg(uint _reqcount) public isOrgValid returns (bool) {
        require(
            kycrequestsbyorg[msg.sender].ethAddress == msg.sender,
            "You dont have authority to delete"
        );
        require(
            kycrequestsbyorg[msg.sender].kycrequestlist[_reqcount].req_count ==
                _reqcount,
            "Request doesnt exist"
        );
        address _custaddress = kycrequestsbyorg[msg.sender]
            .kycrequestlist[_reqcount]
            .Address;
        deleteRequest(_reqcount, _custaddress, msg.sender);
        return true;
    }

    //Remove User KYC by Orgs
    function removeKYC(address _custaddress) public isOrgValid returns (bool) {
        require(
            customers[_custaddress].custAddress == _custaddress,
            "User doesn't exist"
        );
        require(
            findOrg(_custaddress, msg.sender),
            "You dont have access to this user"
        );
        remove(_custaddress, msg.sender);
        emit Events.kycRemoved(_custaddress, msg.sender);
        return true;
    }
}