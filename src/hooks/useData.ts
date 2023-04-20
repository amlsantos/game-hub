import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => setData(res.data.results))
      .catch((error) => {
        console.error(error.message);

        if (error instanceof CanceledError) {
          console.error("canceled from axios", "aborting due to cancellation");
          return;
        }

        setError(error.message);
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};
