import classNames from "classnames";
import { PropsWithChildren } from "react";

type SceneProperties = PropsWithChildren<{
  className?: string;
}>;

export function Scene({ children, className }: SceneProperties) {
  return (
    <div className={classNames('perspective-midrange flex justify-center items-center h-full transform-3d', className)}>
      {children}
    </div>
  )
}