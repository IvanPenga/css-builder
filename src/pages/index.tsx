import React, { useState } from "react";
import { BuildingContextProvider } from "../componenets/scenes/BuildingContext";
import { BuildingSpace } from "@/componenets/layers/BuildingSpace";
import { BlockSelector } from "@/componenets/block-selector/SelectableBlock";
import { HiddenLayers } from "@/componenets/hidden-layers/HiddenLayers";

function Home() {
  const q = 4;

  const [hiddenLayers, setHiddenLayers] = useState<Set<number>>(new Set());

  return (
    <main className="w-full relative h-[900px]">
      <BuildingContextProvider>
        <BlockSelector />
        <BuildingSpace depth={q} height={q} width={q} hiddenLayers={Array.from(hiddenLayers)} />
        <HiddenLayers layers={q} setHiddenLayers={setHiddenLayers} />
      </BuildingContextProvider>
    </main>
  );
}

export default Home;


