import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getYoutubeVideoStatistics } from "@/lib/youtube";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
}

export async function VideoCard({ id }: Props) {
  const video = await getYoutubeVideoStatistics(id);

  if (!video) {
    return null;
  }

  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Link
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        className="block cursor-pointer"
      >
        <Image
          src={video.snippet.thumbnails.maxres?.url || ""}
          alt={video.snippet.title}
          width={500}
          height={300}
          className="h-40 w-full overflow-hidden object-cover object-top"
        />
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base truncate">
            {video.snippet.title}
          </CardTitle>
          <p className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert h-12 overflow-hidden">
            {video.snippet.description}
          </p>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        <div className="mt-2 flex flex-wrap gap-1">
          <div className="flex items-center gap-1">
            <EyeIcon className="size-4" />
            <span className="text-xs text-muted-foreground">
              {Intl.NumberFormat("en-US", {
                notation: "compact",
                maximumFractionDigits: 1,
              }).format(video.statistics.viewCount)}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-2 pb-2"></CardFooter>
    </Card>
  );
}
