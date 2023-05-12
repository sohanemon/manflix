export default function thumbnailToId(thumbnail: string) {
  return thumbnail.split('vi/')[1].split('/')[0];
}
