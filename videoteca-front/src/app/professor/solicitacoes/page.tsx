"use client";
import { AppShell } from "@/components/layout/AppShell";
import { PROFESSOR_REQUESTS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/Badge";
import { DataTable, Column } from "@/components/ui/DataTable";

const PROFESSOR = { name: "Carlos Melo", course: "Jornalismo" };

type Row = (typeof PROFESSOR_REQUESTS)[0];

const columns: Column<Row>[] = [
  { key: "t", header: "Tipo", render: (r) => (r.type === "filme" ? "Filme" : "Sala") },
  { key: "title", header: "Item", render: (r) => r.title },
  { key: "discipline", header: "Disciplina", render: (r) => r.discipline },
  { key: "class", header: "Turma", render: (r) => r.class },
  { key: "date", header: "Data", render: (r) => new Date(r.date).toLocaleDateString("pt-BR") },
  { key: "s", header: "Status", render: (r) => <Badge status={r.status} /> },
];

export default function ProfessorSolicitacoesPage() {
  return (
    <AppShell role="professor" title="Minhas solicitações" user={PROFESSOR}>
      <DataTable columns={columns} data={PROFESSOR_REQUESTS} rowKey={(r) => r.id} />
      <p className="text-sm text-[#667085] mt-4">
        Observações da equipe aparecem no detalhamento interno (mock). Status: em análise, aprovada, recusada.
      </p>
    </AppShell>
  );
}
