import { Texture } from "../textures/textures";

export type Block = Texture & {
  x: number;
  y: number;
  z: number;
}

export function createBlocks(width: number, height: number, depth: number) {
  const blocks = new Map<string, Block>();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      for (let z = 0; z < depth; z++) {
        blocks.set(`${x}-${y}-${z}`, { x, y, z, textureTop: '', textureSide: '', textureBottom: '' });
      }
    }
  }

  return blocks;
}

