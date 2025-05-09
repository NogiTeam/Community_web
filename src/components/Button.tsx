import Link from "next/link";

import { TextReveal } from "./ui/Typography";

interface Button {
   href: string;
   label: string;
   target: string;
}

function Button({ href, label, target }: Button) {
   return (
      <Link
         href={href}
         target={target}
         className="hover:brightness-110 font-bold py-4 px-8 rounded-lg bg-gradient-to-b from-primary to-indigo-600 shadow-[0_4px_50px_rgba(8,_112,_184,_0.7)] shadow-indigo-500/70 text-white inline-flex"
      >
         <TextReveal>{label}</TextReveal>
      </Link>
   );
}

export default Button;
