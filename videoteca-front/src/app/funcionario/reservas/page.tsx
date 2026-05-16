"use client";
import { AppShell } from "@/components/layout/AppShell";
import { STAFF_RESERVATIONS } from "@/lib/mock-data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { DataTable, Column } from "@/components/ui/DataTable";

const STAFF = { name: "Carla Nogueira", course: "Funcionária" };

type Row = (typeof STAFF_RESERVATIONS)[0];

const columns: Column<Row>[] = [
  { key: "s", header: "Aluno", render: (r) => r.student },
  { key: "m", header: "Matrícula", render: (r) => r.matricula },
  { key: "f", header: "Filme", render: (r) => r.film },
  { key: "st", header: "Status", render: (r) => <Badge status={r.status} /> },
  { key: "a", header: "Ações", render: () => (
      <div className="flex gap-1 flex-wrap">
        <Button size="sm" variant="secondary">
          Retirada
        </Button>
        <Button size="sm" variant="ghost">
          Notificar
        </Button>
      </div>
    ),
  },
];

export default function FuncionarioReservasPage() {
  return (
    <AppShell role="funcionario" title="Reservas" user={STAFF}>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="w-full sm:w-48">
          <Select aria-label="Status" defaultValue="todos">
            <option value="todos">Todos</option>
            <option value="waiting">Aguardando retirada</option>
            <option value="confirmed">Confirmada</option>
          </Select>
        </div>
      </div>
      <DataTable columns={columns} data={STAFF_RESERVATIONS} rowKey={(r) => r.id} />
    </AppShell>
  );
}
