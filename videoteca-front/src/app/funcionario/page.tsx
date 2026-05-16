import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LOANS, EVENTS, ADMIN_STATS } from "@/lib/mock-data";
import {
  Package, BookOpen, BookMarked, AlertTriangle,
  Building2, Calendar, Users, Star, Clock, Film,
  CheckCircle, XCircle, ChevronRight
} from "lucide-react";
import Link from "next/link";

const STAFF = { name: "Carla Nogueira", course: "Funcionária" };

export default function AdminDashboard() {
  const recentLoans = LOANS.slice(0, 5);

  return (
    <AppShell role="funcionario" title="Dashboard Administrativo" user={STAFF}>
      {/* Alert banner */}
      <div className="bg-[#E7472E]/10 border border-[#E7472E]/30 rounded-[14px] p-4 mb-6 flex items-center gap-3">
        <AlertTriangle className="w-5 h-5 text-[#E7472E] flex-shrink-0" aria-hidden />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[#E7472E]">Atenção: {ADMIN_STATS.lateItems} itens com devolução atrasada</p>
          <p className="text-xs text-[#E7472E]/70 mt-0.5">Verifique os empréstimos vencidos e entre em contato com os usuários.</p>
        </div>
        <Link href="/funcionario/emprestimos">
          <Button size="sm" variant="danger" className="flex-shrink-0 text-xs">Ver atrasos</Button>
        </Link>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Total do Acervo" value={ADMIN_STATS.totalItems.toLocaleString()} icon={Package} accent="blue" />
        <StatCard label="Empréstimos Ativos" value={ADMIN_STATS.activeLoans} icon={BookOpen} accent="green" />
        <StatCard label="Reservas Pendentes" value={ADMIN_STATS.pendingReservations} icon={BookMarked} accent="yellow" />
        <StatCard label="Itens Atrasados" value={ADMIN_STATS.lateItems} icon={AlertTriangle} accent="red" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Salas Ocupadas Hoje" value={`${ADMIN_STATS.occupiedRooms}/5`} icon={Building2} accent="purple" />
        <StatCard label="Eventos Próximos" value={ADMIN_STATS.upcomingEvents} icon={Calendar} accent="blue" />
        <StatCard label="Usuários c/ Pendência" value={ADMIN_STATS.usersWithPending} icon={Users} accent="yellow" />
        <StatCard label="Título Mais Pedido" value={ADMIN_STATS.mostRequested} icon={Star} accent="green" />
      </div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Loans table */}
        <div className="lg:col-span-2 bg-white rounded-[18px] border border-[#E2E8F0] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
            <h3 className="font-semibold text-[#172033]">Movimentações Recentes</h3>
            <Link href="/funcionario/emprestimos" className="text-sm text-[#0066B3] hover:underline flex items-center gap-1">
              Ver todos <ChevronRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full" aria-label="Empréstimos recentes">
              <thead>
                <tr className="bg-[#F5F7FA]">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Filme</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Usuário</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Devolução</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#667085] uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3" aria-label="Ações" />
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {recentLoans.map(loan => (
                  <tr key={loan.id} className="hover:bg-[#F5F7FA] transition-colors">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-10 bg-gradient-to-b from-[#0066B3] to-[#003A70] rounded-[6px] flex items-center justify-center flex-shrink-0">
                          <Film className="w-4 h-4 text-white/40" aria-hidden />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#172033] whitespace-nowrap">{loan.film}</p>
                          <p className="text-xs text-[#667085]">{loan.copy}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-sm text-[#172033] whitespace-nowrap">{loan.student}</p>
                      <p className="text-xs text-[#667085]">{loan.course}</p>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 text-sm text-[#667085]">
                        <Clock className="w-3.5 h-3.5" aria-hidden />
                        <span className="whitespace-nowrap">{new Date(loan.due).toLocaleDateString("pt-BR")}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <Badge status={loan.status} />
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        {loan.status === "borrowed" || loan.status === "late" ? (
                          <Button size="sm" variant="secondary" className="text-xs h-7 px-2 gap-1">
                            <CheckCircle className="w-3 h-3" aria-hidden />
                            Devolver
                          </Button>
                        ) : (
                          <span className="text-xs text-[#667085]">—</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar: quick actions + agenda */}
        <div className="flex flex-col gap-4">
          {/* Quick actions */}
          <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-6">
            <h3 className="font-semibold text-[#172033] mb-4">Ações Rápidas</h3>
            <div className="space-y-2">
              {[
                { label: "Registrar Empréstimo", href: "/funcionario/emprestimos", color: "bg-[#0066B3]" },
                { label: "Registrar Devolução", href: "/funcionario/devolucoes", color: "bg-[#2EAD68]" },
                { label: "Confirmar Reserva", href: "/funcionario/reservas", color: "bg-[#F6C343]" },
                { label: "Cadastrar Material", href: "/funcionario/acervo", color: "bg-[#003A70]" },
              ].map(({ label, href, color }) => (
                <Link key={label} href={href} className={`${color} flex items-center justify-between px-4 py-3 rounded-[10px] text-white text-sm font-medium hover:opacity-90 transition-opacity`}>
                  {label}
                  <ChevronRight className="w-4 h-4 opacity-70" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          {/* Today's agenda */}
          <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-6">
            <h3 className="font-semibold text-[#172033] mb-4">Agenda do Dia</h3>
            <p className="text-xs text-[#667085] mb-3">Segunda, 11 de maio de 2026</p>
            <div className="space-y-2">
              {EVENTS.slice(0, 3).map(event => (
                <div key={event.id} className="flex gap-3 p-2.5 rounded-[10px] bg-[#F5F7FA] border border-[#E2E8F0]">
                  <div className="w-1 rounded-full bg-[#0066B3] flex-shrink-0" aria-hidden />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[#172033] leading-snug truncate">{event.title}</p>
                    <p className="text-[10px] text-[#667085] mt-0.5">{event.time} · {event.location}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] text-[#667085]">{event.enrolled}/{event.slots} inscritos</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teacher requests */}
          <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#172033]">Solicitações de Professores</h3>
              <span className="w-5 h-5 bg-[#F6C343] text-[#172033] text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
            </div>
            <div className="space-y-2">
              {[
                { prof: "Prof. Carlos Melo", item: "Sala de Exibição 1 — 15/05", status: "analysis" },
                { prof: "Profa. Fernanda Lima", item: "Central do Brasil — Jornalismo", status: "analysis" },
                { prof: "Prof. André Costa", item: "Videoteca B — 18/05", status: "approved" },
              ].map(({ prof, item, status }) => (
                <div key={prof} className="flex items-center gap-3 py-2 border-b border-[#E2E8F0] last:border-0">
                  <div className="w-7 h-7 rounded-full bg-[#E8F2FC] flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-[#0066B3]">
                    {prof.split(" ").pop()?.[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-[#172033] truncate">{prof}</p>
                    <p className="text-[10px] text-[#667085] truncate">{item}</p>
                  </div>
                  <Badge status={status} />
                </div>
              ))}
            </div>
            <Link href="/funcionario/solicitacoes">
              <Button variant="ghost" size="sm" className="w-full mt-3 text-xs border border-[#E2E8F0]">
                Ver solicitações
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
