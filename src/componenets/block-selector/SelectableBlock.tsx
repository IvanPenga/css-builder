import React from "react";
import { SelectableBlock } from "./BlockSelector";
import { useBuildingContext } from "../scenes/BuildingContext";
import { models } from "../models/model/models";

export function BlockSelector() {
  const { selectedModel } = useBuildingContext();

  return (
    <aside className="absolute z-10">
      <div>
        {selectedModel.name}
      </div>
      <div className="flex flex-col">
        {models.map((model) => <SelectableBlock key={JSON.stringify(model)} model={model} />)}
      </div>
    </aside>
  );
}
