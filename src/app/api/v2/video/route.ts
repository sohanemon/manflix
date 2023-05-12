import { NextResponse } from 'next/server';

import { JSDOM } from 'jsdom';

export async function GET(req: Request) {
  const response = await fetch('https://www.genyt.com/search.php?q=athlean+x');
  const html = await response.text();
  const {
    window: { document },
  } = new JSDOM(html);
  const searchNode = document.querySelector('#primary > div.row.search');
  const nodeList = searchNode?.childNodes;

  let videos: Video[] = [];
  nodeList?.forEach((el) => {
    let video: Video;
    if (el.childNodes[2]?.textContent) {
      const element = el as HTMLDivElement;
      video = {
        title: element.querySelector('.gytTitle')?.textContent!,
        link: '',
        author: '',
        description: '',
      };
      videos.push(video && video);
    }
  });
  console.log(videos!);
  return NextResponse.json('data');
}
