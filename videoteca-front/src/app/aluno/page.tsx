import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FILMS, EVENTS, LOANS } from "@/lib/mock-data";
import { BookOpen, BookMarked, Star, Calendar, Bell, Clock, Film, ChevronRight, MapPin, Users } from "lucide-react";

const STUDENT = { name: "Ana Clara Mendes", course: "Cinema e Audiovisual", id: "2022001847" };

export default function StudentDashboard() {
  const activeLoans = LOANS.filter(l => l.status === "borrowed" || l.status === "late").slice(0, 2);
  const recommendations = FILMS.filter(f => f.status === "available").slice(4, 8);
  const upcomingEvents = EVENTS.slice(0, 2);

  return (
    <AppShell role="aluno" title="Dashboard" showSearch user={STUDENT}>
      {/* Greeting */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#172033]">Olá, {STUDENT.name.split(" ")[0]}! 👋</h2>
        <p className="text-[#667085] text-sm mt-1">Matrícula {STUDENT.id} · {STUDENT.course}</p>
      </div>

      {/* Stats — Bento grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard label="Empréstimos Ativos" value={2} icon={BookOpen} accent="blue" trend="+1 esta semana" trendUp />
        <StatCard label="Reservas Pendentes" value={1} icon={BookMarked} accent="yellow" />
        <StatCard label="Favoritos" value={8} icon={Star} accent="purple" />
        <StatCard label="Notificações" value={3} icon={Bell} accent="red" />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Active Loans */}
        <div className="lg:col-span-2 bg-white rounded-[18px] border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#172033]">Meus Empréstimos</h3>
            <Link href="/aluno/emprestimos" className="text-sm text-[#0066B3] hover:underline flex items-center gap-1">
              Ver todos <ChevronRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          </div>
          <div className="space-y-3">
            {activeLoans.map(loan => (
              <div key={loan.id} className="flex items-center gap-4 p-4 rounded-[14px] bg-[#F5F7FA] border border-[#E2E8F0]">
                <div className="w-10 h-14 bg-gradient-to-b from-[#0066B3] to-[#003A70] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <Film className="w-5 h-5 text-white/40" aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#172033] text-sm truncate">{loan.film}</p>
                  <div className="flex items-center gap-3 mt-1 text-xs text-[#667085]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden />
                      Devolução: {new Date(loan.due).toLocaleDateString("pt-BR")}
                    </span>
                    <span>{loan.copy}</span>
                  </div>
                </div>
                <Badge status={loan.status} />
              </div>
            ))}
            {activeLoans.length === 0 && (
              <div className="text-center py-8 text-[#667085]">
                <BookOpen className="w-10 h-10 mx-auto mb-2 opacity-30" aria-hidden />
                <p className="text-sm">Nenhum empréstimo ativo</p>
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#172033]">Eventos da Semana</h3>
            <Link href="/aluno/eventos" className="text-sm text-[#0066B3] hover:underline">
              <ChevronRight className="w-4 h-4" aria-label="Ver todos os eventos" />
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingEvents.map(event => (
              <div key={event.id} className="p-3 rounded-[12px] bg-gradient-to-br from-[#003A70] to-[#0066B3] text-white">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-semibold bg-white/15 px-2 py-0.5 rounded-full">{event.type}</span>
                  <span className="text-xs text-white/60">{new Date(event.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}</span>
                </div>
                <p className="text-xs font-semibold leading-snug mb-2">{event.title}</p>
                <div className="flex items-center gap-1 text-[10px] text-white/60">
                  <MapPin className="w-3 h-3" aria-hidden />
                  {event.location}
                </div>
                <div className="flex items-center gap-1 text-[10px] text-white/60 mt-0.5">
                  <Users className="w-3 h-3" aria-hidden />
                  {event.slots - event.enrolled} vagas
                </div>
                <Button size="sm" variant="secondary" className="w-full mt-2 text-[10px] h-7 bg-white/20 text-white border-white/20 hover:bg-white/30">
                  Inscrever-se
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-[18px] border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#172033]">Notificações</h3>
            <span className="w-5 h-5 bg-[#E7472E] text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
          </div>
          <div className="space-y-2">
            {[
              { msg: "Devolução do filme \"Central do Brasil\" em 2 dias", type: "warning", time: "Hoje" },
              { msg: "Sua reserva de \"O Menino e o Mundo\" foi confirmada", type: "success", time: "Ontem" },
              { msg: "Evento \"Cineclube Unifor\" começa em 3 dias — você está inscrito", type: "info", time: "2 dias atrás" },
            ].map(({ msg, type, time }) => (
              <div key={msg} className={`flex gap-3 p-3 rounded-[10px] text-xs ${
                type === "warning" ? "bg-amber-50 border border-amber-200" :
                type === "success" ? "bg-emerald-50 border border-emerald-200" :
                "bg-sky-50 border border-sky-200"
              }`}>
                <div className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${
                  type === "warning" ? "bg-amber-500" :
                  type === "success" ? "bg-emerald-500" : "bg-sky-500"
                }`} aria-hidden />
                <div>
                  <p className="text-[#172033] leading-relaxed">{msg}</p>
                  <p className="text-[#667085] mt-0.5">{time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="lg:col-span-2 bg-white rounded-[18px] border border-[#E2E8F0] p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#172033]">Recomendações para Você</h3>
            <Link href="/aluno/catalogo" className="text-sm text-[#0066B3] hover:underline flex items-center gap-1">
              Ver catálogo <ChevronRight className="w-3.5 h-3.5" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {recommendations.map(film => (
              <div key={film.id} className="film-card rounded-[12px] overflow-hidden bg-[#F5F7FA] border border-[#E2E8F0]">
                <div className="relative bg-gradient-to-br from-[#003A70] to-[#0066B3]" style={{ aspectRatio: "2/3" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 p-2">
                    <Star className="w-8 h-8 text-white/20" aria-hidden />
                    <p className="text-[9px] font-semibold text-white/70 text-center leading-tight">{film.title}</p>
                  </div>
                  <div className="film-actions absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 p-2">
                    <Button size="sm" className="text-[10px] h-7 w-full">Reservar</Button>
                    <button className="text-[10px] text-white/80 hover:text-white">Ver detalhes</button>
                  </div>
                </div>
                <div className="p-2">
                  <p className="text-[10px] font-semibold text-[#172033] leading-tight truncate">{film.title}</p>
                  <p className="text-[9px] text-[#667085]">{film.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
