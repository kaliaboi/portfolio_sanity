import { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { item } from "./WorkSection";
import Link from "next/link";

interface WorkCardProps {
  project: any;
}

const WorkCard: FC<WorkCardProps> = ({ project }) => {
  const [hovering, setHovering] = useState(false);
  return (
    <motion.div
      variants={item}
      className="work-card"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link href={`work/${project.slug}`}>
        <div className="aspect-video w-full relative cursor-pointer">
          <div className="z-50 w-full backdrop-blur-2xl bg-white/70 bottom-0 absolute px-4 py-2">
            <p className="text-slate-900">{project.name}</p>
            <p className="text-slate-500">Product Design / 2023</p>
          </div>
          <img
            className={`z-10 transition-all absolute duration-200 ${
              hovering ? "opacity-0" : "opacity-100"
            }`}
            src="/test-1.png"
            alt=""
          />
          <img
            className={`z-10 transition-all absolute duration-200 ${
              hovering ? "opacity-100" : "opacity-0"
            }`}
            src="/test-2.png"
            alt=""
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default WorkCard;
