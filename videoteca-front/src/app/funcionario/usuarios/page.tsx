"use client";
import { AppShell } from "@/components/layout/AppShell";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { DataTable, Column } from "@/components/ui/DataTable";
import { LOANS } from "@/lib/mock-data";

const STAFF = { name: "Carla Nogueira", course: "Funcionária" };

type Row = (typeof LOANS)[0];

const columns: Column<Row>[] = [
  { key: "st", header: "Aluno", render: (r) => r.student },
  { key: "c", header: "Curso", render: (r) => r.course },
  { key: "m", header: "Matrícula", render: () => "—" },
  { key: "p", header: "Pendências", render: (r) => <Badge status={r.status === "late" ? "late" : "borrowed"} /> },
];

export default function UsuariosPage() {
  return (
    <AppShell role="funcionario" title="Gestão de usuários" user={STAFF}>
      <div className="mb-4 max-w-md">
        <Input isSearch placeholder="Nome, matrícula, e-mail ou curso" />
      </div>
      <DataTable columns={columns} data={LOANS} rowKey={(r) => r.id} />
    </AppShell>
  );
}
