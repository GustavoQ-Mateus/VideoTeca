import type { FilmRecord } from "@/lib/mock-data";
import { FILMS } from "@/lib/mock-data";
import { fetchCatalogFilmsFromApi } from "@/lib/api";

/**
 * Catálogo: mock por padrão. Com NEXT_PUBLIC_USE_MOCK=false e NEXT_PUBLIC_API_URL,
 * busca na API FastAPI (vertical de integração).
 */
export async function getCatalogFilms(): Promise<FilmRecord[]> {
  const useMock = process.env.NEXT_PUBLIC_USE_MOCK !== "false";
  if (useMock) return FILMS;
  try {
    const data = await fetchCatalogFilmsFromApi();
    if (Array.isArray(data) && data.length) {
      return data as FilmRecord[];
    }
  } catch {
    /* fallback */
  }
  return FILMS;
}
