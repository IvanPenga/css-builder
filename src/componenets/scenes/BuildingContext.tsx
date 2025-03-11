import React, { PropsWithChildren, useContext, useState } from "react";
import { Model } from "../models/model/Model";
import { none } from "../models/model/models";

type Context = {
  selectedModel: Model;
  setSelectedModel: React.Dispatch<React.SetStateAction<Model>>;
}

const defaultContext: Context = {
  selectedModel: none,
  setSelectedModel: () => none,
}

export const BuildingContext = React.createContext(defaultContext);

export const useBuildingContext = () => {
  return useContext(BuildingContext);
}

export const BuildingContextProvider = ({ children }: PropsWithChildren) => {
  const [selectedModel, setSelectedModel] = useState<Model>(none);

  const context = {
    selectedModel,
    setSelectedModel,
  };

  return (
    <BuildingContext.Provider value={context}>
      {children}
    </BuildingContext.Provider>
  );
};
