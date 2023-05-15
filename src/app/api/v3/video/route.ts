import { NextResponse } from 'next/server';

import { JSDOM } from 'jsdom';
import thumbnailToId from '@/util/thumbnail-to-id';

export async function GET(req: Request) {
  return NextResponse.json("Don't touch videos API");
}
export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');

    const response = await fetch(
      process.env.SEARCH_URL + query?.replaceAll(' ', '+')!
    );
    const html = await response.text();
  } catch (error) {
    return NextResponse.json(error);
  }
}
