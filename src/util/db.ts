import prisma from '../../prisma/prisma';

export async function addVideo(video: Video) {
  await prisma.video
    .create({
      //@ts-ignore
      data: video,
    })
    .catch((e) => e.message);
}
