import { RefObject, useEffect, useRef, useState } from "react";

export function useOberser(ref: RefObject<HTMLElement>) {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      {
        rootMargin: "30px",
        threshold: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    if (ref.current) {
      observerRef.current?.observe(ref.current);
    }

    return () => observerRef.current?.disconnect();
  }, [ref]);

  return { isOnScreen };
}
