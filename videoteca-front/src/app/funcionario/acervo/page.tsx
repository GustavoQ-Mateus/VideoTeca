"use client";
import Link from "next/link";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FILMS } from "@/lib/mock-data";
import { Search, Plus, Film, Edit, Eye, Ban, ChevronDown, Filter } from "lucide-react";

const STAFF = { name: "Carla Nogueira", course: "Funcionária" };

export default function AcervoPage() {
  const [query, setQuery] = useState("");

  const filtered = FILMS.filter(f =>
    !query || f.title.toLowerCase().includes(query.toLowerCase()) || f.director.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AppShell role="funcionario" title="Gestão do Acervo" user={STAFF}>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085]" aria-hidden />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar por título, diretor, código..."
            className="w-full h-10 pl-9 pr-3 rounded-[10px] border border-[#E2E8F0] bg-white text-sm text-[#172033] placeholder:text-[#667085] focus:outline-none focus:border-[#0066B3] focus:ring-2 focus:ring-[#0066B3]/20"
            aria-label="Buscar material"
          />
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <select className="appearance-none h-10 pl-3 pr-8 rounded-[10px] border border-[#E2E8F0] bg-white text-sm text-[#667085] focus:outline-none focus:border-[#0066B3] cursor-pointer" aria-label="Filtrar por tipo">
              <option>Todos os tipos</option>
              <option>DVD</option>
              <option>Blu-ray</option>
              <option>Digital</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085] pointer-events-none" aria-hidden />
          </div>
          <Button variant="outline" className="h-10 gap-1.5">
            <Filter className="w-4 h-4" aria-hidden />
            Filtros
          </Button>
          <Link href="/funcionario/acervo/novo">
            <Button className="h-10 gap-1.5">
              <Plus className="w-4 h-4" aria-hidden />
              Cadastrar Material
            </Button>
          </Link>
        </div>
      </div>

      {/* Summary */}
      <div className="flex gap-4 mb-4">
        {[["Total", FILMS.length], ["Disponíveis", FILMS.filter(f=>f.status==="available").length], ["Emprestados", FILMS.filter(f=>f.status==="borrowed").length], ["Reservados", FILMS.filter(f=>f.status==="reserved").length]].map(([label, val]) => (
          <div key={label as string} className="bg-white rounded-[12px] border border-[#E2E8F0] px-4 py-2.5 flex items-center gap-2">
            <span className="text-lg font-bold text-[#172033]">{val}</span>
            <span className="text-xs text-[#667085]">{label}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-[18px] border border-[#E2E8F0] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full" aria-label="Acervo de materiais">
            <thead>
              <tr className="bg-[#F5F7FA] border-b border-[#E2E8F0]">
                <th className="text-left px-6 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Material</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Gênero</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Mídia</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Localização</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {filtered.map(film => (
                <tr key={film.id} className="hover:bg-[#F5F7FA] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-10 bg-gradient-to-b from-[#0066B3] to-[#003A70] rounded-[6px] flex items-center justify-center flex-shrink-0">
                        <Film className="w-4 h-4 text-white/40" aria-hidden />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#172033]">{film.title}</p>
                        <p className="text-xs text-[#667085]">{film.director} · {film.year}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span className="text-xs font-medium bg-[#E8F2FC] text-[#0066B3] px-2 py-0.5 rounded-full">{film.genre}</span>
                  </td>
                  <td className="px-4 py-4 text-sm text-[#667085]">{film.media}</td>
                  <td className="px-4 py-4 text-sm text-[#667085]">{film.location}</td>
                  <td className="px-4 py-4"><Badge status={film.status} /></td>
                  <td className="px-4 py-4">
                    <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/funcionario/acervo/${film.id}/copias`} className="w-7 h-7 rounded-[6px] hover:bg-[#E8F2FC] flex items-center justify-center text-[#0066B3] transition-colors" aria-label={`Ver cópias de ${film.title}`}>
                        <Eye className="w-3.5 h-3.5" />
                      </Link>
                      <button className="w-7 h-7 rounded-[6px] hover:bg-amber-50 flex items-center justify-center text-amber-600 transition-colors" aria-label={`Editar ${film.title}`}>
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 rounded-[6px] hover:bg-red-50 flex items-center justify-center text-red-500 transition-colors" aria-label={`Inativar ${film.title}`}>
                        <Ban className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-[#E2E8F0] flex items-center justify-between">
          <p className="text-sm text-[#667085]">Mostrando {filtered.length} de {FILMS.length} itens</p>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map(p => (
              <button key={p} className={`w-8 h-8 rounded-[8px] text-sm font-medium transition-colors ${p === 1 ? "bg-[#0066B3] text-white" : "text-[#667085] hover:bg-[#F5F7FA]"}`}
                aria-label={`Página ${p}`} aria-current={p === 1 ? "page" : undefined}>{p}</button>
            ))}
            <span className="text-[#667085] px-1 text-sm">...</span>
            <button className="w-8 h-8 rounded-[8px] text-sm font-medium text-[#667085] hover:bg-[#F5F7FA]" aria-label="Última página">125</button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
