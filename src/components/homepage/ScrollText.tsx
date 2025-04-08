import { VelocityScroll } from "../ui/VelocityScroll";

function ScrollText() {
   return (
      <div className="md:py-10">
         <VelocityScroll
            text="FOREX CURRENCY"
            default_velocity={2}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm text-white/20 md:text-7xl md:leading-[5rem] mdLh-24"
         />
      </div>
   );
}

export default ScrollText;
