"use client";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { EVENTS } from "@/lib/mock-data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const STAFF = { name: "Carla Nogueira", course: "Funcionária" };

export default function FuncionarioEventosPage() {
  return (
    <AppShell role="funcionario" title="Gestão de eventos" user={STAFF}>
      <div className="flex justify-end mb-4 gap-2">
        <Button variant="outline">Rascunhos</Button>
        <Button>Criar evento</Button>
      </div>
      <div className="bg-white rounded-[18px] border border-[#E2E8F0] divide-y divide-[#E2E8F0]">
        {EVENTS.map((e) => (
          <div key={e.id} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-[#172033]">{e.title}</p>
              <p className="text-sm text-[#667085]">
                {new Date(e.date).toLocaleDateString("pt-BR")} · {e.time} · {e.location}
              </p>
            </div>
            <Badge label="Publicado" className="bg-emerald-100 text-emerald-800" />
            <div className="flex gap-2">
              <Link href={`/funcionario/eventos/${e.id}/presenca`}>
                <Button size="sm" variant="secondary">
                  Presença
                </Button>
              </Link>
              <Button size="sm" variant="outline">
                Editar
              </Button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
