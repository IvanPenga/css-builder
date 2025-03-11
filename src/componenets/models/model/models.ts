import { textures } from "@/componenets/textures/textures";
import { BlockMap } from "../block/BlockMap";
import { Model } from "./Model";
import { Texture } from "../block-types";

const treeBlocks = new BlockMap();

treeBlocks.setBlock({ x: 0, y: 0, z: 0, ...textures.wood });
treeBlocks.setBlock({ x: 0, y: 1, z: 0, ...textures.wood });
treeBlocks.setBlock({ x: 0, y: 2, z: 0, ...textures.wood });

const tree: Model = {
  name: 'Tree',
  blocks: treeBlocks
}

function createBlockModel(texture: Texture) {
  return new BlockMap().setBlock({ x: 0, y: 0, z: 0, ...texture });
}

const grass: Model = {
  name: 'Grass',
  blocks: createBlockModel(textures.grass),
}

const wood: Model = {
  name: 'Wood',
  blocks: createBlockModel(textures.wood),
}

export const none: Model = {
  name: 'None',
  blocks: createBlockModel(textures.none),
}

export const models = [tree, grass, wood, none];