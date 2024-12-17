import React from "react";
import { WobbleCard } from "../ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          {" "}
          I am a full-stack developer specializing in{" "}
          <b>backend development</b>, currently pursuing a B.Tech IIIT Nagpur 
          (CGPA: <b>7.14/10</b>). Skilled in{" "}
          <b>React, Next.js, TypeScript, Python, and Node.js</b>, I create
          scalable, user-friendly web applications. I have a strong foundation
          in data structures and algorithms, with a <b>LeetCode rating of 1900+</b>.
          <br />
          I have interest in GenAI applications and have experience with langchain and llamaIndex.
          During my internship at <b>CodeStam Technologies</b>, I gained
          hands-on experience in building end-to-end functional platforms for businesses using Nextjs. I
          bring strong technical skills and problem-solving to every endeavor.{" "}
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;