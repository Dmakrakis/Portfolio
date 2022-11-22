import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BgCircles({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.9, 0.1, 0],
        scale: [1, 2, 2, 3],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 3 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333] rounded-full w-[300px] h-[300px] mt-52 "></div>
      <div className="absolute border border-[#333] rounded-full w-[500px] h-[500px] mt-52 "></div>
      <div className="absolute border border-green-400 rounded-full opacity-20 w-[650px] h-[650px] mt-52 animate-pulse"></div>
      <div className="absolute border border-[#333] rounded-full w-[800px] h-[800px] mt-52 "></div>
      <div></div>
    </motion.div>
  );
}
