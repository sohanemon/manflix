export async function videoFetcher(payload: any) {
  const res = await fetch(
    'http://localhost:3000/api/v2/video?query=abdullah bin abdur razzak new',
    {
      next: { revalidate: 50 },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const videos: Video[] = await res.json();
  return videos;
}
