"use client";

import { useState } from "react";

export default function Navbar() {
   const [isActive, setIsActive] = useState(false);
   return (
      <>
         <div
            onClick={() => {
               setIsActive(!isActive);
            }}
            className="fixed ring-0 m-5 z-50 w-20 h-20 rounded-full bg-[#455ce9] cursor-pointer flex items-center justify-center"
         >
            <div
               className={`'burger ' ${isActive ? styles.burgerActive : ""}`}
            ></div>
         </div>
      </>
   );
}
