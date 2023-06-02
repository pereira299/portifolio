import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import CopyRight from "@/components/Sections/CopyRight";
import Courses from "@/components/Sections/Courses";
import Projects from "@/components/Sections/Projects";
import Skills from "@/components/Sections/Skills";
import Welcome from "@/components/Sections/Welcome";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Skills />
      <Projects />
      <Courses />
      <Contact />
      <CopyRight />
    </>
  );
}
