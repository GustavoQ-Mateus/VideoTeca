"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Film, SlidersHorizontal, Star, ChevronDown, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FILMS } from "@/lib/mock-data";

const GENRES = ["Todos", "Drama", "Comédia", "Thriller", "Documentário", "Animação"];

export default function PublicCatalog() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("Todos");

  const filtered = FILMS.filter(f => {
    const q = query.toLowerCase();
    return (!q || f.title.toLowerCase().includes(q) || f.director.toLowerCase().includes(q))
      && (genre === "Todos" || f.genre === genre);
  });

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#0066B3] rounded-[8px] flex items-center justify-center">
              <Film className="w-3.5 h-3.5 text-white" aria-hidden />
            </div>
            <span className="text-sm font-bold text-[#003A70]">Videoteca Unifor</span>
          </Link>
          <span className="text-[#E2E8F0]">/</span>
          <span className="text-sm text-[#667085]">Catálogo Público</span>
          <div className="ml-auto">
            <Link href="/login"><Button size="sm">Entrar para reservar</Button></Link>
          </div>
        </div>
      </header>

      {/* Search hero */}
      <div className="bg-gradient-to-r from-[#003A70] to-[#0066B3] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-white mb-2">Catálogo do Acervo</h1>
          <p className="text-white/60 mb-6">Explore os {FILMS.length} títulos disponíveis. Faça login para reservar.</p>
          <div className="bg-white rounded-[14px] p-1.5 flex gap-2 max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085]" aria-hidden />
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Buscar por título, diretor..."
                className="w-full h-10 pl-9 pr-3 text-sm text-[#172033] placeholder:text-[#667085] outline-none rounded-[10px]"
                aria-label="Buscar no catálogo"
              />
            </div>
            <Button size="sm">Buscar</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por gênero">
            {GENRES.map(g => (
              <button key={g} onClick={() => setGenre(g)} aria-pressed={genre === g}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  genre === g ? "bg-[#0066B3] text-white" : "bg-white border border-[#E2E8F0] text-[#667085] hover:border-[#0066B3]"
                }`}>{g}</button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#667085]" aria-hidden />
            <span className="text-sm text-[#667085]">{filtered.length} título{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>

        {/* Reserve notice */}
        <div className="flex items-center gap-2 bg-[#E8F2FC] border border-[#0066B3]/20 rounded-[10px] px-4 py-2.5 mb-6 text-sm text-[#0066B3]">
          <Info className="w-4 h-4 flex-shrink-0" aria-hidden />
          <span>Para reservar um título, <Link href="/login" className="font-semibold underline">faça login com sua matrícula Unifor</Link>.</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map(film => (
            <div key={film.id} className="bg-white rounded-[18px] border border-[#E2E8F0] overflow-hidden group hover:shadow-[0_8px_24px_rgba(0,102,179,0.10)] hover:-translate-y-0.5 transition-all duration-200">
              <div className="relative bg-gradient-to-br from-[#003A70] to-[#0066B3]" style={{ aspectRatio: "2/3" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                  <Star className="w-10 h-10 text-white/20" aria-hidden />
                  <p className="text-[11px] font-semibold text-white/80 text-center leading-tight">{film.title}</p>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge status={film.status} />
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-black/50 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-md">{film.media}</span>
                </div>
              </div>
              <div className="p-3">
                <p className="font-semibold text-[#172033] text-sm leading-tight">{film.title}</p>
                <p className="text-xs text-[#667085] mt-0.5">{film.director} · {film.year}</p>
                <span className="inline-block mt-1.5 text-[10px] font-medium bg-[#E8F2FC] text-[#0066B3] px-2 py-0.5 rounded-full">{film.genre}</span>
                <Link href="/login">
                  <Button size="sm" variant={film.status === "available" ? "primary" : "ghost"} className="w-full mt-2 text-xs h-8" disabled={film.status !== "available"}>
                    {film.status === "available" ? "Reservar (login)" : "Indisponível"}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
