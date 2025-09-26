
"use client";

import { getYoutubeVideoStatistics } from "@/lib/youtube";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  id: string;
}

type Video = {
  snippet: {
    title: string;
    thumbnails: {
      maxres?: {
        url: string;
      };
    };
    channelTitle: string;
  };
  statistics: {
    viewCount: number;
  };
};

export function YoutubeEmbed({ id }: Props) {
  const [video, setVideo] = useState<Video | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchVideo = async () => {
      const videoData = await getYoutubeVideoStatistics(id);
      setVideo(videoData);
    };

    fetchVideo();
  }, [id]);

  if (!video) {
    return (
      <div className="aspect-video w-full animate-pulse rounded-lg bg-muted"></div>
    );
  }

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="group relative w-full cursor-pointer overflow-hidden rounded-lg">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full"
        ></iframe>
      ) : (
        <div onClick={handlePlay} className="relative">
          <Image
            src={video.snippet.thumbnails.maxres?.url || ""}
            alt={video.snippet.title}
            width={1280}
            height={720}
            className="aspect-video w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-all duration-300 group-hover:bg-opacity-50">
            <div className="rounded-full bg-black/70 p-4">
              <PlayIcon className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="font-bold text-white">{video.snippet.title}</h3>
            <p className="text-sm text-white/80">
              {video.snippet.channelTitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
