"use client";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Heart } from "lucide-react";
import Link from "next/link";

const STUDENT = { name: "Ana Clara Mendes", course: "Cinema e Audiovisual" };

const FAVORITES: { id: number; filmId: number; title: string; year: number; status: string }[] = [];

export default function FavoritosPage() {
  return (
    <AppShell role="aluno" title="Favoritos" user={STUDENT}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="font-semibold text-[#172033]">Filmes salvos</h2>
          {FAVORITES.length === 0 && (
            <div className="py-16 text-center text-[#667085]">
              <Heart className="w-8 h-8 mx-auto mb-2 opacity-25" aria-hidden />
              <p className="text-sm">Nenhum favorito salvo ainda.</p>
            </div>
          )}
          {FAVORITES.map((f) => (
            <div key={f.id} className="flex gap-4 p-4 rounded-[16px] border border-[#E2E8F0] bg-white items-center">
              <div className="w-14 h-20 rounded-[10px] bg-gradient-to-b from-[#0066B3] to-[#003A70] flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#172033]">{f.title}</p>
                <p className="text-xs text-[#667085]">{f.year}</p>
                <Badge status={f.status} className="mt-2" />
              </div>
              <div className="flex flex-col gap-2">
                <Link href={`/aluno/catalogo/${f.filmId}`}>
                  <Button size="sm" variant="outline">Detalhes</Button>
                </Link>
                <Button size="sm" variant="ghost" className="text-red-600">Remover</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
