import type { NewsResponse } from "../types/news";
export const NEWS_API_URL = import.meta.env.VITE_API_URL || "/api/v1";

interface fetchNewsParams {
  endpoint: string;
  page: number;
  perPage: number;
}

export const fetchNews = async ({
  endpoint = "news/feed/company/short",
  page = 1,
  perPage = 3,
}: fetchNewsParams): Promise<NewsResponse> => {
    const normalizedEndpoint = endpoint.startsWith("/")
    ? endpoint.slice(1)
    : endpoint;

  const url = `${NEWS_API_URL}/${normalizedEndpoint}?page=${page}&perPage=${perPage}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
