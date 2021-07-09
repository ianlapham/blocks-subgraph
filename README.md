# Subgraph for Ethereum block data

This subgraph indexes all block data on the Optimism mainnet network
Every block is handled by one mapping `handleBlock`

##### Note

The contract `ConverterRegistryContract` found in ABIs and subgraph.yaml is just a dummy contract used to pass formatting checks. Each block is handled automatically regardless of the logic in this contract.

##

Subgraph endpoint: https://thegraph.com/legacy-explorer/subgraph/ianlapham/optimism-blocks
