import React from "react";
import { VelocityScroll } from "../ui/VelocityScroll";

function ScrollText() {
   return (
      <div>
         <VelocityScroll
            text="!NightCoder Community"
            default_velocity={5}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-white/20 md:text-7xl md:leading-[5rem] h-24"
         />
      </div>
   );
}

export default ScrollText;
