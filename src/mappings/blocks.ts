import { ethereum } from '@graphprotocol/graph-ts'
import { Block } from '../types/schema'

export function handleBlock(block: ethereum.Block): void {
  const id = block.hash.toHex()
  const blockEntity = new Block(id)
  blockEntity.number = block.number
  blockEntity.timestamp = block.timestamp
  blockEntity.parentHash = block.parentHash.toHex()
  blockEntity.difficulty = block.difficulty
  blockEntity.author = block.author.toHex()
  blockEntity.totalDifficulty = block.totalDifficulty
  blockEntity.gasUsed = block.gasUsed
  blockEntity.gasLimit = block.gasLimit
  blockEntity.receiptsRoot = block.receiptsRoot.toHex()
  blockEntity.transactionsRoot = block.transactionsRoot.toHex()
  blockEntity.stateRoot = block.stateRoot.toHex()
  blockEntity.unclesHash = block.unclesHash.toHex()
  blockEntity.size = block.size
  blockEntity.save()
}
