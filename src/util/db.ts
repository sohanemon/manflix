import prisma from '../../prisma/prisma';

export async function addVideo(video: Video) {
  return await prisma.video
    .create({
      //@ts-ignore
      data: video,
    })
    .catch((e) => console.log(e.message));
}

export async function getVideos(limit: string) {
  return await prisma.video.findMany({
    take: parseInt(limit || '10'),
    select: {
      title: true,
      id: true,
      thumbnail: true,
      author: true,
      likes: true,
      dislikes: true,
    },
  });
}
