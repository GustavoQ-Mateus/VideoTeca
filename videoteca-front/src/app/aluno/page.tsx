import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FILMS, EVENTS, LOANS } from "@/lib/mock-data";
import {
  BookOpen, BookMarked, Star, Calendar, Bell, Clock,
  Film, ChevronRight, MapPin, Users, TrendingUp, ArrowRight,
} from "lucide-react";

const STUDENT = { name: "Ana Clara Mendes", course: "Cinema e Audiovisual", id: "2022001847" };

const NOTIFICATIONS = [
  { msg: "Devolução de \"Central do Brasil\" em 2 dias", type: "warning" as const, time: "Hoje" },
  { msg: "Reserva de \"O Menino e o Mundo\" confirmada", type: "success" as const, time: "Ontem" },
  { msg: "\"Cineclube Unifor\" começa em 3 dias — você está inscrito", type: "info" as const, time: "2 dias atrás" },
];

const NOTIF_DOT: Record<string, string> = {
  warning: "bg-[#F6C343]",
  success: "bg-[#2EAD68]",
  info:    "bg-[#0066B3]",
};

export default function StudentDashboard() {
  const activeLoans     = LOANS.filter(l => l.status === "borrowed" || l.status === "late").slice(0, 3);
  const recommendations = FILMS.filter(f => f.status === "available").slice(4, 7);
  const upcomingEvents  = EVENTS.slice(0, 3);

  return (
    <AppShell role="aluno" title="Dashboard" showSearch user={STUDENT}>

      {/* ── Header ── */}
      <div className="mb-8 motion-up">
        <p className="section-label mb-1">Bem-vindo de volta</p>
        <h2 className="text-2xl font-bold text-[#172033]">{STUDENT.name.split(" ").slice(0, 2).join(" ")}</h2>
        <p className="text-[#667085] text-sm mt-0.5">Matrícula {STUDENT.id} · {STUDENT.course}</p>
      </div>

      {/* ── Split layout ── */}
      <div className="split-layout -mx-4 sm:-mx-6 lg:mx-0 min-h-[calc(100vh-220px)]">

        {/* ── Main column ── */}
        <div className="split-main px-4 sm:px-6 lg:px-0 lg:pr-6 pb-6 space-y-8">

          {/* Inline stats */}
          <div className="flex flex-wrap gap-6 motion-up stagger-1">
            {[
              { icon: BookOpen,   label: "Empréstimos ativos", value: activeLoans.length, accent: "text-[#0066B3]" },
              { icon: BookMarked, label: "Reservas",           value: 1,                  accent: "text-[#F6C343]" },
              { icon: Star,       label: "Favoritos",          value: 8,                  accent: "text-violet-500" },
              { icon: Bell,       label: "Notificações",       value: NOTIFICATIONS.length, accent: "text-[#E7472E]" },
            ].map(({ icon: Icon, label, value, accent }) => (
              <div key={label} className="flex items-center gap-2.5">
                <Icon className={`w-4 h-4 ${accent} flex-shrink-0`} aria-hidden />
                <div>
                  <p className="text-xs text-[#667085]">{label}</p>
                  <p className={`text-lg font-bold leading-none mt-0.5 ${accent}`}>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Empréstimos ativos ── */}
          <section aria-labelledby="loans-heading" className="motion-up stagger-2">
            <div className="flex items-center justify-between mb-3">
              <h3 id="loans-heading" className="font-semibold text-[#172033]">Empréstimos Ativos</h3>
              <Link href="/aluno/emprestimos" className="text-xs text-[#0066B3] hover:underline flex items-center gap-1">
                Ver histórico <ChevronRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </div>

            <div className="bg-white rounded-[14px] border border-[#E2E8F0] overflow-hidden">
              {activeLoans.map(loan => (
                <div key={loan.id} className="list-row">
                  <div className="w-8 h-11 bg-gradient-to-b from-[#0066B3] to-[#003A70] rounded-[6px] flex items-center justify-center flex-shrink-0">
                    <Film className="w-3.5 h-3.5 text-white/40" aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#172033] text-sm truncate">{loan.film}</p>
                    <p className="text-xs text-[#667085] mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden />
                      Devolução: {new Date(loan.due).toLocaleDateString("pt-BR")}
                      <span className="text-[#E2E8F0] mx-1">·</span>
                      {loan.copy}
                    </p>
                  </div>
                  <Badge status={loan.status} />
                </div>
              ))}
              {activeLoans.length === 0 && (
                <div className="py-10 text-center text-[#667085]">
                  <BookOpen className="w-8 h-8 mx-auto mb-2 opacity-25" aria-hidden />
                  <p className="text-sm">Nenhum empréstimo ativo</p>
                </div>
              )}
            </div>
          </section>

          {/* ── Recomendações ── */}
          <section aria-labelledby="rec-heading" className="motion-up stagger-3">
            <div className="flex items-center justify-between mb-3">
              <h3 id="rec-heading" className="font-semibold text-[#172033]">Recomendados para Você</h3>
              <Link href="/aluno/catalogo" className="text-xs text-[#0066B3] hover:underline flex items-center gap-1">
                Explorar catálogo <ChevronRight className="w-3.5 h-3.5" aria-hidden />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {recommendations.map((film, i) => (
                <div
                  key={film.id}
                  className={`film-card group rounded-[12px] overflow-hidden bg-white border border-[#E2E8F0] motion-up stagger-${i + 4}`}
                >
                  <Link
                    href={`/aluno/catalogo/${film.id}`}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]"
                    aria-label={`Ver ${film.title}`}
                  >
                    <div
                      className="relative bg-gradient-to-br from-[#003A70] to-[#0066B3] film-cover"
                      style={{ aspectRatio: "2/3" }}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60">
                        <p className="text-[9px] text-white/70 font-medium line-clamp-1">{film.title}</p>
                      </div>
                      <div className="film-actions absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-2 p-3">
                        <span className="text-[10px] font-medium text-white bg-[#0066B3] px-3 py-1 rounded-[6px]">Ver detalhes</span>
                      </div>
                    </div>
                    <div className="p-2">
                      <p className="text-[10px] font-semibold text-[#172033] leading-snug line-clamp-1">{film.title}</p>
                      <p className="text-[9px] text-[#667085]">{film.director}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ── Right context panel ── */}
        <aside className="split-panel px-4 sm:px-6 py-6 space-y-8 motion-right" aria-label="Painel de contexto">

          {/* Próxima devolução */}
          {activeLoans.find(l => l.status !== "returned") && (
            <section aria-labelledby="next-due-heading">
              <p className="section-label mb-3" id="next-due-heading">Próxima devolução</p>
              <div className="border-l-2 border-[#F6C343] pl-3">
                <p className="font-semibold text-[#172033] text-sm">
                  {activeLoans[0]?.film}
                </p>
                <p className="text-xs text-[#667085] mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" aria-hidden />
                  {new Date(activeLoans[0]?.due).toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" })}
                </p>
                <Link href="/aluno/emprestimos">
                  <Button size="sm" variant="outline" className="mt-3 text-xs h-8 gap-1">
                    Renovar <ArrowRight className="w-3 h-3" aria-hidden />
                  </Button>
                </Link>
              </div>
            </section>
          )}

          {/* Eventos */}
          <section aria-labelledby="events-aside-heading">
            <div className="flex items-center justify-between mb-3">
              <p className="section-label" id="events-aside-heading">Eventos da semana</p>
              <Link href="/aluno/eventos" className="text-xs text-[#0066B3] hover:underline">Ver todos</Link>
            </div>
            <div className="space-y-0 divide-y divide-[#E2E8F0]">
              {upcomingEvents.map(event => (
                <Link
                  key={event.id}
                  href={`/aluno/eventos/${event.id}`}
                  className="flex gap-3 py-3.5 group hover:bg-[#F5F7FA] -mx-2 px-2 rounded-[8px] transition-colors"
                >
                  <div className="flex-shrink-0 w-9 text-center">
                    <p className="text-sm font-bold text-[#172033] leading-none">
                      {new Date(event.date).getDate()}
                    </p>
                    <p className="text-[9px] text-[#667085] uppercase mt-0.5">
                      {new Date(event.date).toLocaleDateString("pt-BR", { month: "short" })}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-[#172033] leading-snug group-hover:text-[#0066B3] transition-colors line-clamp-2">
                      {event.title}
                    </p>
                    <p className="text-[10px] text-[#667085] mt-1 flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5" aria-hidden />
                      {event.location}
                    </p>
                    <p className="text-[10px] text-[#667085] mt-0.5 flex items-center gap-1">
                      <Users className="w-2.5 h-2.5" aria-hidden />
                      {event.slots - event.enrolled} vagas
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Notificações */}
          <section aria-labelledby="notif-heading">
            <div className="flex items-center justify-between mb-3">
              <p className="section-label" id="notif-heading">Notificações</p>
              <span className="text-[10px] font-bold text-white bg-[#E7472E] rounded-full w-4 h-4 flex items-center justify-center">
                {NOTIFICATIONS.length}
              </span>
            </div>
            <ul className="space-y-0 divide-y divide-[#E2E8F0]">
              {NOTIFICATIONS.map(({ msg, type, time }) => (
                <li key={msg} className="flex gap-2.5 py-3">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${NOTIF_DOT[type]}`} aria-hidden />
                  <div>
                    <p className="text-xs text-[#172033] leading-relaxed">{msg}</p>
                    <p className="text-[10px] text-[#667085] mt-0.5">{time}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/aluno/notificacoes" className="text-xs text-[#0066B3] hover:underline mt-3 inline-block">
              Ver todas
            </Link>
          </section>

          {/* Quick links */}
          <section aria-label="Ações rápidas">
            <p className="section-label mb-3">Ações rápidas</p>
            <div className="space-y-1">
              {[
                { icon: BookMarked, label: "Minhas Reservas",   href: "/aluno/reservas" },
                { icon: Star,       label: "Favoritos",         href: "/aluno/favoritos" },
                { icon: Calendar,   label: "Meus Eventos",      href: "/aluno/eventos" },
                { icon: TrendingUp, label: "Explorar Catálogo", href: "/aluno/catalogo" },
              ].map(({ icon: Icon, label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2.5 px-2 py-2 rounded-[8px] text-sm text-[#667085] hover:text-[#172033] hover:bg-[#F5F7FA] transition-colors group"
                >
                  <Icon className="w-4 h-4 group-hover:text-[#0066B3] transition-colors" aria-hidden />
                  {label}
                  <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
                </Link>
              ))}
            </div>
          </section>

        </aside>
      </div>

    </AppShell>
  );
}
