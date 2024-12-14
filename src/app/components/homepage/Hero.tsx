import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { GradualSpacing } from "../ui/GradualSpacing";

export default function Hero() {
   return (
      <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-dot-white/[0.1] relative overflow-hidden">
         <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
         <div>
            <Spotlight
               className="-top-40 left-0 md:left-60 md:-top-20"
               fill="white"
            />

            <Spotlight
               className="h-[80vh] w-[50vw] top-10 left-full"
               fill="white"
            />
         </div>

         <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <GradualSpacing
               className="font-display text-center text-4xl font-bold -tracking-widest  text-white md:text-7xl md:leading-[5rem]"
               text="NightCoderID"
            />
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
               Selamat datang di komunitas Night Coder ID! Temukan inspirasi,
               belajarlah dari para ahli, dan menjadi bagian dari revolusi
               teknologi yang terus berkembang.
            </p>
         </div>
      </div>
   );
}
