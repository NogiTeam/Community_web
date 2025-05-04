import About from "@/components/homepage/About";
import Benefits from "@/components/homepage/Benefits";
import Hero from "@/components/homepage/Hero";
import Posts from "@/components/homepage/Posts";
import ScrollText from "@/components/homepage/ScrollText";
import { getAllPosts } from "@/lib/api";

export default function Home() {
   const posts = getAllPosts();
   return (
      <main>
         <Hero />
         <About />
         <Benefits />
         <ScrollText />
         <Posts posts={posts} />
      </main>
   );
}
