export type FilmRecord = {
  id: number;
  title: string;
  year: number;
  director: string;
  genre: string;
  duration: string;
  language: string;
  rating: string;
  media: string;
  cover: string;
  status: string;
  location: string;
  originalTitle?: string;
  synopsis?: string;
  cast?: string;
  subtitles?: string;
  country?: string;
  internalCode?: string;
  relatedIds?: number[];
};

export const FILMS: FilmRecord[] = [
  {
    id: 1,
    title: "Cidade de Deus",
    originalTitle: "City of God",
    year: 2002,
    director: "Fernando Meirelles",
    genre: "Drama",
    duration: "130 min",
    language: "Português",
    rating: "16+",
    media: "DVD",
    cover: "/covers/cidade-de-deus.jpg",
    status: "available",
    location: "Estante A-12",
    country: "Brasil",
    subtitles: "Português, Inglês",
    internalCode: "VID-0001",
    synopsis:
      "Buscapé narra a história da favela da Cidade de Deus, no Rio, entre os anos 1960 e 1980, entre o sonho de ser fotógrafo e a violência do tráfico.",
    cast: "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
    relatedIds: [4, 10, 5],
  },
  {
    id: 2,
    title: "Central do Brasil",
    year: 1998,
    director: "Walter Salles",
    genre: "Drama",
    duration: "115 min",
    language: "Português",
    rating: "12+",
    media: "DVD",
    cover: "/covers/central.jpg",
    status: "borrowed",
    location: "Estante A-08",
    country: "Brasil",
    subtitles: "Português",
    internalCode: "VID-0002",
    synopsis: "Dora escreve cartas para analfabetos na Central do Brasil e acolhe um menino após a morte da mãe, em uma jornada pelo sertão nordestino.",
    cast: "Fernanda Montenegro, Vinícius de Oliveira, Marília Pêra",
    relatedIds: [5, 1, 10],
  },
  {
    id: 3,
    title: "O Auto da Compadecida",
    year: 2000,
    director: "Guel Arraes",
    genre: "Comédia",
    duration: "104 min",
    language: "Português",
    rating: "12+",
    media: "DVD",
    cover: "/covers/auto.jpg",
    status: "available",
    location: "Estante B-03",
    country: "Brasil",
    internalCode: "VID-0003",
    synopsis: "João Grilo e Chicó vivem enganos e aventuras no sertão, misturando humor popular e crítica social.",
    cast: "Matheus Nachtergaele, Selton Mello, Rogério Cardoso",
    relatedIds: [9, 6, 7],
  },
  {
    id: 4,
    title: "Bacurau",
    year: 2019,
    director: "Kleber Mendonça Filho",
    genre: "Thriller",
    duration: "131 min",
    language: "Português",
    rating: "18+",
    media: "Blu-ray",
    cover: "/covers/bacurau.jpg",
    status: "reserved",
    location: "Estante C-07",
    country: "Brasil",
    internalCode: "VID-0004",
    synopsis: "No sertão brasileiro, a comunidade de Bacurau reage a ameaças misteriosas após o desaparecimento do vilarejo dos mapas.",
    cast: "Sônia Braga, Udo Kier, Bárbara Colen, Thomas Aquino",
    relatedIds: [10, 1, 8],
  },
  {
    id: 5,
    title: "Que Horas Ela Volta?",
    year: 2015,
    director: "Anna Muylaert",
    genre: "Drama",
    duration: "112 min",
    language: "Português",
    rating: "12+",
    media: "DVD",
    cover: "/covers/que-horas.jpg",
    status: "available",
    location: "Estante A-15",
    country: "Brasil",
    internalCode: "VID-0005",
    synopsis: "Val mora em São Paulo como empregada doméstica e busca reconexão com a filha Jéssica, que vem do interior para o Enem.",
    cast: "Regina Casé, Camila Márdila, Karine Teles",
    relatedIds: [2, 10, 1],
  },
  {
    id: 6,
    title: "Ilha das Flores",
    year: 1989,
    director: "Jorge Furtado",
    genre: "Documentário",
    duration: "13 min",
    language: "Português",
    rating: "Livre",
    media: "Digital",
    cover: "/covers/ilha.jpg",
    status: "available",
    location: "Acervo Digital",
    country: "Brasil",
    internalCode: "VID-0006",
    synopsis: "Uma reflexão irônica sobre a cadeia econômica que leva um tomate da produção ao consumo — e ao lixo.",
    cast: "Narração: Ciça Reckziegel, Italo Rossi",
    relatedIds: [8, 3, 7],
  },
  {
    id: 7,
    title: "O Menino e o Mundo",
    year: 2013,
    director: "Alê Abreu",
    genre: "Animação",
    duration: "80 min",
    language: "Português",
    rating: "Livre",
    media: "Blu-ray",
    cover: "/covers/menino.jpg",
    status: "available",
    location: "Estante B-11",
    country: "Brasil",
    internalCode: "VID-0007",
    synopsis: "Cuca busca o pai em uma jornada visual pelo Brasil e pelo mundo, com mensagem sobre infância e trabalho.",
    cast: "Vinícius Garcia (voz)",
    relatedIds: [3, 6, 9],
  },
  {
    id: 8,
    title: "Democracia em Vertigem",
    year: 2019,
    director: "Petra Costa",
    genre: "Documentário",
    duration: "120 min",
    language: "Português",
    rating: "14+",
    media: "Digital",
    cover: "/covers/democracia.jpg",
    status: "borrowed",
    location: "Acervo Digital",
    country: "Brasil",
    internalCode: "VID-0008",
    synopsis: "Documentário pessoal e político sobre a democracia brasileira recente, em perspectiva íntima e cinematográfica.",
    cast: "Dilma Rousseff, Luiz Inácio Lula da Silva (arquivo)",
    relatedIds: [6, 4, 2],
  },
  {
    id: 9,
    title: "Narradores de Javé",
    year: 2003,
    director: "Eliane Caffé",
    genre: "Comédia",
    duration: "100 min",
    language: "Português",
    rating: "12+",
    media: "DVD",
    cover: "/covers/narradores.jpg",
    status: "available",
    location: "Estante C-02",
    country: "Brasil",
    internalCode: "VID-0009",
    synopsis: "Moradores de Javé disputam a chance de narrar a história do povo quando uma produtora de cinema chega à cidade.",
    cast: "José Dumont, Nelson Xavier, Fernanda Montenegro",
    relatedIds: [3, 7, 1],
  },
  {
    id: 10,
    title: "Aquarius",
    year: 2016,
    director: "Kleber Mendonça Filho",
    genre: "Drama",
    duration: "145 min",
    language: "Português",
    rating: "16+",
    media: "Blu-ray",
    cover: "/covers/aquarius.jpg",
    status: "available",
    location: "Estante B-09",
    country: "Brasil",
    internalCode: "VID-0010",
    synopsis: "Clara, única moradora de um apartamento em Recife, resiste à pressão de incorporadoras que desejam o prédio.",
    cast: "Sônia Braga, Humberto Carrão, Zoraide Coleto",
    relatedIds: [4, 5, 1],
  },
];

export function getFilmById(id: number): FilmRecord | undefined {
  return FILMS.find((f) => f.id === id);
}

export const EVENTS = [
  {
    id: 1,
    title: "Cineclube Unifor: Cinema Brasileiro Contemporâneo",
    date: "2026-05-20",
    time: "19h00",
    location: "Sala de Exibição 1",
    film: "Bacurau",
    slots: 30,
    enrolled: 22,
    type: "Cineclube",
    banner: "/events/cineclube.jpg",
    description:
      "Debate e exibição comentada sobre o cinema brasileiro contemporâneo com convidados especiais da área de comunicação.",
    certificate: true,
  },
  {
    id: 2,
    title: "Mostra Audiovisual Acadêmica",
    date: "2026-05-27",
    time: "14h00",
    location: "Videoteca A",
    film: "Democracia em Vertigem",
    slots: 50,
    enrolled: 35,
    type: "Mostra",
    banner: "/events/mostra.jpg",
    description: "Apresentação de produções audiovisuais dos alunos do curso de Cinema e Audiovisual da Unifor.",
    certificate: false,
  },
  {
    id: 3,
    title: "Sessão Comentada: Documentários e Sociedade",
    date: "2026-06-03",
    time: "18h30",
    location: "Sala de Exibição 2",
    film: "Ilha das Flores",
    slots: 25,
    enrolled: 18,
    type: "Sessão",
    banner: "/events/sessao.jpg",
    description: "Análise crítica sobre o impacto social do documentarismo brasileiro.",
    certificate: true,
  },
  {
    id: 4,
    title: "Debate: Cinema, Comunicação e Educação",
    date: "2026-06-10",
    time: "17h00",
    location: "Videoteca B",
    film: "Central do Brasil",
    slots: 40,
    enrolled: 40,
    type: "Debate",
    banner: "/events/debate.jpg",
    description: "Mesa redonda com professores e profissionais do audiovisual sobre o papel do cinema na educação.",
    certificate: true,
  },
  {
    id: 5,
    title: "Panorâmica Videoteca: Filmes e Pesquisa",
    date: "2026-06-17",
    time: "19h30",
    location: "Videoteca C",
    film: "Cidade de Deus",
    slots: 35,
    enrolled: 12,
    type: "Cineclube",
    banner: "/events/panoramica.jpg",
    description: "Ciclo de exibições temáticas conectando pesquisa acadêmica e produção audiovisual nacional.",
    certificate: false,
  },
];

export function getEventById(id: number) {
  return EVENTS.find((e) => e.id === id);
}

export const ROOMS = [
  { id: 1, name: "Videoteca A", capacity: 20, equipment: ["Projetor 4K", "Sistema de Som Dolby", "Ar-condicionado"], status: "available" },
  { id: 2, name: "Videoteca B", capacity: 20, equipment: ["Projetor HD", "Sistema de Som Estéreo", "Ar-condicionado"], status: "occupied" },
  { id: 3, name: "Videoteca C", capacity: 15, equipment: ["Projetor HD", "Sistema de Som", "Ar-condicionado"], status: "available" },
  { id: 4, name: "Sala de Exibição 1", capacity: 60, equipment: ["Projetor 4K", "Som Dolby Atmos", "Tela 8m", "Acessibilidade"], status: "maintenance" },
  { id: 5, name: "Sala de Exibição 2", capacity: 40, equipment: ["Projetor 4K", "Som 5.1", "Tela 6m"], status: "available" },
];

export const LOANS = [
  { id: 1, film: "Cidade de Deus", student: "Ana Clara Mendes", course: "Cinema e Audiovisual", borrowed: "2026-05-05", due: "2026-05-12", status: "late", copy: "DVD-001" },
  { id: 2, film: "O Auto da Compadecida", student: "Lucas Ferreira", course: "Jornalismo", borrowed: "2026-05-08", due: "2026-05-15", status: "borrowed", copy: "DVD-024" },
  { id: 3, film: "Aquarius", student: "Mariana Costa", course: "Comunicação Social", borrowed: "2026-05-10", due: "2026-05-17", status: "borrowed", copy: "BLU-008" },
  { id: 4, film: "Central do Brasil", student: "Pedro Alves", course: "Psicologia", borrowed: "2026-05-01", due: "2026-05-08", status: "returned", copy: "DVD-012" },
  { id: 5, film: "Bacurau", student: "Julia Santos", course: "Direito", borrowed: "2026-05-09", due: "2026-05-16", status: "borrowed", copy: "BLU-003" },
];

export const ADMIN_STATS = {
  totalItems: 1248,
  activeLoans: 87,
  pendingReservations: 23,
  lateItems: 12,
  occupiedRooms: 2,
  upcomingEvents: 5,
  usersWithPending: 18,
  mostRequested: "Cidade de Deus",
};

export const STUDENT_LOANS_SELF = [
  { id: 1, filmId: 2, film: "Central do Brasil", media: "DVD", borrowed: "2026-05-08", due: "2026-05-15", status: "borrowed", copy: "DVD-012", renewable: true },
  { id: 2, filmId: 8, film: "Democracia em Vertigem", media: "Digital", borrowed: "2026-05-01", due: "2026-05-12", status: "late", copy: "DIG-004", renewable: false },
];

export const NOTIFICATIONS = [
  { id: 1, type: "reserva", title: "Reserva confirmada", body: "O Menino e o Mundo está reservado para retirada até 13/05.", time: "Há 2 h", read: false },
  { id: 2, type: "devolucao", title: "Devolução em 3 dias", body: "Central do Brasil — devolver até 15/05.", time: "Ontem", read: false },
  { id: 3, type: "atraso", title: "Atraso no acervo digital", body: "Democracia em Vertigem ultrapassou o prazo.", time: "Há 1 d", read: false },
  { id: 4, type: "evento", title: "Nova vaga no cineclube", body: "Bacurau — 8 vagas restantes.", time: "Há 3 d", read: true },
];

export const FAVORITES = [
  { id: 1, filmId: 1, title: "Cidade de Deus", genre: "Drama", year: 2002, status: "available" },
  { id: 2, filmId: 4, title: "Bacurau", genre: "Thriller", year: 2019, status: "reserved" },
  { id: 3, filmId: 10, title: "Aquarius", genre: "Drama", year: 2016, status: "available" },
];

export const PROFESSOR_REQUESTS = [
  { id: 1, type: "filme", title: "Que Horas Ela Volta?", discipline: "Cinema e Sociedade", class: "CA-402", date: "2026-05-22", status: "analysis", notes: "" },
  { id: 2, type: "sala", title: "Sala de Exibição 1", discipline: "Documentário I", class: "CA-310", date: "2026-05-18", status: "approved", notes: "Confirmado equipamento extra." },
  { id: 3, type: "filme", title: "Ilha das Flores", discipline: "Comunicação", class: "JOR-201", date: "2026-05-10", status: "refused", notes: "Solicitar outra data." },
];

export const STAFF_RESERVATIONS = [
  { id: 1, student: "Ana Clara Mendes", matricula: "2022001847", film: "O Menino e o Mundo", status: "waiting", requested: "2026-05-10", limit: "2026-05-13" },
  { id: 2, student: "Lucas Ferreira", matricula: "2023019021", film: "Que Horas Ela Volta?", status: "confirmed", requested: "2026-05-08", limit: "2026-05-11" },
];

export const MOVEMENTS = [
  { id: 1, type: "Empréstimo", user: "Mariana Costa", item: "Aquarius", time: "10:42" },
  { id: 2, type: "Devolução", user: "Pedro Alves", item: "Central do Brasil", time: "10:18" },
  { id: 3, type: "Reserva", user: "Ana Clara Mendes", item: "O Menino e o Mundo", time: "09:55" },
];

export const REPORT_CHARTS = {
  topBorrowed: [
    { name: "Cidade de Deus", value: 42 },
    { name: "Central do Brasil", value: 38 },
    { name: "Bacurau", value: 35 },
    { name: "O Auto da Compadecida", value: 28 },
  ],
  byGenre: [
    { name: "Drama", value: 320 },
    { name: "Documentário", value: 180 },
    { name: "Comédia", value: 140 },
  ],
  roomUsage: [
    { name: "Sala 1", value: 72 },
    { name: "Videoteca A", value: 54 },
    { name: "Sala 2", value: 48 },
  ],
};

export const EVENT_CHECKINS = [
  { id: 1, name: "Ana Clara Mendes", matricula: "2022001847", present: true },
  { id: 2, name: "Lucas Ferreira", matricula: "2023019021", present: false },
];

export const COURSES = [
  "Cinema e Audiovisual",
  "Jornalismo",
  "Publicidade e Propaganda",
  "Direito",
  "Psicologia",
  "Arquitetura",
  "Educação",
  "Administração",
];
