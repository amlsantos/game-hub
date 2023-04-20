const getCroppedImageUrl = (url: string) => {
  const media = "media/";
  const resolution = "crop/600/400/";
  const index = url.indexOf(media) + media.length;

  return url.slice(0, index) + resolution + url.slice(index);
};

export default getCroppedImageUrl;
