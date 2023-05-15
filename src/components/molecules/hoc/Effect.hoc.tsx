//@ts-ignore
import { useOberser } from "@/hooks/useObserver";
import React, { useRef } from "react";

type IComponent<T> = (props: T) => JSX.Element;

interface IEffectHoc {
  efect?:
    | "appearFromRight"
    | "appearFromLeft"
    | "appearFromTop"
    | "appearFromBottom"
    | "appearFromNothing";
}

export const EffectHoc =
  <T,>(Comp: IComponent<T>) =>
  (props: T & IEffectHoc) => {
    const efect = props.efect ?? "appearFromNothing";
    const ref = useRef<HTMLDivElement | null>(null);
    const { isOnScreen } = useOberser(ref);
    const alreadyOn = useRef(false);

    if (isOnScreen) alreadyOn.current = true;

    return (
      <div ref={ref} className={alreadyOn.current ? `animate-${efect}` : ``}>
        <Comp {...props} />
      </div>
    );
  };
