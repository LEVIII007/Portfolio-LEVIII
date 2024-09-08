import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { IoLogoHtml5, IoLogoNodejs, IoLogoPython } from "react-icons/io5";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaReact, FaGitAlt, FaPaintbrush } from "react-icons/fa6";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { SiDrizzle } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { DiDocker } from "react-icons/di";

import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    name: "Javascript",
    icon: <IoLogoJavascript className="text-4xl" />,
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript className="text-4xl" />,
  },
  {
    name: "ReactJS",
    icon: <FaReact className="text-4xl" />,
  },
  {
    name: "NextJS",
    icon: <SiNextdotjs className="text-4xl" />,
  },
  {
    name: "NodeJS",
    icon: <IoLogoNodejs className="text-4xl" />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress className="text-4xl" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-4xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl" />,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-4xl" />,
  },
  {
    name: "Python",
    icon: <IoLogoPython className="text-4xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl" />,
  },
  {
    name : 'Django',
    icon : <SiDjango className="text-4xl" />,
  },
  {
    name : 'Drizzle',
    icon : <SiDrizzle className="text-4xl" />,
  },
  {
    name : 'Tensorflow',
    icon : <SiTensorflow className="text-4xl" />,
  },
  {
    name : 'Pytorch',
    icon : <SiPytorch className="text-4xl" />,
  },
  {
    name : 'OpenCV',
    icon : <SiOpencv className="text-4xl" />,
  },
  {
    name : 'C++',
    icon : <TbBrandCpp className="text-4xl" />,
  },
  {
    name : 'Docker',
    icon : <DiDocker className="text-4xl" />,
  }

];

const firstRow = skills.slice(0, skills.length / 3);
const secondRow = skills.slice(skills.length / 3);
const ThirdRow = skills.slice(2*skills.length/3);

const ReviewCard = ({ icon, name }: { icon: any; name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-30 cursor-pointer overflow-hidden rounded-xl",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex items-center gap-1 mr-5">
        {icon}
        <h1 className="hidden md:block">{name}</h1>
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden bg-background gap-4 md:gap-10">
      
      <Marquee pauseOnHover className="[--duration:20s] w-full">
        {firstRow.map((skill) => (
          <ReviewCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s] w-full">
        {secondRow.map((skill) => (
          <ReviewCard key={skill.name} {...skill} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s] w-full">
        {ThirdRow.map((skill) => (
          <ReviewCard key={skill.name} {...skill} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
    </div>
  );
}
