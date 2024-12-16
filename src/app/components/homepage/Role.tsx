"use client";
import React from "react";
import { MagicCard } from "../ui/MagicCard";
import { Mobile, Monitor, PenTool2 } from "iconsax-react";

export default function Role() {
   return (
      <div className="relative">
         {/* START:Content */}
         <div className="container py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <MagicCard className="px-6 py-8">
                  <div className="p-3 bg-gradient-to-b from-primary to-indigo-600 inline-flex rounded-xl">
                     <Monitor size="32" color="#fff" variant="Bold" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-doHyeon tracking-wide mt-6">
                     Web Developer
                  </h3>
                  <p className="desc mt-2">
                     di grup komunitas ini kamu ga usah ragu, karena banyak
                     sepuh yg bisa bantu bantuin masalah lu, kecuali masalah
                     cinta.
                  </p>
               </MagicCard>
               <MagicCard className="px-6 py-8">
                  <div className="p-3 bg-gradient-to-b from-primary to-indigo-600 inline-flex rounded-xl">
                     <PenTool2 size="32" color="#fff" variant="Bold" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-doHyeon tracking-wide mt-6">
                     UI/UX Designer
                  </h3>
                  <p className="desc mt-2">
                     di grup komunitas ini kamu ga usah ragu, karena banyak
                     sepuh yg bisa bantu bantuin masalah lu, kecuali masalah
                     cinta.
                  </p>
               </MagicCard>
               <MagicCard className="px-6 py-8">
                  <div className="p-3 bg-gradient-to-b from-primary to-indigo-600 inline-flex rounded-xl">
                     <Mobile size="32" color="#fff" variant="Bold" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-doHyeon tracking-wide mt-6">
                     Mobile Developer
                  </h3>
                  <p className="desc mt-2">
                     di grup komunitas ini kamu ga usah ragu, karena banyak
                     sepuh yg bisa bantu bantuin masalah lu, kecuali masalah
                     cinta.
                  </p>
               </MagicCard>
            </div>
         </div>

         {/* END:Content */}
         <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:left-5 xl:left-7 text-white" />
         <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:right-5 xl:right-7 text-white" />
         <div className="border-top"></div>
         <div className="border-left"></div>
         <div className="border-right"></div>
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
