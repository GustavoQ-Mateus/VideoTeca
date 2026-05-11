import { AppShell } from "@/components/layout/AppShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BookMarked, Film, Clock, X } from "lucide-react";

const STUDENT = { name: "Ana Clara Mendes", course: "Cinema e Audiovisual" };

const RESERVATIONS = [
  { id: 1, film: "O Menino e o Mundo", media: "Blu-ray", requested: "2026-05-10", limit: "2026-05-13", status: "confirmed" },
  { id: 2, film: "Que Horas Ela Volta?", media: "DVD", requested: "2026-05-08", limit: "2026-05-11", status: "waiting" },
  { id: 3, film: "Narradores de Javé", media: "DVD", requested: "2026-04-20", limit: "2026-04-23", status: "expired" },
  { id: 4, film: "Democracia em Vertigem", media: "Digital", requested: "2026-04-10", limit: "2026-04-13", status: "cancelled" },
];

export default function ReservasPage() {
  const active = RESERVATIONS.filter(r => r.status === "confirmed" || r.status === "waiting");
  const past = RESERVATIONS.filter(r => r.status === "expired" || r.status === "cancelled");

  return (
    <AppShell role="aluno" title="Minhas Reservas" user={STUDENT}>
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[["Aguardando Retirada", RESERVATIONS.filter(r=>r.status==="waiting").length, "waiting"],
          ["Confirmadas", RESERVATIONS.filter(r=>r.status==="confirmed").length, "confirmed"],
          ["Expiradas", RESERVATIONS.filter(r=>r.status==="expired").length, "expired"],
          ["Canceladas", RESERVATIONS.filter(r=>r.status==="cancelled").length, "cancelled"]].map(([label, val, status]) => (
          <div key={label as string} className="bg-white rounded-[14px] border border-[#E2E8F0] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F5F7FA] flex items-center justify-center flex-shrink-0">
              <BookMarked className="w-5 h-5 text-[#667085]" aria-hidden />
            </div>
            <div>
              <p className="text-xl font-bold text-[#172033]">{val}</p>
              <p className="text-xs text-[#667085]">{label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Active */}
      {active.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-[#172033] mb-3">Reservas Ativas</h3>
          <div className="space-y-3">
            {active.map(r => (
              <div key={r.id} className="bg-white rounded-[16px] border border-[#E2E8F0] p-5 flex items-center gap-4">
                <div className="w-12 h-16 bg-gradient-to-b from-[#0066B3] to-[#003A70] rounded-[10px] flex items-center justify-center flex-shrink-0">
                  <Film className="w-6 h-6 text-white/30" aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#172033]">{r.film}</p>
                  <p className="text-sm text-[#667085] mt-0.5">{r.media}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs text-[#667085]">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" aria-hidden />Solicitado: {new Date(r.requested).toLocaleDateString("pt-BR")}</span>
                    <span className="flex items-center gap-1 font-medium text-[#E7472E]"><Clock className="w-3 h-3" aria-hidden />Retirar até: {new Date(r.limit).toLocaleDateString("pt-BR")}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge status={r.status} />
                  <Button size="sm" variant="ghost" className="text-xs text-red-500 hover:bg-red-50 gap-1">
                    <X className="w-3.5 h-3.5" aria-hidden />
                    Cancelar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* History */}
      {past.length > 0 && (
        <div>
          <h3 className="font-semibold text-[#172033] mb-3">Histórico</h3>
          <div className="bg-white rounded-[18px] border border-[#E2E8F0] overflow-hidden">
            <table className="w-full" aria-label="Histórico de reservas">
              <thead>
                <tr className="bg-[#F5F7FA] border-b border-[#E2E8F0]">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Título</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Mídia</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Solicitado</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {past.map(r => (
                  <tr key={r.id} className="hover:bg-[#F5F7FA] transition-colors">
                    <td className="px-6 py-3 text-sm font-medium text-[#172033]">{r.film}</td>
                    <td className="px-4 py-3 text-sm text-[#667085]">{r.media}</td>
                    <td className="px-4 py-3 text-sm text-[#667085]">{new Date(r.requested).toLocaleDateString("pt-BR")}</td>
                    <td className="px-4 py-3"><Badge status={r.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </AppShell>
  );
}
