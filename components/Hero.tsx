import React from "react";
import Image from "next/image";
import profPic from "../public/prof.jpg";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BgCircles from "./BgCircles";
import Link from "next/link";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, I am ${pageInfo?.name}`,
      "a Frontend Developer",
      "<WhoLovesCoffeeAndCoding/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col space-y-8 items-center justify-center text-center h-screen overflow-hidden">
      <BgCircles />
      <Image
        className="relative rounded-full w-32 h-32 mx-auto object-cover"
        src={profPic}
        alt="Picture of the author"
      />
      <div className="z-30">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          {text}
          <Cursor cursorColor="#4ade80"></Cursor>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
