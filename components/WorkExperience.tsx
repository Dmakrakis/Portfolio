import React from "react";
import ExpCard from "./ExpCard";
import { motion } from "framer-motion";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 h-screen mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-200">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-green-400/80">
        <ExpCard />
        <ExpCard />
        <ExpCard />
        <ExpCard />
      </div>
    </motion.div>
  );
}
