import Experience from "@/components/Experience/Experience";
import { Home } from "@/components/Home";
import Projects from "@/components/Projects/projects1";
import CodingProfiles from "../components/coding/coding-card";
import About from "../components/AboutMe/about";
import Skills from "../components/AboutMe/skills2";

export default function Page() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-screen-2xl">
      <Home />
      <About />
      <Skills />
      <Experience />
      <CodingProfiles />
      <Projects />
    </div>
    </div>
  );
}
