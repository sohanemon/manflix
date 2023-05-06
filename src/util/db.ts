import prisma from '../../prisma/prisma';

export async function addVideo(video: Video) {
  console.log(video);
  return await prisma.video
    .create({
      //@ts-ignore
      data: video,
    })
    .catch((e) => console.log(e.message));
}
