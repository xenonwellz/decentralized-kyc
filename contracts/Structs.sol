// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

struct Customer {
    address custAddress;
    string jsonHash;
    string photoHash;
    string citizenship_front_hash;
    string citizenship_back_hash;
    uint d;
    uint n;
    address[] organization;
    bool kycStatus;
}

struct CustomerRating {
    uint totalRating;
    uint numRatings;
    mapping(address => bool) ratedBy;
}

struct Organization {
    string name;
    address ethAddress;
}

struct kycRequest {
    address ethAddress;
    uint req_count;
    kycRequestList[] kycrequestlist;
}

struct kycRequestList {
    uint req_count;
    address Address;
}

struct kycRequestCust {
    kycRequestList[] kycrequestlist;
    address custAddress;
}
