import React from "react";
import { SectionHeading } from "../ui/Typography";
import { SlideIn, Transition } from "../ui/Transition";
import Button from "../Button";

export default function About() {
   return (
      <div className="relative">
         {/* START:Content */}
         <div className="container py-20">
            {/* Section Title */}
            <SectionHeading>
               <SlideIn className="text-white/40">Apa itu</SlideIn>
               <br />
               <SlideIn>!NightCoder ?</SlideIn>
            </SectionHeading>
            {/* End: Section Title */}

            <Transition>
               <p className=" text-base md:text-xl font-medium text-white/40 leading-relaxed tracking-wide">
                  NightCoderID dibuat pada 21 September 2022 oleh Imam Wahyudi.
               </p>
               <p className=" text-base md:text-xl font-medium text-white/40 leading-relaxed tracking-wide mt-6">
                  Night CoderID didirikan dengan tujuan untuk menciptakan ruang
                  interaktif bagi para coder di semua tingkatan pengalaman, di
                  mana mereka dapat bertemu, berbagi, dan belajar bersama-sama.
                  Kami menyambut semua orang dari berbagai latar belakang, baik
                  pemula yang ingin memulai perjalanan coding mereka maupun
                  profesional yang ingin terus meningkatkan skillnya.
               </p>
               <p className=" text-base md:text-xl font-medium text-white/40 leading-relaxed tracking-wide mt-6">
                  Melalui acara webinar atau workshop secara online, kami
                  menyediakan platform untuk berbagi pengetahuan, menginspirasi,
                  dan membangun jaringan di antara komunitas kami. Komitmen kami
                  adalah memberikan pengalaman yang menyenangkan, edukatif, dan
                  saling mendukung di dunia coding.
               </p>
            </Transition>

            <div className="grid lg:grid-cols-2 gap-10 mt-20 items-center">
               <Transition>
                  <img
                     className="rounded-2xl"
                     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="NightCoder Community"
                  />
               </Transition>
               <Transition>
                  <SectionHeading className="text-start">
                     <SlideIn className="text-white/40">
                        Ayo gabung bersama
                     </SlideIn>
                     <br />
                     <SlideIn>kami di !NightCoder ?</SlideIn>
                  </SectionHeading>
                  <p className="desc mb-8">
                     Rasakan pengalaman coding yang menyenangkan seru setiap
                     hari dan menambah wawasan seputar dunia teknologi!
                  </p>
                  <Button target="_blank" href="#" label="JOIN NOW" />
               </Transition>
            </div>
         </div>
         {/* END:Content */}

         <span className="blob absolute top-[20%] right-0 w-1/4 h-4/6 blur-[100px] rotate-180 -z-10" />
         <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:left-5 xl:left-7 text-white" />
         <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:right-5 xl:right-7 text-white" />
         <div className="border-left"></div>
         <div className="border-right"></div>
         <div className="border-top"></div>
      </div>
   );
}
export const Icon = ({ className }: { className: string }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
         className={className}
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
         />
      </svg>
   );
};
