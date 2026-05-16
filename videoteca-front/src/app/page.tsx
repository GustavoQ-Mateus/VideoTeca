import Link from "next/link";
import { Search, Film, BookOpen, Calendar, Users, ChevronRight, Play, Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FILMS, EVENTS } from "@/lib/mock-data";

const NAV_LINKS = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Eventos", href: "/eventos" },
  { label: "Sobre", href: "/sobre" },
] as const;

const FOOTER_LINKS = [
  { label: "Catálogo", href: "/catalogo" },
  { label: "Eventos", href: "/eventos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "mailto:videoteca@unifor.br" },
];

const SERVICES = [
  { icon: Film, label: "Acervo Audiovisual", desc: "Mais de 1.200 títulos em DVD, Blu-ray e digital" },
  { icon: BookOpen, label: "Empréstimos", desc: "Retire filmes para estudo e pesquisa acadêmica" },
  { icon: Calendar, label: "Eventos & Cineclubes", desc: "Sessões comentadas, debates e mostras culturais" },
  { icon: Users, label: "Salas de Exibição", desc: "5 salas equipadas para atividades acadêmicas" },
];

export default function LandingPage() {
  const featuredFilms = FILMS.filter(f => f.status === "available").slice(0, 4);
  const upcomingEvents = EVENTS.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-[#0066B3] rounded-[10px] flex items-center justify-center">
              <Film className="w-4 h-4 text-white" aria-hidden />
            </div>
            <div>
              <span className="text-sm font-bold text-[#003A70]">Videoteca</span>
              <span className="text-sm font-bold text-[#0066B3] ml-1">Unifor</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-1 flex-1" aria-label="Navegação principal">
            {NAV_LINKS.map(({ label, href }) => (
              <Link key={href} href={href}
                className="px-3 py-2 text-sm text-[#667085] hover:text-[#172033] rounded-[8px] hover:bg-[#F5F7FA] transition-colors font-medium">
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="ghost" size="sm">Entrar</Button>
            </Link>
            <Link href="/login">
              <Button size="sm">Acessar sistema</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003A70] via-[#0066B3] to-[#004D87] py-20 md:py-28">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" aria-hidden />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" aria-hidden />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-[#E7472E]/20 rounded-full -translate-y-1/2" aria-hidden />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#2EAD68] rounded-full" aria-hidden />
              <span className="text-sm text-white/80 font-medium">1.248 títulos disponíveis no acervo</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Cinema, cultura e<br />
              <span className="text-[#F6C343]">conhecimento</span> na Unifor
            </h1>
            <p className="text-lg text-white/75 mb-8 leading-relaxed max-w-lg">
              A Videoteca Unifor conecta alunos, professores e pesquisadores ao maior acervo audiovisual acadêmico do Ceará.
            </p>
            <div className="bg-white rounded-[14px] p-1.5 flex gap-2 max-w-lg shadow-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085]" aria-hidden />
                <input
                  type="search"
                  placeholder="Buscar filmes, documentários, gêneros..."
                  className="w-full h-10 pl-9 pr-3 text-sm rounded-[10px] border-0 outline-none text-[#172033] placeholder:text-[#667085]"
                  aria-label="Buscar no acervo"
                />
              </div>
              <Button size="sm">
                <span>Buscar</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-[#F5F7FA]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 id="services-heading" className="text-2xl font-bold text-[#172033]">Serviços da Videoteca</h2>
            <p className="text-[#667085] mt-2">Tudo que você precisa para sua pesquisa e atividade acadêmica</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-white rounded-[18px] border border-[#E2E8F0] p-6 hover:border-[#0066B3] hover:shadow-[0_4px_16px_rgba(0,102,179,0.08)] transition-all duration-200 group">
                <div className="w-12 h-12 bg-[#E8F2FC] rounded-[14px] flex items-center justify-center mb-4 group-hover:bg-[#0066B3] transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#0066B3] group-hover:text-white transition-colors duration-200" aria-hidden />
                </div>
                <h3 className="font-semibold text-[#172033] mb-1.5">{label}</h3>
                <p className="text-sm text-[#667085] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Films */}
      <section className="py-16" aria-labelledby="films-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 id="films-heading" className="text-2xl font-bold text-[#172033]">Destaques do Acervo</h2>
              <p className="text-[#667085] text-sm mt-1">Títulos disponíveis para empréstimo</p>
            </div>
            <Link href="/catalogo" className="flex items-center gap-1.5 text-[#0066B3] text-sm font-medium hover:underline">
              Ver catálogo completo <ChevronRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredFilms.map(film => (
            <Link key={film.id} href={`/catalogo/${film.id}`} className="film-card bg-[#F5F7FA] rounded-[18px] overflow-hidden group border border-[#E2E8F0] block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066B3]">
                <div className="relative bg-gradient-to-br from-[#003A70] to-[#0066B3]" style={{ aspectRatio: "2/3" }}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                    <Star className="w-10 h-10 text-white/20" aria-hidden />
                    <p className="text-xs font-semibold text-white/80 text-center leading-tight">{film.title}</p>
                  </div>
                  <div className="film-actions absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-white ml-0.5" aria-hidden />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="font-semibold text-[#172033] text-sm leading-tight">{film.title}</p>
                  <p className="text-xs text-[#667085] mt-0.5">{film.director} · {film.year}</p>
                  <span className="inline-block mt-2 text-[10px] font-semibold bg-[#E8F2FC] text-[#0066B3] px-2 py-0.5 rounded-full">{film.genre}</span>
                </div>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-16 bg-[#003A70]" aria-labelledby="events-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 id="events-heading" className="text-2xl font-bold text-white">Próximos Eventos</h2>
              <p className="text-white/60 text-sm mt-1">Cineclubes, sessões comentadas e mostras culturais</p>
            </div>
            <Link href="/eventos" className="flex items-center gap-1.5 text-[#F6C343] text-sm font-medium hover:underline">
              Ver todos <ChevronRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingEvents.map(event => (
              <Link key={event.id} href={`/eventos/${event.id}`} className="block bg-white/10 backdrop-blur-sm border border-white/15 rounded-[18px] p-5 hover:bg-white/15 transition-colors cursor-pointer">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                    event.type === "Cineclube" ? "bg-[#F6C343]/20 text-[#F6C343]" :
                    event.type === "Mostra" ? "bg-violet-400/20 text-violet-300" :
                    event.type === "Debate" ? "bg-[#2EAD68]/20 text-[#2EAD68]" :
                    "bg-white/10 text-white/70"
                  }`}>{event.type}</span>
                  <div className="text-right">
                    <p className="text-xs text-white/50">{new Date(event.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}</p>
                    <p className="text-xs font-medium text-white/80">{event.time}</p>
                  </div>
                </div>
                <h3 className="font-semibold text-white leading-snug mb-3 text-sm">{event.title}</h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-white/60 text-xs">
                    <Film className="w-3.5 h-3.5" aria-hidden />
                    <span>{event.film}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/60 text-xs">
                    <MapPin className="w-3.5 h-3.5" aria-hidden />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/60 text-xs">
                    <Users className="w-3.5 h-3.5" aria-hidden />
                    <span>{event.slots - event.enrolled} vagas restantes</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="py-16 bg-[#F5F7FA]" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[24px] border border-[#E2E8F0] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 id="about-heading" className="text-2xl md:text-3xl font-bold text-[#172033] mb-3">
                Sobre a Videoteca Unifor
              </h2>
              <p className="text-[#667085] leading-relaxed mb-6 max-w-lg">
                Vinculada à Biblioteca Central da Universidade de Fortaleza, a Videoteca mantém um acervo com mais de 1.200 títulos audiovisuais e apoia atividades de ensino, pesquisa e extensão.
              </p>
              <div className="flex flex-wrap gap-6 mb-6">
                {[["1.248", "Títulos"], ["5", "Salas"], ["12+", "Eventos/mês"], ["3.000+", "Atendimentos/ano"]].map(([val, label]) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-[#0066B3]">{val}</p>
                    <p className="text-xs text-[#667085]">{label}</p>
                  </div>
                ))}
              </div>
              <Link href="/login">
                <Button size="lg" className="gap-2">
                  Acessar o sistema <ArrowRight className="w-4 h-4" aria-hidden />
                </Button>
              </Link>
            </div>
            <div className="w-56 h-56 rounded-[24px] bg-gradient-to-br from-[#003A70] to-[#0066B3] flex items-center justify-center flex-shrink-0">
              <Film className="w-20 h-20 text-white/20" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#172033] py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-[#0066B3] rounded-[8px] flex items-center justify-center">
                  <Film className="w-3.5 h-3.5 text-white" aria-hidden />
                </div>
                <span className="text-sm font-bold text-white">Videoteca Unifor</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">Biblioteca Central · Universidade de Fortaleza<br />Av. Washington Soares, 1321 — Fortaleza/CE</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Links Rápidos</p>
              {FOOTER_LINKS.map(({ label, href }) => (
                <Link key={label} href={href} className="block text-sm text-white/60 hover:text-white py-1 transition-colors">{label}</Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Horário de Funcionamento</p>
              <p className="text-sm text-white/60">Segunda a Sexta: 7h30 – 21h30</p>
              <p className="text-sm text-white/60">Sábado: 8h00 – 12h00</p>
              <p className="text-sm text-white/40 mt-2">videoteca@unifor.br</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30">© 2026 Universidade de Fortaleza. Todos os direitos reservados.</p>
            <p className="text-xs text-white/30">Sistema Videoteca Unifor v1.0</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
