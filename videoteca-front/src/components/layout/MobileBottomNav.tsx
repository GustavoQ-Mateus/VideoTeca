"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Film, BookMarked, User, Package, BookOpen, Building2, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const MOBILE: Record<"aluno" | "professor" | "funcionario", { href: string; label: string; icon: React.ElementType }[]> = {
  aluno: [
    { href: "/aluno", label: "Início", icon: LayoutDashboard },
    { href: "/aluno/catalogo", label: "Catálogo", icon: Film },
    { href: "/aluno/reservas", label: "Reservas", icon: BookMarked },
    { href: "/aluno/perfil", label: "Perfil", icon: User },
  ],
  professor: [
    { href: "/professor", label: "Início", icon: LayoutDashboard },
    { href: "/professor/solicitar-filme", label: "Filme", icon: Film },
    { href: "/professor/solicitar-sala", label: "Sala", icon: Building2 },
    { href: "/professor/perfil", label: "Perfil", icon: User },
  ],
  funcionario: [
    { href: "/funcionario", label: "Início", icon: LayoutDashboard },
    { href: "/funcionario/acervo", label: "Acervo", icon: Package },
    { href: "/funcionario/emprestimos", label: "Emprést.", icon: BookOpen },
    { href: "/funcionario/configuracoes", label: "Ajustes", icon: Settings },
  ],
};

export function MobileBottomNav({ role }: { role: "aluno" | "professor" | "funcionario" }) {
  const pathname = usePathname();
  const items = MOBILE[role];

  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-[#E2E8F0] px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] flex justify-around shadow-[0_-4px_20px_rgba(23,32,51,0.06)]"
      aria-label="Navegação principal mobile"
    >
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-0.5 py-1 px-2 rounded-[12px] min-w-0 flex-1 max-w-[5.5rem] transition-colors duration-200",
              active ? "text-[#0066B3]" : "text-[#667085] hover:text-[#172033]"
            )}
            aria-current={active ? "page" : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" aria-hidden />
            <span className="text-[10px] font-medium truncate w-full text-center">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
