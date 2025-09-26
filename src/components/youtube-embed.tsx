"use client";

interface Props {
  id: string;
}

export function YoutubeEmbed({ id }: Props) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      ></iframe>
    </div>
  );
}