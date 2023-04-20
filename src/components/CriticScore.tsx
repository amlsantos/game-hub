import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  const color = score >= 75 ? "green" : score >= 50 ? "yellow" : "";

  return (
    <>
      <Badge colorScheme={color} fontSize={"xl"} paddingX={3} borderRadius={5}>
        {score}
      </Badge>
    </>
  );
};
