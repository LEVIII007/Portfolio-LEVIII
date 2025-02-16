import { IoCodeWorking, IoLaptopOutline } from "react-icons/io5";
import { TracingBeam } from "../ui/tracing-beam";
import { FaGraduationCap } from "react-icons/fa6";

const experiencesData = [
  {
    title: "Computer-Science and Engineering",
    location: "Nagpur",
    organization: "Indian Institute of Information Technology, Nagpur",
    description:
      "I am nearing the completion of my computer engineering degree, currently in the pre-final year. ",
    icon: <FaGraduationCap className="w-[40px] h-[40px]" />,
    date: "2022- present",
  },
  {
    title: "Backend Developer Intern (Remote)",
    organization: "CodeStam Technologies",
    description:
      `Engineered scalable full-stack end-to-end E-commerce platforms using Next.js, React, and PostgreSQL for businesses.
• Developed a comprehensive Admin Panel, optimizing management workflows and increasing opera-
tional efficiency by 25%
• Implemented robust authentication using NextAuth/Auth.js, reducing unauthorized access attempts
by 40%
• Established database security protocols, mitigating potential vulnerabilities by 35% through opti-
mized input validation`,
    icon: <IoCodeWorking className="w-[40px] h-[40px]" />,
    date: "May 2024 - July 2024",
    location: "Remote",
  },
] as const;

export default function Experience() {
  return (
    <div
      className="mt-[200px] flex items-center flex-col justify-center scroll-mt-28 transition-opacity duration-500 ease-out transform opacity-100 translate-y-0"
      id="experience"
    >
      <h1 className="font-bold text-3xl">My experience</h1>
      <div>
        <TracingBeam className="sm:flex hidden">
          <section className="w-full flex flex-col gap-10 items-center justify-center scroll-mt-28 py-[120px]">
            <div className="flex flex-col gap-10 max-w-[900px]">
              {experiencesData.map((items, index) => (
                <div key={index}>
                  <div className="p-5 w-full border rounded-lg">
                    <h1 className="font-semibold text-2xl capitalize">
                      {items.title}
                    </h1>
                    <p className="font-normal mt-2">{items.location}</p>
                    <p className="font-normal mt-1">{items.organization}</p>
                    <p className="mt-4 font-normal text-gray-700 dark:text-white/75">
                      {items.description}
                    </p>
                    <p className="font-normal mt-5">{items.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </TracingBeam>

        <section className="w-full flex sm:hidden flex-col gap-10 items-center justify-center scroll-mt-28 py-[30px]">
          <div className="flex flex-col gap-10 max-w-[1000px]">
            {experiencesData.map((items, index) => (
              <div key={index}>
                <div className="p-5 w-full border rounded-lg">
                  <h1 className="font-semibold text-2xl capitalize">
                    {items.title}
                  </h1>
                  <p className="font-normal mt-2">{items.location}</p>
                  <p className="font-normal mt-1">{items.organization}</p>
                  <p className="mt-4 font-normal text-gray-700 dark:text-white/75">
                    {items.description}
                  </p>
                  <p className="font-normal mt-5">{items.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}