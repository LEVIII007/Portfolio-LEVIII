import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Regal from "@/public/images/regal.jpg";
import Bytes from "@/public/images/bytes.jpg";
import Page from "@/public/images/page.jpg";
import Link from "next/link";
import { ProjectCard, ProjectCardKing } from "./Projectcard";
import { features } from "process";

export const projectsData = [
    {
      title: "SaaS Collaborative Workspace",
      description:
        "A real-time collaborative workspace enabling multiple users to work simultaneously, incorporating real-time multiple-cursors, text selection, and presence indicators.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "Postgres",
        "Shadcn UI",
        "Supabase",
        "socket.io",
      ],
      githubLink: "https://github.com/LEVIII007/SaaS_Workspace",
      liveLink: "https://saas-workspace.vercel.app/",
      imageUrl: "/Cypress.png",
    },
  {
    title: "Sales Person Simulator GPT",
    description:
      "Developed a real-time voice-based RAG sales-bot that mimics the style of a salesperson, handling complex Product Database queries with low latency.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Prisma",
      "Shadcn UI",
      "Postgres",
      "Vercel AI SDK",
      "Langchain",
      "OpenAI API",
    ],
    githubLink: "https://github.com/LEVIII007/Seller-Simulator-GPT",
    liveLink: "",
    imageUrl: "/Seller-sim.png",
  },
  {
    title: "Finance-Assistant",
    description:
      "A financial education and stock recommendation system that leverages real-time data access through a chatbot using sockets. It provides personalized stock recommendations based on user-defined financial profiles and risk tolerance by analyzing financial reports of companies. The system visualizes key financial metrics, facilitating deeper financial analysis.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Vercel AI SDK",
      "Langchain",
      "OpenAI API",
    ],
    githubLink: "https://github.com/LEVIII007/Investo-Bot",
    liveLink: "",
    imageUrl: "/investo.png",
  },
  {
    title: "Online Scalable Cloud IDE",
    description:
      "Built a fully scalable cloud-based IDE, similar to Replit, that allows developers to write, run, and collaborate on code in real-time. It supports multiple programming languages and ensures seamless scalability using Docker, Kubernetes, and Minikube.",
    tags: [
      "Docker",
      "Kubernetes",
      "Minikube",
      "Node.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    githubLink: "https://github.com/LEVIII007/my_IDE",
    liveLink: "",
    imageUrl: "/IDE.png",
  },
  {
    title: "Echo-Sign Language Interpreter",
    description:
      "A website that uses a CNN model to interpret sign language gestures and convert them to text. Built with React and Tailwind CSS.",
    tags: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
      "CNN",
      "OpenCV",
      "Flask",
      "TensorFlow",
    ],
    githubLink: "https://github.com/LEVIII007/Sign-Language-original",
    liveLink: "",
    imageUrl: "/sign.png",
  },
  {
    title: "Anonymous Feedback System and Analysis",
    description:
      "Developed a feedback and analysis system where users can send anonymous messages or feedback to other users currently accepting feedback.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Resend",
      "Shadcn UI",
      "MongoDB",
      "Zod",
      "TypeScript",
      "OpenAI API",
    ],
    githubLink: "https://github.com/LEVIII007/AnonSend",
    liveLink: "https://truefeedback.in/",
    imageUrl: "/mystry.png",
  },
  {
    title: "Text-Synth",
    description:
      "Django website implementing the 'Attention is All You Need' paper for applications in text generation, translation, and summarization.",
    tags: ["Django", "DjangoREST Framework", "React", "Transformers", "PyTorch"],
    githubLink: "https://github.com/LEVIII007/Text-Synth",
    liveLink: "",
    imageUrl: "/synth.png",
  },
  {
    title: "Caption Generator",
    description:
      "Python Transformers-based model that generates captions for images, deployed using Streamlit.",
    tags: [
      "Python",
      "Streamlit",
      "PyTorch",
      "Hugging Face",
      "Transformers",
    ],
    githubLink: "https://github.com/LEVIII007/Caption-Generation-for-images",
    liveLink:
      "https://huggingface.co/spaces/LEVIII007/Visionary_Captions",
    imageUrl: "/gen.png",
  },
  {
    title: "Chat-Sphere",
    description:
      "A Next.js project that allows users to chat with GPT models using custom data sources like Wikipedia, PDFs, and more.",
    tags: [
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "React",
      "OpenAI API",
      "Langchain",
    ],
    githubLink: "https://github.com/LEVIII007/Chat-Sphere",
    liveLink: "",
    imageUrl: "/sphere.png",
  },
  ];

  const ProjectKingData = [
    {
      title: "z-secure",
      description:
        "A npm package that provides security against commonn web attacks like Ddos, XSS, CSRF, sql injection, local file inclusion and more using advanced deteciton rate limiting and detection algorithms",
      tags: [
        "Node.js",
        "TypeScript",
        "Express.js",
        "Redis",
        "Postgres",
      ],
      githubLink: "https://github.com/LEVIII007/zzz-Secure",
      liveLink: "https://www.npmjs.com/package/z-secure",
      imageUrl: "/zsecure.webp",
      features : ["z-secure detects the common web attack patterns and counts and limits the number of actions by key and protects from DDoS and brute force attacks at any scale.", 
        "works with browser memory, Redis and PostgreSQL", "No race conditions in memory", "No production dependencies", "TypeScript declaration bundled"]
    }
  ]




const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
        Projects
      </div>
      <div>
        {ProjectKingData.map((project) => (
          <ProjectCardKing key={project.title} {...project} />
        ))}
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;