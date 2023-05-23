import { Heading, Text } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

export const GameDetailsPage = () => {
  const { slug } = useParams();
  var { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text fontSize={"2xl"}>{game.description_raw}</Text>
    </>
  );
};
