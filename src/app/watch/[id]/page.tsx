'use client';
interface Props {
  readonly children: React.ReactNode;
  params: { id: string };
}
export default function Page({ params: { id } }: Props) {
  console.log('🛑 ~ Page ~ props:', id);

  return (
    <>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/VIDEO_ID'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      ></iframe>
    </>
  );
}
