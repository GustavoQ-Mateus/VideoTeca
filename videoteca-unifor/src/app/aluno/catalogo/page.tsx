"use client";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { FilmCard } from "@/components/ui/FilmCard";
import { Button } from "@/components/ui/Button";
import { FILMS } from "@/lib/mock-data";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const GENRES = ["Todos", "Drama", "Comédia", "Thriller", "Documentário", "Animação"];
const STATUSES = ["Todos", "Disponível", "Emprestado", "Reservado"];
const MEDIAS = ["Todos", "DVD", "Blu-ray", "Digital"];

export default function StudentCatalog() {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("Todos");
  const [selectedStatus, setSelectedStatus] = useState("Todos");
  const [selectedMedia, setSelectedMedia] = useState("Todos");
  const [sort, setSort] = useState("recentes");

  const filtered = FILMS.filter(f => {
    const q = query.toLowerCase();
    const matchQuery = !q || f.title.toLowerCase().includes(q) || f.director.toLowerCase().includes(q);
    const matchGenre = selectedGenre === "Todos" || f.genre === selectedGenre;
    const matchStatus = selectedStatus === "Todos" ||
      (selectedStatus === "Disponível" && f.status === "available") ||
      (selectedStatus === "Emprestado" && f.status === "borrowed") ||
      (selectedStatus === "Reservado" && f.status === "reserved");
    const matchMedia = selectedMedia === "Todos" || f.media === selectedMedia;
    return matchQuery && matchGenre && matchStatus && matchMedia;
  });

  return (
    <AppShell role="aluno" title="Catálogo de Filmes" user={{ name: "Ana Clara Mendes", course: "Cinema e Audiovisual" }}>
      {/* Search hero */}
      <div className="bg-gradient-to-r from-[#003A70] to-[#0066B3] rounded-[18px] p-6 mb-6">
        <h2 className="text-xl font-bold text-white mb-1">Explorar o Acervo</h2>
        <p className="text-white/60 text-sm mb-4">1.248 títulos · Busque por título, diretor, gênero ou idioma</p>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Buscar no acervo..."
              className="w-full h-11 bg-white rounded-[10px] px-4 text-sm text-[#172033] placeholder:text-[#667085] outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Buscar filmes"
            />
          </div>
          <Button variant="secondary" className="h-11 gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
            <SlidersHorizontal className="w-4 h-4" aria-hidden />
            Filtros
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        {/* Genre filter */}
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filtrar por gênero">
          {GENRES.map(g => (
            <button
              key={g}
              onClick={() => setSelectedGenre(g)}
              aria-pressed={selectedGenre === g}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                selectedGenre === g
                  ? "bg-[#0066B3] text-white"
                  : "bg-white border border-[#E2E8F0] text-[#667085] hover:border-[#0066B3] hover:text-[#0066B3]"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="flex gap-2 ml-auto">
          {/* Status */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="appearance-none h-8 pl-3 pr-8 rounded-[8px] border border-[#E2E8F0] bg-white text-xs text-[#667085] focus:outline-none focus:border-[#0066B3] cursor-pointer"
              aria-label="Disponibilidade"
            >
              {STATUSES.map(s => <option key={s}>{s}</option>)}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#667085] pointer-events-none" aria-hidden />
          </div>
          {/* Media */}
          <div className="relative">
            <select
              value={selectedMedia}
              onChange={e => setSelectedMedia(e.target.value)}
              className="appearance-none h-8 pl-3 pr-8 rounded-[8px] border border-[#E2E8F0] bg-white text-xs text-[#667085] focus:outline-none focus:border-[#0066B3] cursor-pointer"
              aria-label="Tipo de mídia"
            >
              {MEDIAS.map(m => <option key={m}>{m}</option>)}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#667085] pointer-events-none" aria-hidden />
          </div>
          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="appearance-none h-8 pl-3 pr-8 rounded-[8px] border border-[#E2E8F0] bg-white text-xs text-[#667085] focus:outline-none focus:border-[#0066B3] cursor-pointer"
              aria-label="Ordenar por"
            >
              <option value="recentes">Mais recentes</option>
              <option value="procurados">Mais procurados</option>
              <option value="alfa">A–Z</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#667085] pointer-events-none" aria-hidden />
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-[#667085] mb-4">
        <span className="font-semibold text-[#172033]">{filtered.length}</span> título{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.map(film => (
            <FilmCard key={film.id} {...film} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-[#E8F2FC] flex items-center justify-center mb-4">
            <SlidersHorizontal className="w-7 h-7 text-[#0066B3]" aria-hidden />
          </div>
          <p className="text-[#172033] font-medium">Nenhum resultado encontrado</p>
          <p className="text-[#667085] text-sm mt-1">Tente ajustar os filtros ou buscar por outro termo.</p>
          <Button variant="secondary" className="mt-4" onClick={() => { setQuery(""); setSelectedGenre("Todos"); setSelectedStatus("Todos"); setSelectedMedia("Todos"); }}>
            Limpar filtros
          </Button>
        </div>
      )}
    </AppShell>
  );
}
