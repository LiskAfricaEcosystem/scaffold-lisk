// // SPDX-License-Identifier: MIT | GNU | APACHE |
// pragma solidity ^0.8.0;

// // import ownable contract later

// contract RealHouses {
//     uint public totalProperties =  0;
//     uint public totalUser = 0;
//     uint public totalManagers = 0;

//     enum managersRole { admin, agent, buyer, seller};

//     struct User {
//         address ownerAddress;
//         string Location;
//     } 

//     struct Manager {
//         address managersAddress;
//         managersRole;
//     }

//     struct Property {
//         uint256 Id;
//         string Location;
//         address ownerAddress;
//     }


//     mapping(uint256 => Property) public properties;
//     mapping(address => User) public users;
//     mapping(uint256 => Manager) public Managers;


//     // setters and getters function
//     function createUser (address _ownerAddress, string memory _location) public view returns (address) {
//         // require or check if the user is available - based on the address
//         users[_ownerAddress] = User(_ownerAddress, _location);
//     }


//     function createProperty(string memory _location) public view returns(uint) {
//         id++; // totalProperty++;
//         properties[totalProperty] = Property(_location, msg.sender);

//     }

// }

