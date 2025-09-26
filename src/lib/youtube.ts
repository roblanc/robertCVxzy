import "server-only";

export async function getYoutubeVideoStatistics(id: string) {
  if (!process.env.YOUTUBE_API_KEY) {
    console.error("YOUTUBE_API_KEY is not set");
    return null;
  }
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=statistics,snippet&key=${process.env.YOUTUBE_API_KEY}`,
    );

    if (!res.ok) {
      console.error("Failed to fetch youtube video statistics");
      return null;
    }

    const data = await res.json();
    if (!data.items[0]) {
      return null;
    }
    return data.items[0];
  } catch (e) {
    console.error(e);
    return null;
  }
}
