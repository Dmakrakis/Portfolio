import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profPic from "../public/prof.jpg";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left h-screen max-w-7xl mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-2xl text-gray-200">
        About
      </h3>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-row items-center"
      >
        <Image
          className="-mb-20 md:mb-0 rounded-full w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
          src={profPic}
          alt="Picture of the author"
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#4ade80]/80">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          {pageInfo?.backgroundInformation}I have been working as a Web
          Developer for the past 5 years, and have gained extensive experience
          in HTML, CSS, JavaScript, jQuery, PHP, MySQL, and WordPress. Since
          2020 I have started working on Frontend projects, especially in
          React.js with TypeScript. My experience includes developing websites
          for small businesses, e-shops as well as many personal projects. I
          have a Bachelor of Arts and Sciences in Information Technology and
          have completed numerous online courses related to programming over the
          years. My greatest strengths are my problem solving skills, my eye for
          design and my ability to work independently. I am able to take on
          projects from start to finish and I am quite comfortable working with
          clients to understand the requirements of the project and their needs.
          This allows me to develop websites that are not only functional but
          also meet the client’s needs and expectations.
        </p>
      </div>
    </motion.div>
  );
}
