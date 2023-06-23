import Code from "@/app/components/Code";
import { Button } from "@/components/ui/button";
import { getPost, getProject, urlFor } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="w-full flex flex-col items-center">
          <img
            src={urlFor(value.asset).url()}
            className=" p-0 m-0 transition-all hover:scale-150"
          />
          <p className="p-0 mt-2">{value.caption}</p>
        </div>
      );
    },
    code: ({ value }: any) => {
      return <Code value={value} />;
    },
  },
};

const Post = async ({ params }: any) => {
  const slug = params.post;
  const project = await getPost(slug);
  return (
    <div className="container mx-auto max-w-2xl flex flex-col p-4 md:p-6 text-slate-900 dark:text-slate-50 text-[16px] leading-6 prose dark:prose-invert mt-12 font-[500]">
      <div className="flex">
        <Link href="/" className="no-underline">
          <Button variant="secondary" className="flex gap-2">
            <ArrowLeft className="w-4" />
            Back
          </Button>
        </Link>
      </div>
      <h2 className="text-[500]">{project.name}</h2>
      <div className="prose dark:prose-invert">
        <PortableText
          value={project.content}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default Post;
