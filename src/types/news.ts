export interface NewsImage {
  hd: string;
  l: string;
  m: string;
  s: string;
}

export interface NewsCover {
  type: "gallery" | string;
  images: NewsImage[];
}

export interface NewsRubric {
  id: number;
  slug: string;
  name: string;
}

export interface NewsDirections {
  id: number;
  slug: string;
  name: string;
}

export interface NewsItem {
  id: string;
  title: string;
  cover: NewsCover;
  likeCount: number;
  viewCount: number;
  publishedAt: string;
  rubrics: NewsRubric[];
  directions: NewsDirections[];
}

export interface NewsResponse {
  totalPages: number;
  perPage: number;
  news: NewsItem[];
  minDatePublication: string;
}
