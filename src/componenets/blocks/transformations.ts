import { blockSize } from "../configuration";
import { px } from "./units";

type Position = number | undefined;

export function translate3d(x: Position = 0, y: Position = 0, z: Position = 0) {
  if (x || y || z) {
    return `translate3d(
      ${px(blockSize * x)},
      ${px(blockSize * y)},
      ${px(blockSize * z)}
    )`;
  }
}
