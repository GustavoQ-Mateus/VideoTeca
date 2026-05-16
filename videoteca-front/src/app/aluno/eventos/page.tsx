"use client";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { EVENTS } from "@/lib/mock-data";
import { EventCard } from "@/components/ui/EventCard";
import { Drawer } from "@/components/ui/Drawer";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const STUDENT = { name: "Ana Clara Mendes", course: "Cinema e Audiovisual" };

export default function AlunoEventosPage() {
  const [filter, setFilter] = useState("todos");
  const [drawer, setDrawer] = useState(false);

  const filtered = EVENTS.filter((e) => filter === "todos" || e.type === filter);

  return (
    <AppShell role="aluno" title="Eventos e cineclubes" user={STUDENT}>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1">
          <p className="text-sm text-[#667085]">Destaques da semana e inscrições abertas.</p>
        </div>
        <Button variant="outline" className="sm:hidden" onClick={() => setDrawer(true)}>
          Filtros
        </Button>
        <div className="hidden sm:block w-48">
          <Select aria-label="Tipo de evento" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="todos">Todos os tipos</option>
            <option value="Cineclube">Cineclube</option>
            <option value="Mostra">Mostra</option>
            <option value="Sessão">Sessão</option>
            <option value="Debate">Debate</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((e) => (
          <EventCard key={e.id} {...e} href={`/aluno/eventos/${e.id}`} />
        ))}
      </div>

      <Drawer open={drawer} onClose={() => setDrawer(false)} title="Filtros">
        <Select label="Tipo" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="Cineclube">Cineclube</option>
          <option value="Mostra">Mostra</option>
          <option value="Sessão">Sessão</option>
          <option value="Debate">Debate</option>
        </Select>
        <Button className="w-full mt-4" onClick={() => setDrawer(false)}>
          Aplicar
        </Button>
      </Drawer>
    </AppShell>
  );
}
