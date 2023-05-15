import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  return NextResponse.json('data');
}
export async function POST(req: Request) {
  return NextResponse.json('hey I am here');
}
