import type { FilmRecord } from "@/lib/types";

const base = () => process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";

export async function fetchCatalogFilms(): Promise<FilmRecord[]> {
  const b = base();
  if (!b) return [];
  const res = await fetch(`${b}/api/v1/catalog/films`, { cache: "no-store" });
  if (!res.ok) return [];
  return res.json();
}

export async function fetchFilmById(id: number): Promise<FilmRecord | null> {
  const b = base();
  if (!b) return null;
  const res = await fetch(`${b}/api/v1/catalog/films/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}
