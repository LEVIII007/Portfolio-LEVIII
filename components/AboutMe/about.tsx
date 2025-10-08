import React from "react";
import { WobbleCard } from "../ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto my-12">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          I'm a full-stack developer and AI engineer specializing in{" "}
          <b>backend development</b> and <b>agentic AI systems</b>. I'm deeply
          fascinated by the intersection of{" "}
          <b>blockchain and AI applications</b>.
          <br />
          My recent work has been particularly exciting - I've been building{" "}
          <b>trading automation pipelines for Solana DEX platforms</b> and
          developing <b>multi-agent LLM systems</b> that process both off-chain
          and on-chain data to predict token performance. This work combines my
          expertise in <b>Python, Go, Node.js, web3</b> with cutting-edge AI
          technologies.
          <br />
          I'm particularly interested in drawn to{" "}
          <b>infrastructure, backend systems, and agentic AI applications</b>.
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
