import React, { PropsWithChildren, useContext, useState } from "react";
import { none } from "../textures/textures";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BuildingContext = React.createContext({} as any);

export const useBuildingContext = () => {
  return useContext(BuildingContext);
}

export const BuildingContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedBlockTexture, setSelectedBlockTexture] = useState(none);

  const context = {
    selectedBlockTexture,
    setSelectedBlockTexture,
  };

  return (
    <BuildingContext.Provider value={context}>
      {children}
    </BuildingContext.Provider>
  );
};
