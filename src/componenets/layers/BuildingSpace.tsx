import { useState } from "react";
import { RegularBlock } from "../blocks/Block/RegularBlock";
import { Scene } from "../blocks/Scene";
import styles from "./index.module.scss";
import { createBlocks } from "./blocks";
import { useBuildingContext } from "../scenes/BuildingContext";
import { Rotateable } from "../rotateable/Rotateable";

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
  hiddenLayers = []
}: BuildingSpaceProperties) {
  const { selectedBlockTexture } = useBuildingContext();

  const [blocks, setBlocks] = useState(() =>
    createBlocks(width, height, depth)
  );

  function handleClick(x: number, y: number, z: number) {
    setBlocks((previousBlocks) => {
      console.log("gettin", previousBlocks);

      const block = previousBlocks.get(`${x}-${y}-${z}`);
      if (!block) return previousBlocks;

      block.textureSide = selectedBlockTexture.textureSide;
      block.textureTop = selectedBlockTexture.textureTop;
      block.textureBottom = selectedBlockTexture.textureBottom;

      console.log(block);

      return new Map(previousBlocks);
    });
  }

  return (
    <Scene>
      <Rotateable>
        {Array.from(blocks.values()).map(
          ({ x, y, z, textureSide, textureBottom, textureTop }) => (
            <RegularBlock
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
