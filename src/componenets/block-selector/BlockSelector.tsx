import React, { CSSProperties } from 'react';
import { useBuildingContext } from '../scenes/BuildingContext';
import { Model } from '../models/model/Model';

type SelectableBlockProperties = {
  model: Model;
}

export function SelectableBlock({ model }: SelectableBlockProperties) {
  const { setSelectedModel } = useBuildingContext();

  function onClick() {
    setSelectedModel(model);
  }

  const style: CSSProperties = {
    backgroundImage: Array.from(model.blocks.values())[0].textureTop,
    backgroundSize: 'cover',
  }

  return (
    <button style={style} className='w-32 h-32 border-2 text-2xl font-bold' onClick={onClick}>
      {model.name}
    </button>
  )
}