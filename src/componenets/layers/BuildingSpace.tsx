import { useState } from "react";
import { Scene } from "../scene/Scene";
import styles from "./index.module.scss";
import { createBlocks } from "./blocks";
import { useBuildingContext } from "../scenes/BuildingContext";
import { Rotateable } from "../rotateable/Rotateable";
import { Block } from "../models/block/Block";
import { BlockMap } from "../models/block/BlockMap";

type BuildingSpaceProperties = {
  width: number;
  height: number;
  depth: number;
  hiddenLayers: number[];
};

export function BuildingSpace({
  depth,
  width,
  height,
  hiddenLayers = [],
}: BuildingSpaceProperties) {
  const { selectedModel } = useBuildingContext();

  const [blocks, setBlocks] = useState(() =>
    createBlocks(width, height, depth)
  );

  function handleClick(x: number, y: number, z: number) {
    setBlocks((previousBlocks) => {
      selectedModel.blocks.forEach((model) => {
        previousBlocks.setBlock({
          ...model,
          x: x - model.x,
          y: y - model.y,
          z: z - model.z,
        });
      });

      return new BlockMap(previousBlocks);
    });
  }

  return (
    <Scene>
      <Rotateable>
        {Array.from(blocks.values()).map(
          ({ x, y, z, textureSide, textureBottom, textureTop }) => (
            <Block
              x={x - width / 2}
              y={y - height / 2}
              z={z - depth / 2 + 0.5}
              key={`${x}${y}${z}`}
              onClick={() => handleClick(x, y, z)}
              className={hiddenLayers.includes(y) ? styles.dim : undefined}
              textureTop={textureTop}
              textureSide={textureSide}
              textureBottom={textureBottom}
            />
          )
        )}
      </Rotateable>
    </Scene>
  );
}
