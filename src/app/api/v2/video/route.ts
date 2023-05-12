import { NextResponse } from 'next/server';

import { JSDOM } from 'jsdom';
import thumbnailToId from '@/util/thumbnail-to-id';

export async function GET(req: Request) {
  const response = await fetch('https://www.genyt.com/search.php?q=athlean+x');
  const html = await response.text();
  const {
    window: { document },
  } = new JSDOM(html);
  const searchNode = document.querySelector('#primary > div.row.search');
  const nodeList = searchNode?.childNodes;

  let videos: Video[] = [];
  nodeList?.forEach((el, idx) => {
    let video: Video;
    if (el.childNodes[2]?.textContent) {
      const element = el as HTMLDivElement;
      const thumbnail = element
        .querySelector('.gytImg')
        ?.querySelector('img')
        ?.getAttribute('src')!;

      const id = thumbnailToId(thumbnail);

      video = {
        id,
        title: element.querySelector('.gytTitle')?.textContent!,
        thumbnail,
        duration: element.querySelector('span.duration')?.textContent!,
        link: '',
        author: element.querySelector('small.d-block.text-truncate > a')
          ?.textContent!,
        description: '',
      };
      videos.push(video && video);
    }
  });
  //   console.log(videos!);
  return NextResponse.json(videos);
}
