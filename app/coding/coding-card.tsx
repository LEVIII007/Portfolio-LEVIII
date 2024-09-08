import {
    Card,
    CardContent,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";
  import { Badge } from "@/components/ui/badge";
  import Link from "next/link";
  import { SiLeetcode } from "react-icons/si";
  import { GrGlobe } from "react-icons/gr";
  
  
  export default function CodngCard({ data }: any) {
    return (
      <Card className="w-full sm:w-[100%] rounded-lg overflow-hidden shadow-lg h-[520px] flex flex-col">
        <img
          src={data.imageUrl}
          alt="Project Thumbnail"
          width={400}
          height={500}
          className="w-full h-50 object-cover"
        />
        <CardContent className="p-6 space-y-4 flex flex-col flex-grow justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">{data.title}</CardTitle>
            <CardDescription className="text-muted-foreground mt-2">
              {data.description}
            </CardDescription>
          </div>
          <div className="flex items-center gap-4 mt-auto">
            {data.githubLink && (
              <Link
                href={data.githubLink}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                prefetch={false}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode className="w-4 h-4" />
                Profile
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }
  