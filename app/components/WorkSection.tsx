"use client";
import { FC, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WorkCard from "./WorkCard";

interface WorkSectionProps {
  projects: any;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const WorkSection: FC<WorkSectionProps> = ({ projects }) => {
  return (
    <div className="work w-full mt-12">
      <p className="font-semibold">Selected Work</p>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="work-cards flex flex-col gap-6 mt-6"
      >
        {projects.map((project: any) => (
          <WorkCard project={project} key={project.id} />
        ))}
      </motion.div>
    </div>
  );
};

export default WorkSection;
