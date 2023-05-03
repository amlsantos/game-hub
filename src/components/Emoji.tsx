import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

export const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "ThumbsUp", boxSize: "25px" },
    5: { src: bullsEye, alt: "BullsEye", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};
