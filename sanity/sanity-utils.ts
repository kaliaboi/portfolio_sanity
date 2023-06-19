import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "izq4cj1k",
  dataset: "production",
  apiVersion: "2023-06-15",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getProjects() {
  const projects = await sanityClient.fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "cover": cover.asset->url,
            "deviceImages": deviceImages[].asset->url,
            url,
            content
        }`
  );
  return projects;
}

export async function getProject(slug: string) {
  const projects = await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "cover": cover.asset->url,
            "deviceImages": deviceImages[].asset->url,
            url,
            content
        }`,
    { slug }
  );
  return projects;
}
