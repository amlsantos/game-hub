import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => setGenres(res.data.results))
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

  return { genres, error, isLoading };
};
