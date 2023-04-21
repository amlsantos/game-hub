import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      setIsLoading(true);
      setData([]);

      console.log("fetching on ", endpoint, " with config ", requestConfig);

      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
        })
        .catch((error) => {
          console.error(error.message);

          if (error instanceof CanceledError) {
            console.error(
              "canceled from axios",
              "aborting due to cancellation"
            );
            return;
          }

          setError(error.message);
        })
        .finally(() => setIsLoading(false));

      return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );

  return { data, error, isLoading };
};
