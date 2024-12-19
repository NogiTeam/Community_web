import { getAllPosts } from "@/lib/api";
import Link from "next/link";

function PostPage() {
   const posts = getAllPosts();
   return (
      <div>
         <h1>List Post</h1>
         <div className="grid grid-cols-3 gap-8">
            {posts.map((post) => (
               <Link href={`/posts/${post.slug}`} key={post.title}>
                  {post.title}
               </Link>
            ))}
         </div>
      </div>
   );
}

export default PostPage;
