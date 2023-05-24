import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  const gameQuery = apiClient.get(slug);

  return useQuery({
    queryKey: ["games", slug],
    queryFn: () => gameQuery,
  });
};

export default useGame;
