import { addVideo } from '@/util/db';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ data: 'hello' });
}

export async function POST(req: Request) {
  const data = await req.json();
  const res = await addVideo(data);
  return NextResponse.json(res);
}
