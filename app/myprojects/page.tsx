"use client";

import ProjectCard from "@/components/Projects/Projectcard";
import { motion } from "framer-motion";

const projectsData = [
  {
      title: "SaaS Collaborative Workspace",
      description: "A real-time collaborative workspace enabling multiple users to work simultaneously, incorporating real-time multiple-cursors, text selection, and presence indicators.",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Postgres", "Shadcn UI", "Supabase", "socket.io"],
      githubLink: "https://github.com/LEVIII007/SaaS_Workspace",
      liveLink: "https://saas-workspace.vercel.app/",
      imageUrl: "/Cypress.png",
  },
  {
      title: "Sales Person Simulator GPT",
      description: "Developed a real-time voice-based RAG sales-bot that mimics the style of a sales-person, handling complex Product Database queries with low latency.",
      tags: ["Next.js", "Tailwind CSS", "Typescript", "Prisma", "Shadcn UI", "Postgres", "Vercel AI SDK", "Langchain", "Open-AI API"],
      githubLink: "https://github.com/LEVIII007/Seller-Simulator-GPT",
      // liveLink: "https://phone-case-ecommerce.vercel.app",
      imageUrl: "/Seller-sim.png",
  },
  {
    title: "Finance-Assistant",
    description: "A financial education and stock recommendation system that leverages real-time data access through a chatbot using sockets. It incorporate personalized stock recommendations based on user-defined financial profiles and risk tolerance by analysing financial reports of company. The system will visualize key financial metrics from selected companies, facilitating deeper analysis and understanding of financial health. By integrating reliable financial reports and educational resources, the platform aims to enhance users' investment decision-making capabilities.",
    tags: ["Next.js", "Tailwind CSS", "Typescript","Vercel AI SDK", "Langchain", "Open-AI API"],
    githubLink: "https://github.com/LEVIII007/Investo-Bot",
    // liveLink: "https://phone-case-ecommerce.vercel.app",
    imageUrl: "/investo.png",
},
  {
      title: "Echo-Sign Language Interpreter",
      description: "A website that uses a CNN model to interpret sign language gestures and convert them to text. The app is built with React and Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "JavaScript", "Vercel", "CNN", "OpenCV", "Flask", "TensorFlow"],
      githubLink: "https://github.com/LEVIII007/Sign-Language-original",
      imageUrl: "/sign.png",
  },
  {
      title: "Anonymous Feedback System and Analysis",
      description: "Developed a feedback and analysis system where users can send anonymous messages or feedback to other users currently accepting feedback.",
      tags: ["Next.js", "Tailwind CSS", "Resend", "Shadcn UI", "MongoDB", "Zod", "Typescript", "Open-AI API"],
      githubLink: "https://github.com/LEVIII007/AnonSend",
      liveLink: "https://truefeedback.in/",
      imageUrl: "/mystry.png",
  },
  {
      title: "Text-Synth",
      description: "Django website with implementation of 'Attention is All You Need' paper and its application in text generation, translation, and summarization.",
      tags: ["Django", "DjangoREST Framework", "JWT", "Bcrypt", "CORS", "React", "Transformers", "PyTorch"],
      githubLink: "",
      imageUrl: "/synth.png",
  },
  {
      title: "Caption Generator",
      description: "Python Transformers-based model that generates captions for images deployed using Streamlit.",
      tags: ["Python", "Streamlit", "PyTorch", "Hugging Face", "Transformers"],
      githubLink: "https://github.com/LEVIII007/Caption-Generation-for-images",
      liveLink: "https://huggingface.co/spaces/LEVIII007/Visionary_Captions",
      imageUrl: "/gen.png",
  },
  {
      title: "Chat-Sphere",
      description: "A Next.js project that allows users to chat with GPT models with custom data sources like Wikipedia, PDFs, and more.",
      tags: ["Express.js", "Tailwind CSS", "MongoDB", "React", "OpenAI API", "Langchain"],
      githubLink: "https://github.com/LEVIII007/Chat-Sphere",
      imageUrl: "/sphere.png",
  },
];

export default function page() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="lg:container p-3 flex flex-col items-center justify-center mt-10"
    >
      <h1 className="text-3xl font-semibold underline"> More of my projects</h1>
      <div className="flex gap-5 flex-wrap items-center justify-center mt-10">
        {projectsData.map((data) => (
          <ProjectCard key={data.title} data={data} />
        ))}
      </div>
    </motion.div>
  );
}
