import { SectionHeading } from "../ui/Typography";
import { SlideIn } from "../ui/Transition";

export default function Partner() {
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

            <p className=" text-base md:text-xl font-medium text-white/40 leading-relaxed tracking-wide">
               NightCoderID dibuat pada 21 September 2022 oleh Imam Wahyudi.
            </p>
            <p className=" text-base md:text-xl font-medium text-white/40 leading-relaxed tracking-wide mt-6">
               Night CoderID didirikan dengan tujuan untuk menciptakan ruang
               interaktif bagi para coder di semua tingkatan pengalaman, di mana
               mereka dapat bertemu, berbagi, dan belajar bersama-sama. Kami
               menyambut semua orang dari berbagai latar belakang, baik pemula
               yang ingin memulai perjalanan coding mereka maupun profesional
               yang ingin terus meningkatkan skillnya.
            </p>
            <p className=" text-base md:text-xl font-medium text-white/40 leading-relaxed tracking-wide mt-6">
               Melalui acara webinar atau workshop secara online, kami
               menyediakan platform untuk berbagi pengetahuan, menginspirasi,
               dan membangun jaringan di antara komunitas kami. Komitmen kami
               adalah memberikan pengalaman yang menyenangkan, edukatif, dan
               saling mendukung di dunia coding.
            </p>
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
