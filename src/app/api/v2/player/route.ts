import { NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';

export async function POST(req: Request) {
  const { id } = await req.json();
  const res = await fetch(`https://video.genyt.com/${id}`);
  const html = await res.text();

  const {
    window: { document },
  } = new JSDOM(html);

  const videoDetails: Partial<VideoDetails> = {};

  /* ------------------------ getting the contents ----------------------- */
  videoDetails.id = id;

  videoDetails.title = document.getElementById('ytitle')?.textContent!;
  videoDetails.link = 'https://www.youtube.com/embed/' + id;
  videoDetails.likes = document.querySelector(
    '#videoinfo > div.videoMeta > div > a > span'
  )?.textContent!;
  videoDetails.views = document
    .querySelector('#videoinfo > div.videoMeta > span')
    ?.textContent!.split(' Views')[0];
  videoDetails.publishedAt = document
    .querySelector('#videoinfo > div.videoMeta > span')
    ?.textContent!.split('•  ')[1];
  videoDetails.author = document.querySelector(
    '#videoinfo > div.videoChannelMeta > p > a'
  )?.textContent!;
  videoDetails.description = document.getElementById('about')?.textContent!;

  return NextResponse.json(videoDetails);
}
