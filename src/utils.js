export async function fetchStats() {
  const res = await fetch("/stats.json");
  return await res.json();
}

export async function fetchOverviews() {
  const res = await fetch("/overviews.json");
  return await res.json();
}
