import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CodingProfiles: React.FC = () => {
  return (
    <div className="bg-black text-gray-100 py-8 sm:py-16">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">My Coding Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <ProfileCard
            title="LeetCode Profile"
            imageSrc="/leetcode1.png"
            imageAlt="LeetCode Profile"
            link="https://leetcode.com/yourusername"
            description="I regularly participate in leetcode contests and have rating 1990+ which makes me top 4% programmer on leetcode. I have Solved 200+ problems on LeetCode."
          />
          <ProfileCard
            title="Codeforces Profile"
            imageSrc="/codeforces.png"
            imageAlt="Codeforces Profile"
            link="https://codeforces.com/profile/yourusername"
            description="Current Codeforces rating: 1330. In my first year. I had passion for competitive programming which have helped in my logical thinking ability."
          />
        </div>
      </div>
    </div>
  )
}

interface ProfileCardProps {
  title: string
  imageSrc: string
  imageAlt: string
  link: string
  description: string
}

function ProfileCard({ title, imageSrc, imageAlt, link, description }: ProfileCardProps) {
  return (
    <Card className="bg-black border-gray-700 transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-100">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-950 border-gray-600 border-2 rounded-xl p-2 sm:p-4">
          <div className="overflow-hidden rounded-lg">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={imageAlt}
                width={400}
                height={200}
                className="rounded-lg transition-transform duration-500 hover:scale-105 w-full h-auto"
              />
            </Link>
          </div>
        </div>
        <p className="px-3 text-neutral-400 italic text-sm sm:text-base mt-4">{description}</p>
      </CardContent>
    </Card>
  )
}

export default CodingProfiles

