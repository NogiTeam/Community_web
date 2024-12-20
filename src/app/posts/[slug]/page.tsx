import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import PostHeader from "@/components/postpage/PostHeader";
import { PostBody } from "@/components/postpage/PostBody";

export default async function Post(props: Params) {
   const params = await props.params;
   const post = getPostBySlug(params.slug);
   if (!post) {
      return notFound();
   }

   const content = await markdownToHtml(post.content || "");
   return (
      <main>
         <div className="relative">
            <PostHeader
               title={post.title}
               description={post.description}
               src={post.coverImage}
               authorPicture={post.author.picture}
               authorName={post.author.name}
               date={post.date}
            />
            <PostBody content={content} />

            <span className="blob absolute top-96 right-0 w-1/4 h-4/6 blur-[200px] rotate-180 -z-10 " />
            <span className="blob size-1/4 absolute top-[20%] left-0 blur-[100px] -z-10" />
            <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:left-5 xl:left-7 text-white" />
            <Icon className="absolute h-6 w-6 -top-3 hidden lg:block lg:right-5 xl:right-7 text-white" />
            <div className="border-left"></div>
            <div className="border-right"></div>
            <div className="border-top"></div>
         </div>

         {/* <Container>
            <Header />
            <article className="mb-32">
               <PostHeader
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
               />
               <PostBody content={content} />
            </article>
         </Container> */}
      </main>
   );
}

type Params = {
   params: Promise<{
      slug: string;
   }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
   const params = await props.params;
   const post = getPostBySlug(params.slug);

   if (!post) {
      return notFound();
   }

   const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

   return {
      title,
      openGraph: {
         title,
         images: [post.ogImage.url],
      },
   };
}

export async function generateStaticParams() {
   const posts = getAllPosts();

   return posts.map((post) => ({
      slug: post.slug,
   }));
}

export const Icon = ({ className }: { className: string }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
         className={className}
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
         />
      </svg>
   );
};
