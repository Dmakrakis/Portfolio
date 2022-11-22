import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profPic from "../public/prof.jpg";

type Props = {
  leftDirection?: boolean;
};

const Skill = ({ leftDirection }: Props) => {
  return (
    <div className="flex group relative cursor-pointer">
      <motion.div
        initial={{ x: leftDirection ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity: 1 }}
        className="filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={profPic}
          alt="Picture of the author"
          className="w-24 h-24 md:w-28 md:-h-28 xl:w-32 xl:h-32 rounded-full object-cover border border-gray-300"
        />
      </motion.div>
    </div>
  );
};

export default Skill;
