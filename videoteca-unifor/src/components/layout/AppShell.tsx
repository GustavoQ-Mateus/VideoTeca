import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

interface AppShellProps {
  role: "aluno" | "professor" | "funcionario";
  title: string;
  showSearch?: boolean;
  user?: { name: string; course?: string };
  children: React.ReactNode;
}

export function AppShell({ role, title, showSearch, user, children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      <Sidebar role={role} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar title={title} user={user} showSearch={showSearch} />
        <main className="flex-1 p-6 overflow-auto" id="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}
