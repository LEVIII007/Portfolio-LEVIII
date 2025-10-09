import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import SmallNav from "./RetractableNav";

export default function Navbar() {
  return (
    <div className="border-b bg-black z-50 relative bg-opacity-50 transition-opacity duration-500 ease-out transform opacity-100 translate-y-0">
      <div className="flex items-center justify-between px-4 py-4 sm:p-5 lg:container">
        <div className="flex items-center gap-5 ">
          <Link href="/">
            <Image src="/logo_st.webp" alt="Logo" width={30} height={30} />
          </Link>
          <div className="sm:flex hidden items-center gap-5">
            <Link
              href="#projects"
              className="text-sm hover:text-gray-400 cursor-pointer"
            >
              Projects
            </Link>
            <Link
              href="/#experience"
              className="text-sm hover:text-gray-400 cursor-pointer"
            >
              Experience
            </Link>
            <Link
              href="/#contact"
              className="text-sm hover:text-gray-400 cursor-pointer"
            >
              Contact
            </Link>
            <Link
              href="/#conversly"
              className="text-sm hover:text-gray-400 cursor-pointer"
            >
              ConverslyAI
            </Link>
          </div>
        </div>
        <div className="sm:flex hidden items-center sm:gap-5 gap-3">
          <Link
            href="https://github.com/LEVIII007"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shashank-tyagi-783093247/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </Link>
          <Link
            href="https://twitter.com/tyagi_Shashankk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl" />
          </Link>
        </div>
        <SmallNav />
      </div>
    </div>
  );
}