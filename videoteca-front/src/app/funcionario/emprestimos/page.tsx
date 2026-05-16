"use client";
import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LOANS, FILMS } from "@/lib/mock-data";
import { useToast } from "@/components/providers/ToastProvider";
import { Film, Plus, Trash2 } from "lucide-react";

const STAFF = { name: "Carla Nogueira", course: "Funcionária" };

export default function EmprestimosBalcaoPage() {
  const { toast } = useToast();
  const [matricula, setMatricula] = useState("2022001847");
  const [cart, setCart] = useState<number[]>([1]);

  return (
    <AppShell role="funcionario" title="Empréstimos (balcão)" user={STAFF}>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-5">
            <h2 className="font-semibold text-[#172033] mb-3">Buscar aluno</h2>
            <Input label="Matrícula" value={matricula} onChange={(e) => setMatricula(e.target.value)} />
            <Button className="w-full mt-3">Buscar</Button>
            <div className="mt-4 p-3 rounded-[12px] bg-[#F5F7FA] text-sm">
              <p className="font-medium text-[#172033]">Ana Clara Mendes</p>
              <p className="text-[#667085]">Cinema e Audiovisual</p>
              <Badge status="late" className="mt-2" />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 space-y-4">
          <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-5">
            <h2 className="font-semibold text-[#172033] mb-3">Buscar material</h2>
            <div className="flex gap-2">
              <Input isSearch placeholder="Código ou título" className="flex-1" />
              <Button>Buscar</Button>
            </div>
            <div className="mt-4 max-h-48 overflow-y-auto space-y-2">
              {FILMS.slice(0, 4).map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setCart((c) => (c.includes(f.id) ? c : [...c, f.id]))}
                  className="w-full flex items-center gap-3 p-2 rounded-[10px] border border-[#E2E8F0] hover:border-[#0066B3] text-left text-sm"
                >
                  <Film className="w-4 h-4 text-[#0066B3]" aria-hidden />
                  <span className="flex-1 font-medium text-[#172033]">{f.title}</span>
                  <Badge status={f.status} />
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-5">
            <h2 className="font-semibold text-[#172033] mb-3">Itens selecionados</h2>
            <ul className="space-y-2 text-sm">
              {cart.map((id) => {
                const f = FILMS.find((x) => x.id === id);
                if (!f) return null;
                return (
                  <li key={id} className="flex items-center justify-between py-2 border-b border-[#E2E8F0] last:border-0">
                    <span>{f.title}</span>
                    <button type="button" className="text-red-500 p-1" aria-label="Remover" onClick={() => setCart((c) => c.filter((x) => x !== id))}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="text-xs text-[#667085] mt-3">Prazo padrão: 7 dias úteis.</p>
            <div className="flex gap-2 mt-4">
              <Button
                className="gap-2"
                onClick={() => toast({ title: "Empréstimo confirmado", description: "Comprovante enviado ao e-mail do aluno.", variant: "success" })}
              >
                <Plus className="w-4 h-4" aria-hidden />
                Confirmar empréstimo
              </Button>
              <Button variant="outline">Emitir comprovante</Button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
