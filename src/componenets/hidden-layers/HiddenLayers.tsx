import React from "react";
import styles from './index.module.scss';

type HiddenLayersProperties = {
  layers: number;
  setHiddenLayers: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export function HiddenLayers({ layers, setHiddenLayers }: HiddenLayersProperties) {
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>, layer: number) {
    const isChecked = event.target.checked;
    
    setHiddenLayers((previousLayers) => {
      if (isChecked) { previousLayers.add(layer) }
      else { previousLayers.delete(layer) }
      return new Set(previousLayers);
    });
  }

  const checkboxes = Array(layers).fill(0).map((layer, index) => {
    return (
      <label key={`${layer}${index}`} className={styles.hiddenLayerLabel}>
        {index}
        <input type="checkbox" onChange={(event) => handleOnChange(event, index)} />
      </label>
    );
  });

  return (
    <fieldset className="absolute right-0 top-0">
      <legend>Select layer to hide</legend>
      {checkboxes}
    </fieldset>
  )
}