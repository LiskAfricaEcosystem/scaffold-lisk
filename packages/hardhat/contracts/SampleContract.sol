// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SampleContract {
    uint256 private data;

    // Write function to store data
    function setData(uint256 _data) public {
        data = _data;
    }

    // Read function to retrieve data
    function getData() public view returns (uint256) {
        return data;
    }
}
