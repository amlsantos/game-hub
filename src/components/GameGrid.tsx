import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const responsiveColumns = { sm: 1, md: 2, lg: 3, xl: 4 };
  const skeletons = [1, 2, 3, 4, 5, 6];

  console.log(isLoading);

  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid columns={responsiveColumns} spacing={50} padding={5}>
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
