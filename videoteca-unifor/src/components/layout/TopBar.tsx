"use client";
import { Bell, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/Input";

interface TopBarProps {
  title: string;
  user?: { name: string; course?: string; avatar?: string };
  showSearch?: boolean;
}

export function TopBar({ title, user, showSearch }: TopBarProps) {
  const initials = user?.name.split(" ").map(n => n[0]).slice(0, 2).join("") ?? "U";
  return (
    <header className="h-16 bg-white border-b border-[#E2E8F0] flex items-center px-6 gap-4 flex-shrink-0">
      <h1 className="text-lg font-semibold text-[#172033] mr-auto">{title}</h1>
      {showSearch && (
        <div className="w-72 hidden md:block">
          <Input isSearch placeholder="Buscar no catálogo..." className="h-9" />
        </div>
      )}
      <button
        className="relative w-9 h-9 rounded-full flex items-center justify-center text-[#667085] hover:bg-[#F5F7FA] transition-colors"
        aria-label="Notificações"
      >
        <Bell className="w-5 h-5" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#E7472E] rounded-full" aria-hidden />
      </button>
      {user && (
        <button className="flex items-center gap-2.5 pl-3 border-l border-[#E2E8F0] hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-[#0066B3] flex items-center justify-center text-white text-xs font-bold">
            {initials}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-[#172033] leading-none">{user.name.split(" ")[0]}</p>
            {user.course && <p className="text-xs text-[#667085] mt-0.5">{user.course}</p>}
          </div>
          <ChevronDown className="w-4 h-4 text-[#667085]" aria-hidden />
        </button>
      )}
    </header>
  );
}
