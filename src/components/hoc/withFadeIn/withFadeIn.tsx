import { useOberser } from "@/hooks/useObserver";
import { useRef } from "react";

type IComponent<T> = (props: T) => JSX.Element;

interface withFadeInProps {
  efect?:
    | "animate-appearFromRight"
    | "animate-appearFromLeft"
    | "animate-appearFromTop"
    | "animate-appearFromBottom"
    | "animate-appearFromNothing";
}

export const withFadeIn = <T,>(Component: IComponent<T>) => {
  return (props: T & withFadeInProps) => {
    const efect = props.efect ?? "animate-appearFromNothing";
    const alreadyOn = useRef(false);
    const ref = useRef<HTMLDivElement | null>(null);
    const { isOnScreen } = useOberser(ref);

    if (isOnScreen) alreadyOn.current = true;

    return (
      <div ref={ref} className={`opacity-0 ${alreadyOn.current ? efect : ``}`}>
        <Component {...props} />
      </div>
    );
  };
};
