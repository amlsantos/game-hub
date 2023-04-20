import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGames();
  const responsiveColumns = { sm: 1, md: 2, lg: 3, xl: 4 };

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={responsiveColumns} spacing={50} padding={5}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
