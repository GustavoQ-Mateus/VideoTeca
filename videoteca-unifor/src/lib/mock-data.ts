export const FILMS = [
  { id: 1, title: "Cidade de Deus", year: 2002, director: "Fernando Meirelles", genre: "Drama", duration: "130 min", language: "Português", rating: "16+", media: "DVD", cover: "/covers/cidade-de-deus.jpg", status: "available", location: "Estante A-12" },
  { id: 2, title: "Central do Brasil", year: 1998, director: "Walter Salles", genre: "Drama", duration: "115 min", language: "Português", rating: "12+", media: "DVD", cover: "/covers/central.jpg", status: "borrowed", location: "Estante A-08" },
  { id: 3, title: "O Auto da Compadecida", year: 2000, director: "Guel Arraes", genre: "Comédia", duration: "104 min", language: "Português", rating: "12+", media: "DVD", cover: "/covers/auto.jpg", status: "available", location: "Estante B-03" },
  { id: 4, title: "Bacurau", year: 2019, director: "Kleber Mendonça Filho", genre: "Thriller", duration: "131 min", language: "Português", rating: "18+", media: "Blu-ray", cover: "/covers/bacurau.jpg", status: "reserved", location: "Estante C-07" },
  { id: 5, title: "Que Horas Ela Volta?", year: 2015, director: "Anna Muylaert", genre: "Drama", duration: "112 min", language: "Português", rating: "12+", media: "DVD", cover: "/covers/que-horas.jpg", status: "available", location: "Estante A-15" },
  { id: 6, title: "Ilha das Flores", year: 1989, director: "Jorge Furtado", genre: "Documentário", duration: "13 min", language: "Português", rating: "Livre", media: "Digital", cover: "/covers/ilha.jpg", status: "available", location: "Acervo Digital" },
  { id: 7, title: "O Menino e o Mundo", year: 2013, director: "Alê Abreu", genre: "Animação", duration: "80 min", language: "Português", rating: "Livre", media: "Blu-ray", cover: "/covers/menino.jpg", status: "available", location: "Estante B-11" },
  { id: 8, title: "Democracia em Vertigem", year: 2019, director: "Petra Costa", genre: "Documentário", duration: "120 min", language: "Português", rating: "14+", media: "Digital", cover: "/covers/democracia.jpg", status: "borrowed", location: "Acervo Digital" },
  { id: 9, title: "Narradores de Javé", year: 2003, director: "Eliane Caffé", genre: "Comédia", duration: "100 min", language: "Português", rating: "12+", media: "DVD", cover: "/covers/narradores.jpg", status: "available", location: "Estante C-02" },
  { id: 10, title: "Aquarius", year: 2016, director: "Kleber Mendonça Filho", genre: "Drama", duration: "145 min", language: "Português", rating: "16+", media: "Blu-ray", cover: "/covers/aquarius.jpg", status: "available", location: "Estante B-09" },
];

export const EVENTS = [
  { id: 1, title: "Cineclube Unifor: Cinema Brasileiro Contemporâneo", date: "2026-05-20", time: "19h00", location: "Sala de Exibição 1", film: "Bacurau", slots: 30, enrolled: 22, type: "Cineclube", banner: "/events/cineclube.jpg", description: "Debate e exibição comentada sobre o cinema brasileiro contemporâneo com convidados especiais da área de comunicação." },
  { id: 2, title: "Mostra Audiovisual Acadêmica", date: "2026-05-27", time: "14h00", location: "Videoteca A", film: "Democracia em Vertigem", slots: 50, enrolled: 35, type: "Mostra", banner: "/events/mostra.jpg", description: "Apresentação de produções audiovisuais dos alunos do curso de Cinema e Audiovisual da Unifor." },
  { id: 3, title: "Sessão Comentada: Documentários e Sociedade", date: "2026-06-03", time: "18h30", location: "Sala de Exibição 2", film: "Ilha das Flores", slots: 25, enrolled: 18, type: "Sessão", banner: "/events/sessao.jpg", description: "Análise crítica sobre o impacto social do documentarismo brasileiro." },
  { id: 4, title: "Debate: Cinema, Comunicação e Educação", date: "2026-06-10", time: "17h00", location: "Videoteca B", film: "Central do Brasil", slots: 40, enrolled: 40, type: "Debate", banner: "/events/debate.jpg", description: "Mesa redonda com professores e profissionais do audiovisual sobre o papel do cinema na educação." },
  { id: 5, title: "Panorâmica Videoteca: Filmes e Pesquisa", date: "2026-06-17", time: "19h30", location: "Videoteca C", film: "Cidade de Deus", slots: 35, enrolled: 12, type: "Cineclube", banner: "/events/panoramica.jpg", description: "Ciclo de exibições temáticas conectando pesquisa acadêmica e produção audiovisual nacional." },
];

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
