import { useEffect, useRef, useState } from "react";

/* Power-on hook for the voxel schematic.
   Flips `powered` to true once the element enters the viewport
   (IntersectionObserver, threshold 0.3, fires once). Callers pass it
   into <Node powered> and <Trace color="red|dim">, and toggle a
   --powered class for their own state-driven styling.
   No animation lives here — motion is CSS on the powered class, so
   prefers-reduced-motion kills the travel but keeps the state. */

export function usePowered<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [powered, setPowered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setPowered(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setPowered(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, powered };
}
