import { Spotlight } from "../ui/Spotlight";
import { GradualSpacing } from "../ui/GradualSpacing";
import Button from "../Button";
import DotPattern from "../ui/DotPattern";
import { Transition } from "../ui/Transition";
import { once } from "events";

export default function Hero() {
   return (
      <div className="relative">
         {/* START:Content */}
         <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center relative overflow-hidden">
            <DotPattern className="opacity-20" />
            <div className=" absolute pointer-events-none inset-0 flex items-center justify-center bg-[#080808] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div>
               <Spotlight
                  className="-top-40 left-0 md:left-60 md:-top-20"
                  fill="blue"
               />
               <Spotlight
                  className="-top-40 left-10 md:left-60 md:-top-20 h-2/3"
                  fill="purple"
               />

               <Spotlight
                  className="h-[80vh] w-[50vw] top-10 left-full"
                  fill="blue"
               />
            </div>

            <div className="p-4 container flex items-center justify-center flex-col relative z-10  w-full pt-20 md:pt-0 text-center">
               <GradualSpacing
                  className="text-center text-4xl font-bold -tracking-widest  text-white md:text-7xl "
                  text="Forex Currency "
               />
               <GradualSpacing
                  duration={1}
                  className="text-center text-4xl font-bold -tracking-widest  text-white md:text-7xl mt-2 md:mt-8"
                  text="Community"
               />
               <Transition viewport={{ once: true }}>
                  <p className="font-normal md:text-lg text-neutral-300 max-w-2xl text-center mx-auto mb-14 mt-10">
                     Selamat datang di komunitas Forex Currency Temukan
                     inspirasi, belajarlah dari para ahli, dan menjadi bagian
                     dari revolusi Trading yang terus berkembang.
                  </p>
               </Transition>

               
            </div>
         </div>
         {/* END:Content */}

         <div className="border-left"></div>
         <div className="border-right"></div>
      </div>
   );
}
