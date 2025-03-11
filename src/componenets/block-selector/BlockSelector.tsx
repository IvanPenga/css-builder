import React, { CSSProperties } from 'react';
import { useBuildingContext } from '../scenes/BuildingContext';
import { TexturedBlock } from '../textures/textures';

type SelectableBlockProperties = {
  block: TexturedBlock;
}

export function SelectableBlock({ block }: SelectableBlockProperties) {
  const { setSelectedBlockTexture } = useBuildingContext();

  function onClick() {
    setSelectedBlockTexture(block);
  }

  const style: CSSProperties = {
    backgroundImage: block.textureTop,
    backgroundSize: 'cover',
  }

  return (
    <button style={style} className='w-32 h-32 border-2 text-2xl font-bold' onClick={onClick}>
      {block.name}
    </button>
  )
}