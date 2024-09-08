"use client";

import Image from "next/image";
import profile from "@/public/profile1.jpeg";
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
import { SiHuggingface } from "react-icons/si";
import { SiLangchain } from "react-icons/si";
import { SiMongoose } from "react-icons/si";

import {
  SiExpress,
  SiFramer,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills1 = [
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
    name : 'Django',
    icon : <SiDjango className="text-4xl" />,
  },


];

const skills2 = [
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
    name : 'Drizzle',
    icon : <SiDrizzle className="text-4xl" />,
  },
  {
    name : "mongoose",
    icon : <SiMongoose className="text-4xl" />,
  }
];

const skills = [
  {
    name: "Python",
    icon: <IoLogoPython className="text-4xl" />,
  },
  {
    name : 'C++',
    icon : <TbBrandCpp className="text-4xl" />,
  },
  {
    name: "Javascript",
    icon: <IoLogoJavascript className="text-4xl" />,
  },
  {
    name: "Typescript",
    icon: <BiLogoTypescript className="text-4xl" />,
  },

];


const skills3 = [
  {
    name : "Langchain",
    icon : <SiLangchain className="text-4xl" />,
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
    name : 'Huggingface',
    icon : <SiHuggingface className="text-4xl" />,
  },
];

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="mt-10 lg:container w-full p-2"
    >
      <h1 className="font-bold text-3xl ml-3">Who am I</h1>
      <div className=" border-t  flex md:flex-row flex-col gap-10 items-start">
        <div>
          <p className="my-5">
            I'm a 21-year-old full-stack developer who loves building web
            applications. I started coding when I was 19 and have been hooked
            ever since. I also have interests in machine learning and AI. specially in NLP.
            Warning: Hiring me may result in sudden bursts of innovation.
          </p>

          <h1 className="font-bold text-3xl mb-2">My Tech stack</h1>
          <div className="border-t ">
            <div className="flex md:gap-4 flex-wrap p-2 mt-5">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-2 md:p-1"
                >
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
            



            <div className="flex md:gap-4 flex-wrap p-2 mt-5">
              {skills1.map((skill1) => (
                <div
                  key={skill1.name}
                  className="flex items-center gap-3 p-2 md:p-1"
                >
                  {skill1.icon}
                  <p>{skill1.name}</p>
                </div>
              ))}
            </div>


            <div className="flex md:gap-4 flex-wrap p-2 mt-5">
              {skills2.map((skill2) => (
                <div
                  key={skill2.name}
                  className="flex items-center gap-3 p-2 md:p-1"
                >
                  {skill2.icon}
                  <p>{skill2.name}</p>
                </div>
              ))}
            </div>

            <div className="flex md:gap-4 flex-wrap p-2 mt-5">
              {skills3.map((skill3) => (
                <div
                  key={skill3.name}
                  className="flex items-center gap-3 p-2 md:p-1"
                >
                  {skill3.icon}
                  <p>{skill3.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Image
          src={profile}
          alt="Profile"
          width={450}
          height={300}
          className="mt-3"
        />
      </div>

      <h1 className="font-bold text-3xl mb-2 mt-8 ml-2 ">About this website</h1>
      <div className="border-t p-3">
        <h1 className="p-2">Next js</h1>
        <h1 className="p-2">Typescript</h1>
        <h1 className="p-2">Deployed on vercel</h1>
        <h1 className="p-2">Shadcn</h1>
        <h1 className="p-2">Aceternity UI</h1>
        <h1 className="p-2">Tailwind Css</h1>
      </div>
    </motion.div>
  );
}
