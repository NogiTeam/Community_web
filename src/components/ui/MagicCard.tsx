"use client";

import React, { useCallback, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";
import { GridPattern } from "./GridPattern";

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
   gradientSize?: number;
   gradientColor?: string;
   gradientOpacity?: number;
}

export function MagicCard({
   children,
   className,
   gradientSize = 200,
   gradientColor = "#262626",
   gradientOpacity = 0.8,
}: MagicCardProps) {
   const cardRef = useRef<HTMLDivElement>(null);
   const mouseX = useMotionValue(-gradientSize);
   const mouseY = useMotionValue(-gradientSize);

   const handleMouseMove = useCallback(
      (e: MouseEvent) => {
         if (cardRef.current) {
            const { left, top } = cardRef.current.getBoundingClientRect();
            const clientX = e.clientX;
            const clientY = e.clientY;
            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
         }
      },
      [mouseX, mouseY]
   );

   const handleMouseOut = useCallback(
      (e: MouseEvent) => {
         if (!e.relatedTarget) {
            document.removeEventListener("mousemove", handleMouseMove);
            mouseX.set(-gradientSize);
            mouseY.set(-gradientSize);
         }
      },
      [handleMouseMove, mouseX, gradientSize, mouseY]
   );

   const handleMouseEnter = useCallback(() => {
      document.addEventListener("mousemove", handleMouseMove);
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
   }, [handleMouseMove, mouseX, gradientSize, mouseY]);

   useEffect(() => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseout", handleMouseOut);
      document.addEventListener("mouseenter", handleMouseEnter);

      return () => {
         document.removeEventListener("mousemove", handleMouseMove);
         document.removeEventListener("mouseout", handleMouseOut);
         document.removeEventListener("mouseenter", handleMouseEnter);
      };
   }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

   useEffect(() => {
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
   }, [gradientSize, mouseX, mouseY]);

   return (
      <div
         ref={cardRef}
         className={cn(
            "group relative flex size-full overflow-hidden rounded-2xl bg-[#0e0e0e] border border-white/10 text-white",
            className
         )}
      >
         <div className="relative z-10">{children}</div>
         <GridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
               "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
               "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
         />
         <motion.div
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
               background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
               opacity: gradientOpacity,
            }}
         />
      </div>
   );
}
