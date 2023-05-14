export async function videoFetcher(payload: any) {
  const url = 'http://localhost:3000';
  const res = await fetch(`${url}/api/v2/video?query=${payload}`, {
    method: 'POST',
    cache: 'force-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const videos: Video[] = await res.json();
  return videos;
}
