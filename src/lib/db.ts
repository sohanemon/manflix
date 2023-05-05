import prisma from '../../prisma/prisma';

export async function addToDB() {
  console.log('first');
  await prisma.video.create({
    data: {
      title: 'Alhamdulillah',
      author: 'unkhonwn',
      description:
        ' lorem, ipsum dolor sit amet consectetur adipisicing elit. ullam odio hic nisi voluptatem reprehenderit, cum quidem aliquam beatae asperiores dignissimos libero dolor ea fugit possimus eos, quisquam iste nostrum fuga.',
      dislikes: 0,
      likes: 5002,
      link: '',
      views: 2500,
    },
  });
}
