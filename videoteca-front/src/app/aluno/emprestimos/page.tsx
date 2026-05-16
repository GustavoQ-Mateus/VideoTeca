"use client";
import { useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Tabs } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { STUDENT_LOANS_SELF } from "@/lib/mock-data";
import { Film, Clock, RefreshCw, AlertTriangle } from "lucide-react";
import { AlertBanner } from "@/components/ui/AlertBanner";

const STUDENT = { name: "Ana Clara Mendes", course: "Cinema e Audiovisual" };

const HISTORY = [
  { id: 3, film: "Cidade de Deus", borrowed: "2026-04-01", due: "2026-04-08", returned: "2026-04-07", status: "returned" as const },
];

export default function EmprestimosAlunoPage() {
  const [tab, setTab] = useState("ativos");
  const late = STUDENT_LOANS_SELF.filter((l) => l.status === "late");

  return (
    <AppShell role="aluno" title="Meus Empréstimos" user={STUDENT}>
      {late.length > 0 && (
        <AlertBanner variant="warning" title="Pendência de devolução" className="mb-6">
          Você possui material em atraso. Regularize para novos empréstimos.
        </AlertBanner>
      )}
      <Tabs
        tabs={[
          { id: "ativos", label: "Em aberto" },
          { id: "historico", label: "Histórico" },
        ]}
        value={tab}
        onChange={setTab}
        className="mb-6"
      />

      {tab === "ativos" && (
        <div className="space-y-4">
          {STUDENT_LOANS_SELF.map((l) => (
            <div
              key={l.id}
              className={`rounded-[18px] border p-5 flex flex-col sm:flex-row gap-4 ${
                l.status === "late" ? "border-red-200 bg-red-50/50" : "border-[#E2E8F0] bg-white"
              }`}
            >
              <div className="w-12 h-16 bg-gradient-to-b from-[#0066B3] to-[#003A70] rounded-[10px] flex items-center justify-center flex-shrink-0">
                <Film className="w-6 h-6 text-white/30" aria-hidden />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[#172033]">{l.film}</p>
                <p className="text-sm text-[#667085]">{l.media}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-xs text-[#667085]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden />
                    Retirada: {new Date(l.borrowed).toLocaleDateString("pt-BR")}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-[#172033]">
                    Devolução: {new Date(l.due).toLocaleDateString("pt-BR")}
                  </span>
                </div>
                {l.status === "late" && (
                  <p className="text-xs text-red-600 mt-2 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" aria-hidden />
                    Atraso — diárias podem ser aplicadas conforme regulamento.
                  </p>
                )}
              </div>
              <div className="flex flex-col items-stretch sm:items-end gap-2">
                <Badge status={l.status === "borrowed" ? "borrowed" : "late"} />
                {l.renewable && l.status === "borrowed" && (
                  <Button size="sm" variant="secondary" className="gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5" aria-hidden />
                    Renovar
                  </Button>
                )}
                <Link href={`/aluno/catalogo/${l.filmId}`} className="text-xs text-[#0066B3] font-medium hover:underline text-center sm:text-right">
                  Ver título
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "historico" && (
        <div className="bg-white rounded-[18px] border border-[#E2E8F0] overflow-hidden">
          <table className="w-full min-w-[480px] text-sm">
            <thead className="bg-[#F5F7FA] border-b border-[#E2E8F0]">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085]">Título</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085]">Devolvido</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085]">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {HISTORY.map((h) => (
                <tr key={h.id}>
                  <td className="px-4 py-3 font-medium text-[#172033]">{h.film}</td>
                  <td className="px-4 py-3 text-[#667085]">{new Date(h.returned).toLocaleDateString("pt-BR")}</td>
                  <td className="px-4 py-3">
                    <Badge status="returned" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AppShell>
  );
}
