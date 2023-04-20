import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton width={600} height={400} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
