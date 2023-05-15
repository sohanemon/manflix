export async function videoFetcher(payload: any) {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${url}/video?query=${payload}`, {
    method: 'POST',
    cache: 'force-cache',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const videos: Video[] = await res.json();
  return videos;
}
