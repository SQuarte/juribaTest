export interface YoutubeSearchResponseI {
  items: {[key: string]: YoutubeSearchItemI}
}

export interface YoutubeSearchItemI {
  id: any;
  snippet: YoutubeSearchItemSnippet
}

export interface YoutubeSearchItemSnippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: {
    default: YoutubeSearchSnippetThumbnail,
    medium: YoutubeSearchSnippetThumbnail,
    high: YoutubeSearchSnippetThumbnail
  }
}

export interface YoutubeSearchSnippetThumbnail {
  url: string;
  width: number;
  height: number
}
