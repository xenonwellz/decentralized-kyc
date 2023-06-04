// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./Structs.sol";

contract Variables {
    address public admin;

    mapping(address => CustomerRating) public customerRatings;
    mapping(address => Customer) customers;
    mapping(address => Organization) organizations;
    mapping(address => kycRequest) kycrequestsbyorg;
    mapping(address => kycRequestCust) kycrequestsbycust;
}
