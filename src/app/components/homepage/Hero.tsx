import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { GradualSpacing } from "../ui/GradualSpacing";
import Button from "../Button";
import DotBackground from "../ui/Dotbackground";

export default function Hero() {
   return (
      <div className="relative">
         {/* START:Content */}
         <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden">
            <DotBackground className="opacity-40" />
            <div className=" absolute pointer-events-none inset-0 flex items-center justify-center bg-[#080808] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
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

            <div className="p-4 container relative z-10  w-full pt-20 md:pt-0 text-center">
               <GradualSpacing
                  className="font-doHyeon text-center text-4xl font-bold -tracking-widest  text-white md:text-8xl md:leading-[5rem]"
                  text="NightCoderID "
               />
               <GradualSpacing
                  duration={1}
                  className="font-doHyeon text-center text-4xl font-bold -tracking-widest  text-white md:text-8xl md:leading-[5rem] mt-8"
                  text="Community"
               />
               <p className="font-normal md:text-xl text-neutral-300 max-w-2xl text-center mx-auto mb-10 mt-10">
                  Selamat datang di komunitas Night Coder ID! Temukan inspirasi,
                  belajarlah dari para ahli, dan menjadi bagian dari revolusi
                  teknologi yang terus berkembang.
               </p>

               <Button href="#" label="Join Groub" />
            </div>
         </div>
         {/* END:Content */}

         <div className="border-left"></div>
         <div className="border-right"></div>
      </div>
   );
}
