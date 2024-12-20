import { MagicCard } from "./ui/MagicCard";
import Link from "next/link";
import { Author } from "@/interfaces/author";
import { ArrowRight2 } from "iconsax-react";
import DateFormatter from "./ui/DateFormatter";

interface Post {
   slug: string;
   title: string;
   coverImage: string;
   author: Author;
   date: string;
}

function CardPost({ slug, title, coverImage, author, date }: Post) {
   return (
      <Link href={`/posts/${slug}`}>
         <MagicCard className="p-2 group">
            <div className="rounded-xl overflow-hidden">
               <img
                  className="object-cover group-hover:scale-110 aspect-video transition-all duration-500"
                  src={coverImage}
                  alt={`Cover postingan ${title}`}
               />
            </div>
            <div className="p-4">
               <div className="flex items-center gap-2 text-white/60 text-sm">
                  {author.name}
                  <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                  <DateFormatter dateString={date} />
               </div>
               <h4 className="text-lg font-medium line-clamp-2 mt-4 h-[54px]">
                  {title}
               </h4>
               <button className="inline-flex items-center text-sm mt-5 ">
                  Read full blog{" "}
                  <ArrowRight2 size={12} color="#fff" className="ml-1" />{" "}
               </button>
            </div>
         </MagicCard>
      </Link>
   );
}

export default CardPost;
