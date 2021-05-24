import { AbiItem } from "web3-utils";
const abi: AbiItem[] = [
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "amount", type: "uint256" }],
    name: "proofOfControlWeiAmountChanged",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      { name: "acc", type: "address" },
      { name: "limit", type: "uint256" },
    ],
    name: "addBeneficiary",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "add", type: "address" },
      { name: "password", type: "bytes32" },
    ],
    name: "addSuitor",
    outputs: [{ name: "", type: "bool" }],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "acc", type: "address" },
      { name: "limit", type: "uint256" },
    ],
    name: "changeLimit",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "acc", type: "address" }],
    name: "kickBeneficiary",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "acc", type: "address" }],
    name: "kickDistributor",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "distr", type: "address" },
      { indexed: true, name: "ben", type: "address" },
      { indexed: false, name: "newLimit", type: "uint256" },
    ],
    name: "limitChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "suitor", type: "address" }],
    name: "suitorApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "suitor", type: "address" }],
    name: "suitorNotApproved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, name: "kicked", type: "address" }],
    name: "kickedDistributor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "suitor", type: "address" },
      { indexed: true, name: "distr", type: "address" },
    ],
    name: "suitorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "distr", type: "address" },
      { indexed: true, name: "added", type: "address" },
      { indexed: false, name: "limit", type: "uint256" },
    ],
    name: "addedBeneficiary",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "distr", type: "address" },
      { indexed: true, name: "kicked", type: "address" },
    ],
    name: "kickedBeneficiary",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "added", type: "address" },
      { indexed: false, name: "top", type: "uint256" },
    ],
    name: "addedDistributor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "distr", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
    name: "replenished",
    type: "event",
  },
  {
    constant: false,
    inputs: [
      { name: "acc", type: "address" },
      { name: "top", type: "uint256" },
    ],
    name: "addDistributor",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "key", type: "string" }],
    name: "proveControl",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "acc", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "replenish",
    outputs: [{ name: "", type: "bool" }],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "replenishAll",
    outputs: [{ name: "", type: "bool" }],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "accs", type: "address[]" },
      { name: "amounts", type: "uint256[]" },
    ],
    name: "replenishList",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "amount", type: "uint256" }],
    name: "setProofOfControlWeiAmount",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: true,
    stateMutability: "payable",
    type: "constructor",
  },
  {
    constant: true,
    inputs: [],
    name: "getBeneficiariesCount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "acc", type: "address" }],
    name: "getBeneficiaryLimit",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "acc", type: "address" }],
    name: "getDistributorLimit",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getProofOfControlWeiAmount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "key", type: "string" }],
    name: "hash",
    outputs: [{ name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "add", type: "address" }],
    name: "isBeneficiary",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "add", type: "address" }],
    name: "isDistributor",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
export { abi };