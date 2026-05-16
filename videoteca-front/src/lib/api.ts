/**
 * Cliente HTTP para a API FastAPI (catálogo e demais recursos).
 * Use NEXT_PUBLIC_API_URL (ex.: http://localhost:8000).
 */

const base = () => process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";

export async function fetchCatalogFilmsFromApi(): Promise<unknown[]> {
  const b = base();
  if (!b) throw new Error("NEXT_PUBLIC_API_URL não definido");
  const res = await fetch(`${b}/api/v1/catalog/films`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Catálogo API ${res.status}`);
  return res.json();
}
