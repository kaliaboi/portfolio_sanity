import { sanityClient } from "@/sanity/sanity-utils";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export const SanityImage = ({ asset }) => {
  const imageProps = useNextSanityImage(sanityClient, asset);

  if (!imageProps) return null;
  return (
    <Image
      src={imageProps.src}
      {...imageProps}
      sizes="(max-width: 800px) 100vw, 800px"
    />
  );
};
