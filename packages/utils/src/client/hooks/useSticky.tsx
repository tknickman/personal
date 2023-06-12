import { useRef, useEffect, useState, MutableRefObject } from "react";

export const useSticky = <T extends Element>(): [
  boolean,
  MutableRefObject<T | null>
] => {
  const ref = useRef<T>(null);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  const set = () => {
    const bounds = ref.current?.getBoundingClientRect();
    if (bounds) {
      if (Math.floor(bounds.top) <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
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

  return [isSticky, ref];
};

export default useSticky;
