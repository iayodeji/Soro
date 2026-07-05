"use client";

import { useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { useEffect } from "react";

/**
 * Mount ONCE in the root layout, anywhere inside <body> (it renders nothing):
 *
 *   import { AtmospherePointer } from "@/src/components/atmosphere/atmosphere-pointer"
 *
 *   <body>
 *     <AtmospherePointer />
 *     {children}
 *   </body>
 *
 * This component does NOT draw anything. It only tracks the cursor,
 * smooths it into a spring, and writes the result onto --mx / --my
 * on <html>. All visuals (color, blur, drift keyframes, grain) live
 * entirely in globals.css. Delete this component and the atmosphere
 * still works — you just lose the cursor reactivity.
 */
export function AtmospherePointer() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 40, damping: 20, mass: 1 });
  const springY = useSpring(rawY, { stiffness: 40, damping: 20, mass: 1 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handlePointerMove = (e: PointerEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      rawX.set(nx * 24);
      rawY.set(ny * 24);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [rawX, rawY]);

  useMotionValueEvent(springX, "change", (v) => {
    document.documentElement.style.setProperty("--mx", `${v}px`);
  });
  useMotionValueEvent(springY, "change", (v) => {
    document.documentElement.style.setProperty("--my", `${v}px`);
  });

  return null;
}