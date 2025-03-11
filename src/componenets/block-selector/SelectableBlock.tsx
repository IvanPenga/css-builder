import React from "react";
import { SelectableBlock } from "./BlockSelector";
import { blockTypes } from "../textures/textures";
import { useBuildingContext } from "../scenes/BuildingContext";

export function BlockSelector() {
  const { selectedBlockTexture } = useBuildingContext();

  return (
    <aside className="absolute z-10">
      <div>
        {selectedBlockTexture?.name}
      </div>
      <div className="flex flex-col">
        {blockTypes.map((blockType) => <SelectableBlock key={blockType.name} block={blockType} />)}
      </div>
    </aside>
  );
}
