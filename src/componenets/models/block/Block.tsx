import React, { CSSProperties, MouseEventHandler } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";
import type { Block } from "../block-types";
import { translate3d } from "@/componenets/scene/transformations";

type BlockProperties = Block & {
  className?: string;
  onClick: MouseEventHandler;
}

export function Block({ x, y, z, className, onClick, textureBottom, textureTop, textureSide }: BlockProperties) {
  const translate3dStyle = translate3d(x, y, z);

  const style: CSSProperties = {
    transform: translate3dStyle,
  };

  const styleTop: CSSProperties = {
    backgroundImage: textureTop,
  }

  const styleBottom: CSSProperties = {
    backgroundImage: textureBottom,
  }

  const styleSide: CSSProperties = {
    backgroundImage: textureSide,
  }

  return (
    <div style={style} className={classNames(styles.block, className)} onClick={onClick}>
      <div style={styleSide} className={styles.front} ></div>
      <div style={styleSide} className={styles.back} ></div>
      <div style={styleBottom} className={styles.bottom} ></div>
      <div style={styleTop} className={styles.top} ></div>
      <div style={styleSide} className={styles.right} ></div>
      <div style={styleSide} className={styles.left} ></div>
    </div>
  );
}
