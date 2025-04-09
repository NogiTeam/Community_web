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
               <SlideIn>Forex Currency ?</SlideIn>
            </SectionHeading>
            {/* End: Section Title */}

            <Transition viewport={{ once: true }}>
               <p className=" text-base md:text-xl font-medium text-white/40 leading-relaxed tracking-wide">
                  Forex Currency dibuat pada 10 April 2025 oleh Aep.
               </p>
               <p className=" text-base md:text-xl font-medium text-white/40 leading-relaxed tracking-wide mt-6">
                  Forex Currency Community adalah kelompok orang yang berbagi minat dan pengetahuan dalam berdagang di pasar Forex. Mereka saling berbagi informasi, strategi, dan pengalaman untuk saling mendukung dalam mencapai kesuksesan trading.
               </p>
               <p className=" text-base md:text-xl font-medium text-white/40 leading-relaxed tracking-wide mt-6">
                  Melalui acara webinar atau workshop secara online, kami
                  menyediakan platform untuk berbagi pengetahuan, menginspirasi,
                  dan membangun jaringan di antara komunitas kami. Komitmen kami
                  adalah memberikan pengalaman yang menyenangkan, edukatif, dan
                  saling mendukung di dunia trading.
               </p>
            </Transition>

            <div className="grid lg:grid-cols-2 gap-10 mt-20 items-center">
               <Transition viewport={{ once: true }}>
                  <img
                     className="rounded-2xl"
                     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="NightCoder Community"
                  />
               </Transition>
               <Transition viewport={{ once: true }}>
                  <SectionHeading className="text-start">
                     <SlideIn className="text-white/40">
                        Ayo gabung bersama
                     </SlideIn>
                     <br />
                     <SlideIn>kami di Forex Currency ?</SlideIn>
                  </SectionHeading>
                  <p className="desc mb-8">
                     Rasakan pengalaman trading yang menyenangkan seru setiap
                     hari dan menambah wawasan seputar dunia trading!
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
