import DateFormatter from "@/app/_components/date-formatter";
import Image from "next/image";
import React from "react";

interface Props {
   title: string;
   description: string;
   src: string;
   authorPicture: string;
   authorName: string;
   date: string;
}

function PostHeader({
   title,
   src,
   description,
   authorName,
   authorPicture,
   date,
}: Props) {
   return (
      <div className="max-w-4xl px-4 mx-auto">
         <div className="flex items-center gap-3">
            {/* START:Profile */}
            <div className="flex items-center gap-2">
               <Image
                  className="rounded-full"
                  width={38}
                  height={38}
                  src={authorPicture}
                  alt={`Potret seorang ${authorName}`}
               />
               <p className="desc">{authorName}</p>
            </div>
            {/* END:Profile */}
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
            <p className="text-white/50">
               <DateFormatter dateString={date} />
            </p>
         </div>

         {/* START: Title and Desc Post */}
         <h1 className="text-3xl md:text-4xl font-medium md:leading-normal tracking-wide mt-4">
            {title}
         </h1>
         <p className="desc mt-6">{description}</p>
         {/* END: Title and Desc Post */}

         {/* START: Cover Image */}
         <Image
            className="rounded-2xl mt-10"
            src={src}
            width={1280}
            height={720}
            alt={`Cover image ${title}`}
         />
         {/* END: Cover Image */}
      </div>
   );
}

export default PostHeader;
