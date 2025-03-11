import { BlockMap } from "../models/block/BlockMap";

export function createBlocks(width: number, height: number, depth: number) {
  const blocks = new BlockMap

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      for (let z = 0; z < depth; z++) {
        blocks.setBlock({ x, y, z, textureTop: '', textureSide: '', textureBottom: '' })
      }
    }
  }

  return blocks;
}

