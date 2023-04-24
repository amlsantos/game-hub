import noImage from "../assets/no-image-placeholder-6f3882e0.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const media = "media/";
  const resolution = "crop/600/400/";
  const index = url.indexOf(media) + media.length;

  return url.slice(0, index) + resolution + url.slice(index);
};

export default getCroppedImageUrl;
