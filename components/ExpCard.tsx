import React from "react";
import Image from "next/image";
import profPic from "../public/prof.jpg";
import { motion } from "framer-motion";

type Props = {};

export default function ExpCard({}: Props) {
  return (
    <article className="flex flex-col snap-center overflow-hidden bg-[#292929] opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] p-10">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-row items-center"
      >
        <Image
          className="rounded-full w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={profPic}
          alt="Picture of the author"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light"> Frontend Developer</h4>
        <p className="text-2xl font-bold mt-1">Freelance</p>
        <div className="flex space-x-2 my-2"></div>

        <p className="uppercase text-gray-300 py-5">Started work - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Lorem Ipsum is simply dummy text of the printing</li>
          <li>Lorem Ipsum is simply dummy text of the printing</li>
          <li>Lorem Ipsum is simply dummy text of the printing</li>
          <li>Lorem Ipsum is simply dummy text of the printing</li>
          <li>Lorem Ipsum is simply dummy text of the printing</li>
        </ul>
      </div>
    </article>
  );
}
