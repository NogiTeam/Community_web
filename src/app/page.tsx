import About from "./components/homepage/About";
import Hero from "./components/homepage/Hero";
import Role from "./components/homepage/Role";
import ScrollText from "./components/homepage/ScrollText";

export default function Home() {
   return (
      <>
         <Hero />
         <Role />
         <ScrollText />
         <About />
      </>
   );
}
