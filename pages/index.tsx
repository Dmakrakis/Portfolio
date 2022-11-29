import { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Skill } from "../typings";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
};

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen ory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-green-400/80">
      <Head>
        <title>Dimitris Makrakis Portfolio</title>
      </Head>

      <Header />

      <section id="hero" className="">
        <Hero></Hero>
      </section>
      <section id="about" className="">
        <About></About>
      </section>
      <section id="experience" className="">
        <WorkExperience></WorkExperience>
      </section>
      <section id="skills" className="">
        <Skills></Skills>
      </section>
      <section id="projects" className="">
        <Projects></Projects>
      </section>
      <section id="contact" className="">
        <Contact></Contact>
      </section>
    </div>
  );
}

export const GetStaticProps: GetStaticProps<Props> = async () => {};
