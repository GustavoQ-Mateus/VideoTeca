"use client";
import { AppShell } from "@/components/layout/AppShell";
import { NOTIFICATIONS } from "@/lib/mock-data";
import { Bell, Check } from "lucide-react";

const STUDENT = { name: "Ana Clara Mendes", course: "Cinema e Audiovisual" };

export default function NotificacoesPage() {
  return (
    <AppShell role="aluno" title="Notificações" user={STUDENT}>
      <div className="space-y-2">
        {NOTIFICATIONS.map((n) => (
          <div
            key={n.id}
            className={`flex gap-4 p-4 rounded-[14px] border ${n.read ? "bg-white border-[#E2E8F0]" : "bg-[#E8F2FC]/60 border-[#0066B3]/20"}`}
          >
            <div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center flex-shrink-0">
              <Bell className="w-5 h-5 text-[#0066B3]" aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[#172033] text-sm">{n.title}</p>
              <p className="text-sm text-[#667085] mt-0.5">{n.body}</p>
              <p className="text-xs text-[#667085] mt-2">{n.time}</p>
            </div>
            {!n.read && (
              <button type="button" className="self-center p-2 rounded-[10px] hover:bg-white/80 text-[#0066B3]" aria-label="Marcar como lida">
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        ))}
      </div>
    </AppShell>
  );
}
