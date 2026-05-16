"use client";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Select } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { ROOMS, FILMS } from "@/lib/mock-data";
import { useToast } from "@/components/providers/ToastProvider";

const PROFESSOR = { name: "Carlos Melo", course: "Jornalismo" };

const DAYS = ["Seg 19", "Ter 20", "Qua 21", "Qui 22", "Sex 23"];

export default function SolicitarSalaPage() {
  const { toast } = useToast();
  const [day, setDay] = useState(DAYS[0]);

  return (
    <AppShell role="professor" title="Solicitar sala de exibição" user={PROFESSOR}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-[18px] border border-[#E2E8F0] p-6">
          <h2 className="font-semibold text-[#172033] mb-4">Disponibilidade (mock)</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {DAYS.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setDay(d)}
                className={`px-3 py-2 rounded-[10px] text-sm font-medium border transition-colors ${
                  day === d ? "border-[#0066B3] bg-[#E8F2FC] text-[#0066B3]" : "border-[#E2E8F0] text-[#667085] hover:border-[#0066B3]"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {["08h", "10h", "14h", "16h", "19h"].map((h) => (
              <button key={h} type="button" className="py-3 rounded-[10px] border border-[#E2E8F0] hover:border-[#0066B3] bg-[#F5F7FA] hover:bg-white transition-colors">
                {h}
              </button>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-6 space-y-4">
          <Select label="Sala" required>
            {ROOMS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name} — {r.capacity} lugares
              </option>
            ))}
          </Select>
          <Select label="Filme relacionado" required>
            {FILMS.map((f) => (
              <option key={f.id} value={f.id}>
                {f.title}
              </option>
            ))}
          </Select>
          <Input label="Público estimado" type="number" min={1} defaultValue={35} />
          <Input label="Horário" placeholder="Ex.: 19h00" />
          <Textarea label="Descrição da atividade" rows={4} required />
          <Button
            onClick={() =>
              toast({ title: "Solicitação registrada", description: "Aguarde análise da Videoteca.", variant: "success" })
            }
          >
            Enviar solicitação
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
