import Description from './description';
import Title from './title';

export default async function Page({ params: { id } }: any) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/player`, {
    body: JSON.stringify({ id }),
    method: 'POST',
  });
  const videoDetails = (await res.json()) as VideoDetails;

  return (
    <section className='w-full mx-auto md:w-3/4 lg:w-3/5'>
      <iframe
        className='w-full mx-auto aspect-video'
        src={videoDetails.link}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
      <div className='px-4 mt-4 md:px-0'>
        <Title title={videoDetails.title}></Title>
        <div className='flex justify-between'>
          <p className='text-primary-500'>{videoDetails.author}</p>
          <p>
            {videoDetails.views} views - {videoDetails.publishedAt}
          </p>
        </div>
        <br />
        <Description description={videoDetails.description!} />
      </div>
    </section>
  );
}
