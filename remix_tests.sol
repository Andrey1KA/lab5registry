// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

library Assert {
    function equal(uint a, uint b, string memory message) internal pure {
        require(a == b, message);
    }

    function equal(bytes32 a, bytes32 b, string memory message) internal pure {
        require(a == b, message);
    }
}
