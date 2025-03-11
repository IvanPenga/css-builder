import { Block, Coordinates } from "../block-types";

type BlockKey = `${number}:${number}:${number}`;

export class BlockMap extends Map<BlockKey, Block> {

  _key({ x, y, z }: Coordinates): BlockKey {
    return `${x}:${y}:${z}`;
  }

  setBlock(value: Block) {
    return super.set(this._key(value), value);
  }

  getBlock(coordinates: Coordinates) {
    return super.get(this._key(coordinates));
  }
}