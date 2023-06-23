import { getProjects } from "@/sanity/sanity-utils";
import WorkSection from "./components/WorkSection";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <main className="container mx-auto max-w-2xl flex flex-col p-4 md:p-6 text-slate-900 dark:text-slate-50 text-[16px] leading-6">
      <header className="md:mt-12 w-full font-[500] md:flex md:justify-between ">
        <div className="mb-12 md:mb-0">
          <p className="font-[600]">Abhishek Kalia</p>
          <p className="text-slate-500 dark:text-slate-400">
            Product Designer + Frontend Engineer
          </p>
          <p className="text-slate-500 dark:text-slate-400">New York City</p>
        </div>
        <div className="flex flex-col font-[400] underline underline-offset-4">
          <Link href="/" className="">
            About Me
          </Link>
          <Link href="posts" className="">
            Stuff I write
          </Link>
          <Link href="/" className="">
            Contact Me
          </Link>
        </div>
      </header>
      <div className="about mt-12 font-[500] prose dark:prose-invert">
        <p>
          A product generalist, the UI guy and also the Javascript dude. I
          conceive, design and prototype digital products and then make them a
          real working thing with code. Currently building{" "}
          <a href="https://journi.site">Journi</a> and <a href="/">Beo</a>. Open
          to working on your next amazing product, hit me up!
        </p>
      </div>

      <WorkSection projects={projects} />

      <div className="contact mt-12 mb-12 font-[500]">
        <p className="mb-2 font-[600]">Connect</p>
        <div className="links flex gap-6 prose dark:prose-invert">
          <a href="mailto:abhishekkalia.productdesign@gmail.com">Email</a>
          <a href="mailto:abhishekkalia.productdesign@gmail.com">Twitter</a>
          <a href="mailto:abhishekkalia.productdesign@gmail.com">Github</a>
          <a href="mailto:abhishekkalia.productdesign@gmail.com">Dribbble</a>
        </div>
      </div>
    </main>
  );
}
