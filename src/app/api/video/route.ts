import { getVideos } from '@/util/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  let limit = searchParams.get('limit');

  const videos = await getVideos(limit!);
  return NextResponse.json(videos);
}
