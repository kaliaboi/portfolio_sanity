import { Button } from "@/components/ui/button";
import { getPosts } from "@/sanity/sanity-utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Posts = async () => {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="container mx-auto max-w-2xl flex flex-col p-4 md:p-6 text-slate-900 dark:text-slate-50 text-[16px] leading-6 mt-12 font-[500]">
      <div className="flex mb-6">
        <Link href="/" className="no-underline">
          <Button variant="secondary" className="flex gap-2">
            <ArrowLeft className="w-4" />
            Back
          </Button>
        </Link>
      </div>
      {posts.map((post: any) => (
        <Link href={`posts/${post.slug}`} className="my-6">
          <p className="dark:text-white text-sm">{post.publishDate}</p>
          <p className="dark:text-white text-xl mb-6 mt-2">{post.name}</p>
          <p className="prose dark:prose-invert">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
            autem ullam libero dolores ab dolor? Dolores, ad optio? Laboriosam
            dolore minima aperiam ullam hic voluptatum voluptas adipisci odio
            pariatur velit.
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Posts;
