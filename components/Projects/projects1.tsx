'use client';
import { ProjectItem } from "../ui/project-item";
import { useState } from "react";

export const projectsData = [
  {
    title: "ConverslyAI",
    description: "Conversly is the complete platform for building & deploying AI support agents for your business.",
    tags: ["Next.js", "Node.js", "Python", "Langgraph", "AWS lambda", "ec2"],
    githubLink: "",
    liveLink: "https://conversly.shashankkk.site",
    imageUrl: "/conversly.png",
    features: [
      "Deploy chatbots with tailored responses using custom knowledge bases for specific business needs.",
      "Easily embed agentic RAG chatbots on websites, Discord, and Slack channels with minimal code.",
      "Grounded Answers with Citations, synthesizes information from multiple sources to provide comprehensive answers.",
      "Automatically refreshing and secure data connectors that support all common data sources.",
    ]
  },
  {
    title: "Z-secure",
    description:
      "Originally an npm package, now evolved into a full-fledged SaaS platform providing comprehensive web security solutions, including bot protection, rate limiting, SQL injection prevention, and an SDK for easy integration.",
    tags: [
      "Node.js",
      "TypeScript",
      "Express.js",
      "Redis",
      "PostgreSQL",
      "AWS Lambda",
      "Prisma",
    ],
    githubLink: "https://github.com/LEVIII007/zzz-Secure",
    liveLink: "https://zsecure-documentation.vercel.app/docs",
    imageUrl: "/zsecure.webp",
    features: [
      "Advanced rate limiting, bot protection, and SQL injection prevention with ultra-low latency.",
      "Full SaaS model for businesses requiring high-security API protection.",
      "Provides an SDK for seamless integration into various applications.",
      "Serverless architecture for instant scaling and high availability.",
      "Works with Redis, and PostgreSQL.",
    ]
  },
  {
    title: "Collaborative Workspace",
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
    features: [
      "Real-time collaboration with multiple cursors and text selection",
      "Presence indicators showing active users",
      "Secure authentication and authorization with Supabase",
    ]
  },
  {
    title: "Cloud Vault",
    description:
      "A subscription-based cloud storage service offering scalable and secure file storage, sharing, and quick downloads via AWS CloudFront.",
    tags: [
      "Node.js",
      "AWS S3",
      "Lambda",
      "CloudFront",
      "TypeScript",
    ],
    githubLink: "https://github.com/LEVIII007/CloudVault",
    liveLink: "https://cloud-vault-frontend.vercel.app/",
    imageUrl: "/cloudvault.png",
    features: [
      "Scalable cloud storage with AWS S3",
      "Fast content delivery via CloudFront CDN",
      "Serverless architecture with AWS Lambda",
      "Subscription-based pricing model"
    ]
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
    features: [
      "Real-time voice-based interaction",
      "RAG (Retrieval-Augmented Generation) for accurate product information",
      "Low-latency responses for natural conversations",
    ]
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
    features: [
      "Real-time financial data through websockets",
      "Personalized stock recommendations",
      "Risk tolerance analysis",
      "Financial metrics visualization"
    ]
  },
  {
    title: "Online Cloud IDE",
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
    features: [
      "Multi-language support : python, js",
      "Real-time code execution",
      "Container-based isolation with Docker",
      "Scalable infrastructure with Kubernetes"
    ]
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
    features: [
      "Real-time gesture recognition with CNN",
      "Accurate text conversion",
      "OpenCV for image processing",
      "TensorFlow-based deep learning model"
    ]
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
    features: [
      "Anonymous messaging system",
      "AI-powered feedback analysis",
      "Email notifications with Resend",
      "Real-time feedback acceptance control"
    ]
  },
  {
    title: "Text-Synth",
    description:
      "Django website implementing the 'Attention is All You Need' paper for applications in text generation, translation, and summarization.",
    tags: ["Django", "DjangoREST Framework", "React", "Transformers", "PyTorch"],
    githubLink: "https://github.com/LEVIII007/Text-Synth",
    liveLink: "",
    imageUrl: "/synth.png",
    features: [
      "Transformer architecture implementation",
      "Text generation capabilities",
      "Multi-language translation",
      "Document summarization"
    ]
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
    features: [
      "Automated image captioning",
      "Transformer-based architecture",
      "Deployed on Hugging Face Spaces",
      "Interactive Streamlit interface"
    ]
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
    features: [
      "Custom data source integration",
      "Wikipedia and PDF support",
      "Context-aware conversations",
      "Langchain for advanced prompting"
    ]
  },
];


const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section aria-labelledby="projects-title" className="max-w-6xl mx-auto py-16" id="projects">
      <h2 id="projects-title" className="text-xl font-medium mb-4">
        Projects
      </h2>
      <div className="grid gap-4">
        {displayedProjects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
      
      {projectsData.length > 4 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 text-sm font-medium text-[var(--text-primary)] border border-[var(--card-border)] rounded-lg bg-[var(--card-background)] hover:bg-[var(--hover-background)] transition-colors"
          >
            {showAll ? 'Show Less' : `Show More (${projectsData.length - 4} more)`}
          </button>
        </div>
      )}
    </section>
  )
}

export default Projects
  