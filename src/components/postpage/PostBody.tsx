type Props = {
   content: string;
};

export function PostBody({ content }: Props) {
   return (
      <div className="max-w-4xl px-4 mx-auto py-10">
         <div
            className="prose-lg prose-slate prose-headings:font-semibold prose-p:text-white/50"
            dangerouslySetInnerHTML={{ __html: content }}
         />
      </div>
   );
}
