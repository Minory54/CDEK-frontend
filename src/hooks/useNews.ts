import { useEffect, useRef, useState } from "react";
import { fetchNews } from "../api/api";
import type { NewsResponse } from "../types/news";

interface UseNewsParams {
  endpoint: string;
  page?: number;
  perPage: number;
}

const cache = new Map<string, NewsResponse>();

export function useNews({ endpoint, page = 1, perPage }: UseNewsParams) {
  const key = `${endpoint}_${page}_${perPage}`;
  const cachedData = cache.get(key) ?? null;

  const [fetchedData, setFetchedData] = useState<NewsResponse | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isFetchingRef = useRef(false);

  useEffect(() => {
    if (cachedData || isFetchingRef.current) return;

    const loadNews = async () => {
      isFetchingRef.current = true;
      setIsFetching(true);
      setError(null);

      try {
        const result = await fetchNews({ endpoint, page, perPage });
        cache.set(key, result);
        setFetchedData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Произошла ошибка");
      } finally {
        setIsFetching(false);
        isFetchingRef.current = false;
      }
    };

    loadNews();
  }, [endpoint, page, perPage, key, cachedData]);

  return {
    data: cachedData ?? fetchedData,
    loading: !cachedData && isFetching,
    error,
  };
}
