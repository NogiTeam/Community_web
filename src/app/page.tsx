import About from "./components/homepage/About";
import Hero from "./components/homepage/Hero";
import Benefits from "./components/homepage/Benefits";
import ScrollText from "./components/homepage/ScrollText";

export default function Home() {
   return (
      <>
         <Hero />
         <Benefits />
         <ScrollText />
         <About />
      </>
   );
}
