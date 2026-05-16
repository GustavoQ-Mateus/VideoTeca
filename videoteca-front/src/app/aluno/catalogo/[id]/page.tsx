import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { getFilmById } from "@/lib/mock-data";
import { FilmDetailView } from "@/components/catalog/FilmDetailView";

const STUDENT = { name: "Ana Clara Mendes", course: "Cinema e Audiovisual" };

export default async function StudentFilmDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const num = Number(id);
  if (Number.isNaN(num)) notFound();
  const film = getFilmById(num);
  if (!film) notFound();

  return (
    <AppShell role="aluno" title={film.title} showSearch user={STUDENT}>
      <FilmDetailView
        film={film}
        mode="aluno"
        backHref="/aluno/catalogo"
        breadcrumbItems={[
          { label: "Dashboard", href: "/aluno" },
          { label: "Catálogo", href: "/aluno/catalogo" },
          { label: film.title },
        ]}
      />
    </AppShell>
  );
}
