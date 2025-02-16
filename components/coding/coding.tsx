// "use client";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import CodingCard from "./coding-card";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";


// export const codingData = [
//   {
//       title: "LeetCode Stats",
//       description: "I have strong foundation in Data Structure and Algorithms and I have solved 200+ problems on LeetCode making me Knight Rated on the platform",
//       githubLink: "https://leetcode.com/u/shashank_2375/",
//       imageUrl: "/leetcode1.png",
//   },
// ] as const;

// export default function Mycoding() {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
//       transition={{ ease: "easeOut", duration: 0.5 }}
//       className="w-full flex flex-col items-center justify-center mt-[200px]"
//     >
//       <h1 className="text-4xl font-bold mb-7">My DSA profiles</h1>

//       <div className="flex flex-wrap gap-5 items-center justify-center ">
//         {codingData.map((data) => (
//           <CodingCard key={data.title} data={data} />
//         ))}
//       </div>
//     </motion.div>
//   );
// }
