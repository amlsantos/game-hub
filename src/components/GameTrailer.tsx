import { Center, Spinner } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

export const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const trailer = trailers?.results[0];

  return trailer ? (
    <Center>
      <video
        width="2000"
        src={trailer.data[480]}
        poster={trailer.preview}
        controls
      />
    </Center>
  ) : null;
};
