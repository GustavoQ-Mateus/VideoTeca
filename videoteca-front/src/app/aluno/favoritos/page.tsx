"use client";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { FAVORITES, FILMS } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FilmCard } from "@/components/ui/FilmCard";
import { Heart } from "lucide-react";

const STUDENT = { name: "Ana Clara Mendes", course: "Cinema e Audiovisual" };

export default function FavoritosPage() {
  const rec = FILMS.filter((f) => !FAVORITES.some((x) => x.filmId === f.id)).slice(0, 4);

  return (
    <AppShell role="aluno" title="Favoritos" user={STUDENT}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-semibold text-[#172033]">Filmes salvos</h2>
          {FAVORITES.map((f) => {
            const film = FILMS.find((x) => x.id === f.filmId);
            if (!film) return null;
            return (
              <div key={f.id} className="flex gap-4 p-4 rounded-[16px] border border-[#E2E8F0] bg-white items-center">
                <div className="w-14 h-20 rounded-[10px] bg-gradient-to-b from-[#0066B3] to-[#003A70] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#172033]">{f.title}</p>
                  <p className="text-xs text-[#667085]">{f.year}</p>
                  <Badge status={f.status} className="mt-2" />
                </div>
                <div className="flex flex-col gap-2">
                  <Link href={`/aluno/catalogo/${f.filmId}`}>
                    <Button size="sm" variant="outline">
                      Detalhes
                    </Button>
                  </Link>
                  <Button size="sm" variant="ghost" className="text-red-600">
                    Remover
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <h2 className="font-semibold text-[#172033] mb-3 flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#E7472E]" aria-hidden />
            Recomendados para você
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {rec.map((film) => (
              <FilmCard key={film.id} {...film} detailHref={`/aluno/catalogo/${film.id}`} />
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
