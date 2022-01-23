import { useEffect, useRef, useState } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useCompany } from "../../contexts/Company";
import clsx from "clsx";

const DividerPoly = ({ start, end }: { start: number; end: number }) => {
  const { company } = useCompany();
  return (
    <svg viewBox="0 0 400 60">
      <motion.path
        initial={{
          fill: company.color,
        }}
        animate={{ fill: company.color }}
        transition={{ duration: 0.4 }}
        d="M0 20L100 50L400 0V60H0V20Z"
      />
    </svg>
  );
};

const DividerCircle = ({ start, end }: { start: number; end: number }) => {
  const { company } = useCompany();
  return (
    <svg viewBox="0 0 400 30">
      <motion.path
        initial={{
          fill: company.color,
        }}
        animate={{ fill: company.color }}
        transition={{ duration: 0.4 }}
        d="M193.402 3.43526e-07L-7.39028e-06 1.19894e-05C152.084 39.8414 239.631 40.1582 400 1.19894e-05L193.402 3.43526e-07Z"
      />
    </svg>
  );
};

const Divider = ({ start, end }: { start: number; end: number }) => {
  const { company } = useCompany();
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [elementStart, setElementStart] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    window.onresize = () => {
      setScreenHeight(window.innerHeight);
      setElementStart(ref.current?.offsetTop || 0);
    };

    setScreenHeight(window.innerHeight);
    setElementStart(ref.current?.offsetTop || 0);
  }, []);

  const rotate = useTransform(
    scrollY,
    [elementStart - screenHeight + 50, elementStart],
    [start, end],
    {
      clamp: true,
    }
  );

  return (
    <div className="relative h-32 my-8 overflow-hidden" ref={ref} id="tek">
      <motion.div
        style={{ rotate }}
        initial={{
          borderColor: company.color,
        }}
        animate={{ borderColor: company.color }}
        transition={{ duration: 0.4 }}
        className={clsx(
          "absolute w-[110vw] border-t-8 border-double top-1/2 origin-center -left-2"
        )}
      />
    </div>
  );
};

export { DividerCircle, DividerPoly };
