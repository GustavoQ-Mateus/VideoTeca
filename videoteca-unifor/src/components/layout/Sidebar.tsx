"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard, Film, BookOpen, Calendar, Star, Bell,
  User, Settings, LogOut, ChevronRight, BookMarked, Users,
  Building2, ClipboardList, BarChart2, Package
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  badge?: number;
}

interface SidebarProps {
  role: "aluno" | "professor" | "funcionario";
}

const NAV_ITEMS: Record<string, NavItem[]> = {
  aluno: [
    { label: "Dashboard", href: "/aluno", icon: LayoutDashboard },
    { label: "Catálogo", href: "/aluno/catalogo", icon: Film },
    { label: "Minhas Reservas", href: "/aluno/reservas", icon: BookMarked, badge: 2 },
    { label: "Empréstimos", href: "/aluno/emprestimos", icon: BookOpen },
    { label: "Eventos", href: "/aluno/eventos", icon: Calendar },
    { label: "Favoritos", href: "/aluno/favoritos", icon: Star },
    { label: "Notificações", href: "/aluno/notificacoes", icon: Bell, badge: 3 },
    { label: "Perfil", href: "/aluno/perfil", icon: User },
  ],
  professor: [
    { label: "Dashboard", href: "/professor", icon: LayoutDashboard },
    { label: "Solicitar Filme", href: "/professor/solicitar-filme", icon: Film },
    { label: "Solicitar Sala", href: "/professor/solicitar-sala", icon: Building2 },
    { label: "Minhas Solicitações", href: "/professor/solicitacoes", icon: ClipboardList, badge: 1 },
    { label: "Histórico", href: "/professor/historico", icon: BookOpen },
    { label: "Perfil", href: "/professor/perfil", icon: User },
  ],
  funcionario: [
    { label: "Dashboard", href: "/funcionario", icon: LayoutDashboard },
    { label: "Acervo", href: "/funcionario/acervo", icon: Package },
    { label: "Empréstimos", href: "/funcionario/emprestimos", icon: BookOpen },
    { label: "Devoluções", href: "/funcionario/devolucoes", icon: BookMarked },
    { label: "Reservas", href: "/funcionario/reservas", icon: Film, badge: 5 },
    { label: "Usuários", href: "/funcionario/usuarios", icon: Users },
    { label: "Salas", href: "/funcionario/salas", icon: Building2 },
    { label: "Eventos", href: "/funcionario/eventos", icon: Calendar },
    { label: "Relatórios", href: "/funcionario/relatorios", icon: BarChart2 },
    { label: "Configurações", href: "/funcionario/configuracoes", icon: Settings },
  ],
};

const ROLE_LABELS = { aluno: "Aluno", professor: "Professor", funcionario: "Funcionário" };

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const items = NAV_ITEMS[role];

  return (
    <aside className="w-64 min-h-screen bg-[#003A70] flex flex-col text-white flex-shrink-0">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/15 rounded-[12px] flex items-center justify-center">
            <Film className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-bold text-white leading-none">Videoteca</p>
            <p className="text-xs text-white/60 mt-0.5">Unifor</p>
          </div>
        </div>
      </div>

      {/* Role badge */}
      <div className="px-6 py-3">
        <span className="inline-block bg-white/10 text-white/80 text-xs font-medium px-2.5 py-1 rounded-full">
          {ROLE_LABELS[role]}
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 pb-4 overflow-y-auto" aria-label="Menu principal">
        <ul className="space-y-0.5">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm font-medium transition-colors duration-150",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <item.icon className="w-4 h-4 flex-shrink-0" aria-hidden />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && item.badge > 0 ? (
                    <span className="w-5 h-5 bg-[#E7472E] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {item.badge}
                    </span>
                  ) : isActive ? (
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" aria-hidden />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-6 border-t border-white/10 pt-4">
        <Link
          href="/login"
          className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] text-sm text-white/60 hover:bg-white/10 hover:text-white transition-colors duration-150"
        >
          <LogOut className="w-4 h-4" aria-hidden />
          <span>Sair</span>
        </Link>
      </div>
    </aside>
  );
}
