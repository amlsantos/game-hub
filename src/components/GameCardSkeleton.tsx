import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import placeholder from "../assets/no-image-placeholder-6f3882e0.webp";

export const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton>
        <img src={placeholder} />
      </Skeleton>
      <CardBody>
        <SkeletonText noOfLines={4} />
      </CardBody>
    </Card>
  );
};
