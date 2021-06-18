# Subgraph for Arbitrum One block data

This subgraph indexes all block data on the [Arbitrum One mainnet beta network](https://offchain.medium.com/introducing-arbitrum-one-our-mainet-beta-ed0e9b63b435). 

Every block is handled by one mapping ```handleBlock```

##### Note 

The contract `ConverterRegistryContract` found in ABIs and subgraph.yaml is just a dummy contract used to pass formatting checks. Each block is handled automatically regardless of the logic in this contract. 
 
## 
Subgraph endpoint: [https://thegraph.com/explorer/subgraph/ianlapham/arbitrum-one-blocks](https://thegraph.com/explorer/subgraph/ianlapham/arbitrum-one-blocks).
