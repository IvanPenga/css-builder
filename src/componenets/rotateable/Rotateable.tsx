import { PropsWithChildren, useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import classNames from "classnames";

function getRotation(transform: string) {
  const result = new RegExp(/rotateX\((-?\d+)deg\) rotateY\((-?\d+)deg\)/).exec(
    transform
  );
  if (!result) return { x: 0, y: 0 };
  return { x: Number(result[1]), y: Number(result[2]) };
}

type RotateableProperties = {
  className?: string;
}

export function Rotateable({ children, className }: PropsWithChildren<RotateableProperties>) {
  const ref = useRef<HTMLDivElement>(null);

  const [mouseDown, setMouseDown] = useState(false);

  function onMouseDown() {
    setMouseDown(true);
  }

  useEffect(() => {
    function mouseUp() {
      setMouseDown(false);
    }

    function mouseMove(event: MouseEvent) {
      if (mouseDown && ref.current) {
        const { movementX, movementY } = event;
        const { x, y } = getRotation(ref.current.style.transform);

        ref.current.style.transform = `rotateX(${movementY + x}deg) rotateY(${
          movementX + y
        }deg)`;
      }
    }

    document.addEventListener("mouseup", mouseUp);
    document.addEventListener("mousemove", mouseMove);

    return () => {
      document.removeEventListener("mouseup", mouseUp);
      document.removeEventListener("mousemove", mouseMove);
    };
  }, [mouseDown]);

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      className={classNames(styles.rotateable, className)}
      style={{ transform: "rotateX(0deg) rotateY(0deg)" }}
    >
      {children}
    </div>
  );
}
