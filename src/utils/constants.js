

const GOOGLE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
export const YOUTUBE_INFINITE_SCROLL_API = (pageToken = "") =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=20&regionCode=IN&pageToken=${pageToken}&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

