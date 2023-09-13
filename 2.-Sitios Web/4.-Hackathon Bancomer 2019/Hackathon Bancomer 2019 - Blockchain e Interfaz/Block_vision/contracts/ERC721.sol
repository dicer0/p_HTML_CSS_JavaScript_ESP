pragma solidity ^0.5.8;


contract ERC721 {
  event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
  function ownerOf(uint256 _tokenId) external view returns (address);
  function approve(address _approved, uint256 _tokenId) external payable;
}
