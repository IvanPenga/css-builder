import React from "react";
import styles from "./index.module.scss";
import { translate3d } from "../transformations";
import { px } from "../units";

type PositionProperties = {
  x: number;
  y: number;
  z: number;
};

type SizeProperties = {
  width: number;
  depth: number;
  height: number;
};

type BlockProperties = SizeProperties & Partial<PositionProperties> & {
  
}

export function Block({ width, depth, height, x, y, z }: BlockProperties) {
  const translate3dStyle = translate3d(x, y, z);

  const blockStyle = {
    width: px(width),
    height: px(height),
    transform: translate3dStyle,
  };

  const frontStyle = {
    width: px(width),
    height: px(height),
    transform: `translateZ(${px(depth / 2)})`,
    rotate: "x 0deg",
  };

  const backStyle = {
    width: px(width),
    height: px(height),
    transform: `translateZ(${px(-depth / 2)})`,
    // filter: "brightness(0.5)",
    rotate: "x 0deg",
  };

  const bottomStyle = {
    width: px(width),
    height: px(depth),
    transform: `translateZ(${px(-height / 2 + (depth - height) / 2)})`,
    rotate: "x 90deg",
  };

  const topStyle = {
    width: px(width),
    height: px(depth),
    transform: `translateZ(${px(depth / 2)})`,
    rotate: "x 90deg",
  };

  const leftStyle = {
    width: px(depth),
    height: px(height),
    transform: `translateZ(${px(width - depth / 2)})`,
    // filter: "brightness(0.8)",
    rotate: "y 90deg",
  };

  const rightStyle = {
    width: px(depth),
    height: px(height),
    transform: `translateZ(${px(-depth / 2)})`,
    rotate: "y 90deg",
  };

  return (
    <div style={blockStyle} className={styles.block}>
      <div style={frontStyle}></div>
      <div style={backStyle}></div>
      <div style={bottomStyle}></div>
      <div style={topStyle}></div>
      <div style={rightStyle}></div>
      <div style={leftStyle}></div>
    </div>
  );
}
