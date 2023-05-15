import { NextResponse } from 'next/server';

import { JSDOM } from 'jsdom';
import thumbnailToId from '@/util/thumbnail-to-id';
import puppeteer from 'puppeteer';

export async function GET(req: Request) {
  return NextResponse.json("Don't touch videos API");
}
export async function POST(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get('query');

    // puppeteer section
    (async () => {
      // Launch the browser
      const browser = await puppeteer.launch({ headless: true });

      // Create a page
      const page = await browser.newPage();

      // Go to your site
      await page.goto(process.env.SEARCH_URL + query?.replaceAll(' ', '+')!);

      // Query for an element handle.
      const element = await page.waitForSelector('#primary > div.row.search');
      console.log('🛑 ~ element:', element);

      // Do something with element...
      // await element?.click(); // Just an example.

      // // Dispose of handle
      // await element?.dispose();

      // Close browser.
      await browser.close();
    })();
  } catch (error) {
    return NextResponse.json(error);
  }
}
