import { useRef, useEffect, useState, MutableRefObject } from "react";

// setup the default state for initial render on the server
const defaultState = {
  top: 0,
  bottom: 0,
  height: 0,
  width: 0,
  x: 0,
  y: 0,
} as DOMRect;

export const useElementPosition = <T extends Element>(): [
  DOMRect,
  MutableRefObject<T | null>
] => {
  const ref = useRef<T>(null);
  const [rect, setRect] = useState<DOMRect>(defaultState);

  const set = () => {
    const bounds = ref.current?.getBoundingClientRect();
    if (bounds) {
      setRect(bounds);
    }
  };

  // resize listener
  useEffect(() => {
    set();
    window.addEventListener("resize", set);
    return () => window.removeEventListener("resize", set);
  }, []);

  // scroll listener
  useEffect(() => {
    set();
    window.addEventListener("scroll", set, { passive: true });
    return () => window.removeEventListener("scroll", set);
  }, []);

  return [rect, ref];
};

export default useElementPosition;
