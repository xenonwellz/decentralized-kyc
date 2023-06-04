// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Variables.sol";
import "./Modifiers.sol";
import "./Events.sol";

contract Functions is Variables, Modifiers, Events {
    function findRequestIndex(
        address _custaddress,
        address _ethAddress
    ) internal view returns (uint) {
        uint i = 0;
        for (
            i;
            i < kycrequestsbycust[_custaddress].kycrequestlist.length;
            i++
        ) {
            if (
                kycrequestsbycust[_custaddress].kycrequestlist[i].Address ==
                _ethAddress
            ) {
                break;
            }
        }
        return i;
    }

    function validAdmin() public view returns (bool) {
        if (admin == msg.sender) {
            return true;
        } else {
            return false;
        }
    }

    function validCust() public view returns (bool) {
        if (customers[msg.sender].custAddress == msg.sender) {
            return true;
        } else {
            return false;
        }
    }

    function writeKYC(
        address _custaddress,
        string memory _jsonHash,
        string memory _photohash,
        string memory _citizenship_front_hash,
        string memory _citizenship_back_hash,
        bool _kycStatus,
        uint _d,
        uint _n
    ) internal {
        require(bytes(_jsonHash).length > 0);
        require(bytes(_photohash).length > 0);
        require(bytes(_citizenship_back_hash).length > 0);
        require(bytes(_citizenship_front_hash).length > 0);
        customers[_custaddress].custAddress = _custaddress;
        customers[_custaddress].jsonHash = _jsonHash;
        customers[_custaddress].photoHash = _photohash;
        customers[_custaddress]
            .citizenship_front_hash = _citizenship_front_hash;
        customers[_custaddress].citizenship_back_hash = _citizenship_back_hash;
        customers[_custaddress].kycStatus = _kycStatus;
        customers[_custaddress].d = _d;
        customers[_custaddress].n = _n;
        kycrequestsbycust[_custaddress].custAddress = _custaddress;
    }

    //Check if Org has access to the user KYC
    function findOrg(
        address _custaddress,
        address ethAddress
    ) internal view returns (bool) {
        uint i = 0;
        for (i; i < customers[_custaddress].organization.length; i++) {
            if (customers[_custaddress].organization[i] == ethAddress) {
                return true;
            }
        }
        return false;
    }

    //Check if request exist
    function findRequest(address _custaddress) internal view returns (bool) {
        uint i = 0;
        for (i; i < kycrequestsbyorg[msg.sender].req_count; i++) {
            if (
                kycrequestsbyorg[msg.sender].kycrequestlist[i].Address ==
                _custaddress
            ) {
                return true;
            }
        }
        return false;
    }

    function requestKYC(address _custaddress) public isOrgValid returns (bool) {
        require(
            customers[_custaddress].custAddress == _custaddress,
            "Customer doesnt exists"
        );
        require(
            findOrg(_custaddress, msg.sender) == false,
            "Already have access"
        );
        require(findRequest(_custaddress) == false, "Request Already Exists");
        kycrequestsbyorg[msg.sender].kycrequestlist.push(
            kycRequestList(kycrequestsbyorg[msg.sender].req_count, _custaddress)
        );
        kycrequestsbycust[_custaddress].kycrequestlist.push(
            kycRequestList(kycrequestsbyorg[msg.sender].req_count, msg.sender)
        );
        kycrequestsbyorg[msg.sender].req_count++;
        emit Events.requestAdded(
            kycrequestsbyorg[msg.sender].req_count - 1,
            msg.sender,
            _custaddress,
            false
        );
        return true;
    }

    function deleteRequest(
        uint _reqcount,
        address _custaddress,
        address _ethAddress
    ) internal {
        uint index = findRequestIndex(_custaddress, _ethAddress);
        kycrequestsbyorg[_ethAddress].kycrequestlist[
            _reqcount
        ] = kycrequestsbyorg[_ethAddress].kycrequestlist[
            kycrequestsbyorg[_ethAddress].kycrequestlist.length - 1
        ];
        kycrequestsbyorg[_ethAddress].kycrequestlist.pop();
        kycrequestsbycust[_custaddress].kycrequestlist[
            index
        ] = kycrequestsbycust[_custaddress].kycrequestlist[
            kycrequestsbycust[_custaddress].kycrequestlist.length - 1
        ];
        kycrequestsbycust[_custaddress].kycrequestlist.pop();
        if (
            kycrequestsbyorg[msg.sender].kycrequestlist.length != _reqcount &&
            kycrequestsbyorg[_ethAddress].req_count > 1
        ) {
            kycrequestsbyorg[_ethAddress]
                .kycrequestlist[_reqcount]
                .req_count = _reqcount;
            address add = kycrequestsbyorg[_ethAddress]
                .kycrequestlist[_reqcount]
                .Address;
            if (kycrequestsbycust[add].kycrequestlist.length > 0) {
                index = findRequestIndex(add, _ethAddress);
                kycrequestsbycust[add]
                    .kycrequestlist[index]
                    .req_count = _reqcount;
            }
        }
        kycrequestsbyorg[_ethAddress].req_count--;
        emit Events.requestRemoved(_reqcount, _ethAddress);
    }

    function remove(address _custaddress, address _ethAddress) internal {
        uint i = findOrgIndex(_custaddress, _ethAddress);
        customers[_custaddress].organization[i] = customers[_custaddress]
            .organization[customers[_custaddress].organization.length - 1];
        customers[_custaddress].organization.pop();
    }

    function findOrgIndex(
        address _custaddress,
        address ethAddress
    ) internal view returns (uint) {
        uint i = 0;
        for (i; i < customers[_custaddress].organization.length; i++) {
            if (customers[_custaddress].organization[i] == ethAddress) {
                break;
            }
        }
        return i;
    }
}
