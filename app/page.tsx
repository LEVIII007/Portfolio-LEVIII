import { Experience } from "@/components/Experience/Experience";
import Home  from "@/components/Home";
import Projects from "@/components/Projects/projects1";
import CodingProfiles from "../components/coding/coding-card";
import About from "../components/AboutMe/about";
import Skills from "../components/AboutMe/skills2";
import ConverslyAIShowcase from "@/components/Projects/conversly";
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Blogs } from "@/components/Blogs/blogs"

export default function Page() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-8 lg:px-10">
        <Home />
        
        {/* Desktop view with TracingBeam */}
        <TracingBeam className="mt-14 hidden md:block">
          <Experience />
          <Projects />
          <Blogs />
        </TracingBeam>
        
        {/* Mobile view without TracingBeam */}
        <div className="mt-14 md:hidden">
          <Experience />
          <Projects />
          <Blogs />
        </div>
      </div>
    </div>
  );
}
