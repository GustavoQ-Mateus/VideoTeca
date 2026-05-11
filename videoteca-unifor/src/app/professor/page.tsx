import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Film, Building2, ClipboardList, BookOpen, Calendar, ChevronRight, Clock } from "lucide-react";

const PROFESSOR = { name: "Carlos Melo", course: "Jornalismo" };

const REQUESTS = [
  { id: 1, type: "Filme", item: "Central do Brasil", discipline: "Jornalismo Investigativo", class: "JORN-2024-1A", date: "2026-05-20", status: "analysis" },
  { id: 2, type: "Sala", item: "Sala de Exibição 1", discipline: "Produção Audiovisual", class: "COM-2024-2B", date: "2026-05-15", status: "approved" },
  { id: 3, type: "Filme", item: "Bacurau", discipline: "Teoria da Comunicação", class: "JORN-2023-3C", date: "2026-05-10", status: "approved" },
  { id: 4, type: "Sala", item: "Videoteca A", discipline: "Fotojornalismo", class: "JORN-2024-4A", date: "2026-05-08", status: "refused" },
];

export default function ProfessorDashboard() {
  return (
    <AppShell role="professor" title="Área do Professor" user={PROFESSOR}>
      {/* Greeting */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#172033]">Olá, Prof. {PROFESSOR.name.split(" ")[0]}!</h2>
        <p className="text-[#667085] text-sm mt-1">Curso de {PROFESSOR.course}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Solicitações Ativas" value={2} icon={ClipboardList} accent="blue" />
        <StatCard label="Salas Reservadas" value={1} icon={Building2} accent="green" />
        <StatCard label="Filmes Utilizados" value={8} icon={Film} accent="purple" />
        <StatCard label="Sessões Realizadas" value={12} icon={Calendar} accent="yellow" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main: requests */}
        <div className="lg:col-span-2 bg-white rounded-[18px] border border-[#E2E8F0] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
            <h3 className="font-semibold text-[#172033]">Minhas Solicitações</h3>
            <Link href="/professor/solicitacoes" className="text-sm text-[#0066B3] hover:underline flex items-center gap-1">
              Ver todas <ChevronRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          </div>
          <div className="divide-y divide-[#E2E8F0]">
            {REQUESTS.map(req => (
              <div key={req.id} className="flex items-center gap-4 px-6 py-4 hover:bg-[#F5F7FA] transition-colors">
                <div className={`w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0 ${req.type === "Filme" ? "bg-[#E8F2FC] text-[#0066B3]" : "bg-violet-50 text-violet-600"}`}>
                  {req.type === "Filme" ? <Film className="w-5 h-5" aria-hidden /> : <Building2 className="w-5 h-5" aria-hidden />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-[#172033]">{req.item}</p>
                    <span className="text-xs bg-[#F5F7FA] border border-[#E2E8F0] text-[#667085] px-1.5 py-0.5 rounded-md">{req.type}</span>
                  </div>
                  <p className="text-xs text-[#667085] mt-0.5">{req.discipline} · {req.class}</p>
                  <div className="flex items-center gap-1.5 mt-0.5 text-xs text-[#667085]">
                    <Clock className="w-3 h-3" aria-hidden />
                    {new Date(req.date).toLocaleDateString("pt-BR")}
                  </div>
                </div>
                <Badge status={req.status} />
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-6">
            <h3 className="font-semibold text-[#172033] mb-4">Nova Solicitação</h3>
            <div className="space-y-3">
              <Link href="/professor/solicitar-filme" className="flex items-center gap-3 p-4 rounded-[12px] border-2 border-dashed border-[#E2E8F0] hover:border-[#0066B3] hover:bg-[#E8F2FC]/30 transition-all group">
                <div className="w-10 h-10 rounded-[10px] bg-[#E8F2FC] flex items-center justify-center group-hover:bg-[#0066B3] transition-colors">
                  <Film className="w-5 h-5 text-[#0066B3] group-hover:text-white transition-colors" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#172033]">Solicitar Filme</p>
                  <p className="text-xs text-[#667085]">Para atividade em sala</p>
                </div>
              </Link>
              <Link href="/professor/solicitar-sala" className="flex items-center gap-3 p-4 rounded-[12px] border-2 border-dashed border-[#E2E8F0] hover:border-violet-400 hover:bg-violet-50/30 transition-all group">
                <div className="w-10 h-10 rounded-[10px] bg-violet-50 flex items-center justify-center group-hover:bg-violet-500 transition-colors">
                  <Building2 className="w-5 h-5 text-violet-600 group-hover:text-white transition-colors" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#172033]">Solicitar Sala</p>
                  <p className="text-xs text-[#667085]">Salas de exibição</p>
                </div>
              </Link>
            </div>
          </div>

          {/* History summary */}
          <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-6">
            <h3 className="font-semibold text-[#172033] mb-4">Histórico Acadêmico</h3>
            <div className="space-y-3">
              {[
                { label: "Filmes usados em 2026", value: "8" },
                { label: "Salas reservadas em 2026", value: "5" },
                { label: "Alunos atendidos", value: "147" },
                { label: "Disciplinas vinculadas", value: "4" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-[#E2E8F0] last:border-0">
                  <p className="text-sm text-[#667085]">{label}</p>
                  <p className="text-sm font-bold text-[#172033]">{value}</p>
                </div>
              ))}
            </div>
            <Link href="/professor/historico">
              <Button variant="ghost" size="sm" className="w-full mt-3 text-xs border border-[#E2E8F0]">
                <BookOpen className="w-3.5 h-3.5" aria-hidden />
                Ver histórico completo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
