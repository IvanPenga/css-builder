import React, { useState } from "react";
import { BuildingContextProvider } from "../componenets/scenes/BuildingContext";
import { BuildingSpace } from "@/componenets/layers/BuildingSpace";
import { BlockSelector } from "@/componenets/block-selector/SelectableBlock";
import { HiddenLayers } from "@/componenets/hidden-layers/HiddenLayers";

function Home() {
  const q = 4;

  const [hiddenLayers, setHiddenLayers] = useState<Set<number>>(new Set());
  const [isMeshVisible, setIsMeshVisible] = useState(true);

  return (
    <main className="w-full relative h-[900px]">
      <BuildingContextProvider>
        <label>
          Show mesh
          <input defaultChecked={true} onChange={() => setIsMeshVisible((prev) => !prev)} type="checkbox" />
        </label>
        <BlockSelector />
        <BuildingSpace
          depth={q}
          width={q}
          height={q}
          showMesh={isMeshVisible}
          hiddenLayers={Array.from(hiddenLayers)}
        />
        <HiddenLayers layers={q} setHiddenLayers={setHiddenLayers} />
      </BuildingContextProvider>
    </main>
  );
}

export default Home;
