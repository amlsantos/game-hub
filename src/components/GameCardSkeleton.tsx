import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={270} />
      <CardBody>
        <SkeletonText noOfLines={4} />
      </CardBody>
    </Card>
  );
};
