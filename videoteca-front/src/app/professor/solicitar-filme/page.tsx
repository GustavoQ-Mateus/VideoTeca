"use client";
import { AppShell } from "@/components/layout/AppShell";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { FILMS, COURSES } from "@/lib/mock-data";
import { useToast } from "@/components/providers/ToastProvider";

const PROFESSOR = { name: "Carlos Melo", course: "Jornalismo" };

export default function SolicitarFilmePage() {
  const { toast } = useToast();

  return (
    <AppShell role="professor" title="Solicitar filme para aula" user={PROFESSOR}>
      <div className="max-w-2xl bg-white rounded-[18px] border border-[#E2E8F0] p-6 space-y-4">
        <Select label="Filme" required defaultValue="">
          <option value="" disabled>
            Selecione…
          </option>
          {FILMS.map((f) => (
            <option key={f.id} value={f.id}>
              {f.title} ({f.year})
            </option>
          ))}
        </Select>
        <Input label="Disciplina" required placeholder="Ex.: Cinema e Sociedade" />
        <Input label="Turma" required placeholder="Ex.: CA-402" />
        <Input label="Data de uso" type="date" required />
        <Textarea label="Objetivo pedagógico" rows={4} required placeholder="Descreva como o filme se integra ao plano de aula." />
        <Textarea label="Observações" rows={3} placeholder="Opcional" />
        <Button
          onClick={() =>
            toast({ title: "Solicitação enviada", description: "A Videoteca analisará e responderá pelo sistema.", variant: "success" })
          }
        >
          Enviar solicitação
        </Button>
      </div>
    </AppShell>
  );
}
