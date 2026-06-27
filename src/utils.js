import { z } from "zod";

const statSchema = z
  .array(
    z.object({
      socialApp: z.string(),
      author: z.string(),
      followers: z.string(),
      qty: z.number(),
    }),
  )
  .default([]);

export async function fetchStats() {
  const res = await fetch("/stats.json");
  const data = await res.json();
  return statSchema.parse(data);
}

const overviewSchema = z
  .array(
    z.object({
      title: z.string(),
      qty: z.string(),
      socialApp: z.string(),
      percentage: z.number(),
      rising: z.boolean(),
    }),
  )
  .default([]);

export async function fetchOverviews() {
  const res = await fetch("/overviews.json");
  const data = await res.json();
  return overviewSchema.parse(data);
}
