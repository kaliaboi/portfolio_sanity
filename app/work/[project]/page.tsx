import Code from "@/app/components/Code";
import { getProject, urlFor } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="w-full flex flex-col items-center">
          <img src={urlFor(value.asset).url()} className=" p-0 m-0" />
          <p className="p-0 mt-2">{value.caption}</p>
        </div>
      );
    },
    code: ({ value }: any) => {
      console.log("value", value);
      return <Code value={value} />;
    },
  },
};

const Project = async ({ params }: any) => {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="container mx-auto max-w-2xl flex flex-col p-4 md:p-6 text-slate-900 dark:text-slate-50 text-[16px] leading-6 prose dark:prose-invert mt-12">
      <h2>{project.name}</h2>
      <div className="prose dark:prose-invert">
        <PortableText
          value={project.content}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default Project;
