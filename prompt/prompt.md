Atue como um Designer de Produto Sênior, UI/UX Designer e especialista em Design Systems.

Preciso que você desenvolva toda a interface visual de um sistema web chamado:

# Videoteca Unifor

O sistema será utilizado pela Universidade de Fortaleza — Unifor — para modernizar a gestão da Videoteca, permitindo que alunos, professores e funcionários acessem catálogo audiovisual, reservas, empréstimos, salas de exibição, eventos, cineclubes e relatórios administrativos.

O objetivo é criar uma interface completa, moderna, institucional, acadêmica e audiovisual, com forte atenção à usabilidade, clareza, acessibilidade e experiência visual.

---

# 1. Contexto do projeto

A Videoteca Unifor é um setor ligado à Biblioteca Central da universidade, com acervo audiovisual, filmes, documentários, produções acadêmicas, DVDs, VHS, mídias digitais, salas de exibição, cineclubes, sessões comentadas e apoio a atividades acadêmicas.

O sistema deve atender três públicos principais:

1. Alunos
2. Professores
3. Funcionários/Administradores da Videoteca

Também deve ter uma área pública para apresentar eventos, catálogo e informações institucionais.

---

# 2. Direção visual desejada

Use como referência uma combinação dos seguintes design systems:

## Base principal: Notion

Use como inspiração para:

- organização geral;
- dashboards;
- cards;
- áreas de trabalho;
- hierarquia visual;
- navegação limpa;
- sensação de produtividade acadêmica.

O sistema deve parecer organizado, leve, modular e fácil de usar.

## Catálogo e reservas: Airbnb

Use como inspiração para:

- busca;
- filtros;
- cards de filmes;
- fluxo de reserva;
- listagem visual;
- experiência de descoberta.

A área de catálogo deve ser agradável, visual e exploratória, sem parecer burocrática.

## Eventos e cultura: Figma

Use como inspiração para:

- blocos coloridos;
- sessões culturais;
- cineclubes;
- mostras;
- banners;
- páginas públicas;
- áreas criativas.

A parte de eventos deve parecer cultural, jovem, acadêmica e criativa.

## Painel administrativo: IBM Carbon

Use como inspiração para:

- tabelas;
- formulários;
- filtros;
- relatórios;
- dashboards administrativos;
- clareza operacional;
- visual institucional e confiável.

A área dos funcionários deve priorizar produtividade e legibilidade.

## Experiência audiovisual: Spotify

Use com moderação apenas para:

- página de detalhes do filme;
- área de exibição;
- modo escuro opcional;
- banners imersivos;
- destaque de capas e cartazes.

Não transformar o sistema em uma cópia de streaming. O visual deve continuar institucional.

---

# 3. Conceito visual

O conceito central da interface deve ser:

## Cinema acadêmico com identidade institucional

A interface deve transmitir:

- confiança;
- modernidade;
- organização;
- cultura;
- tecnologia;
- identidade universitária;
- experiência audiovisual;
- clareza para uso diário.

Não deve parecer um sistema antigo de biblioteca.
Não deve parecer apenas um app de streaming.
Não deve parecer um dashboard corporativo genérico.

Precisa equilibrar:

- universidade;
- biblioteca;
- cinema;
- catálogo;
- atendimento;
- gestão administrativa.

---

# 4. Paleta de cores sugerida

Use uma paleta inspirada na identidade institucional da Unifor, com azul como cor principal.

Cores sugeridas:

- Azul institucional escuro: #003A70
- Azul principal: #0066B3
- Azul claro de apoio: #E8F2FC
- Vermelho/laranja de destaque: #E7472E
- Amarelo para avisos: #F6C343
- Verde para status positivos: #2EAD68
- Cinza de fundo: #F5F7FA
- Cinza de borda: #E2E8F0
- Branco: #FFFFFF
- Texto principal: #172033
- Texto secundário: #667085
- Preto profundo para modo audiovisual: #101828

Use o azul como cor institucional dominante.
Use vermelho/laranja apenas para CTAs importantes e destaques.
Use verde, amarelo e vermelho para status funcionais.
Use fundos claros na maior parte do sistema.
Permita modo escuro apenas em áreas audiovisuais ou como opção.

---

# 5. Tipografia

Use tipografia moderna, limpa e altamente legível.

Sugestão:

- Títulos: Poppins ou Montserrat
- Texto, tabelas e formulários: Inter

A hierarquia deve ser clara:

- H1 forte e institucional;
- H2 para seções;
- cards com títulos médios;
- tabelas com textos compactos, mas legíveis;
- labels e status bem definidos.

---

# 6. Estilo de interface

Use uma mistura de:

- Clean UI;
- Bento Grid;
- Glassmorphism leve;
- Cards arredondados;
- Sombras suaves;
- Bordas discretas;
- Layout modular;
- Bastante espaçamento;
- Microinterações elegantes.

## Glassmorphism

Use glassmorphism apenas em pontos específicos:

- login;
- banners;
- cards de destaque;
- eventos;
- dashboard do aluno;
- áreas institucionais.

Não usar glassmorphism em tabelas ou formulários administrativos complexos.

## Bento UI

Use Bento Grid principalmente nos dashboards:

- cards de empréstimos;
- reservas;
- eventos;
- recomendações;
- notificações;
- indicadores administrativos.

## Bordas e espaçamento

Use:

- radius entre 16px e 24px para cards;
- radius entre 10px e 14px para inputs e botões;
- sombras leves;
- paddings generosos;
- visual arejado.

---

# 7. Motion design

Crie uma interface com animações suaves e funcionais.

Use motions como:

- fade in entre páginas;
- slide leve em transições;
- hover em cards;
- zoom sutil em capas;
- skeleton loading;
- toast de confirmação;
- microanimações em botões;
- entrada sequencial dos cards do dashboard.

Exemplos:

## Card de filme

No hover:

- subir 4px;
- aumentar sombra;
- zoom de 1.03x na capa;
- revelar botões de ação.

## Reserva de filme

Ao clicar em reservar:

- botão vira loading;
- aparece confirmação com check;
- toast no canto superior;
- status do filme muda para reservado.

## Tabelas administrativas

Ao atualizar status:

- linha destaca suavemente;
- status muda com badge;
- toast informa sucesso.

As animações devem durar entre 180ms e 300ms.
Evitar animações exageradas.

---

# 8. Responsividade

A interface deve ser totalmente responsiva.

Criar versões para:

- Desktop;
- Tablet;
- Mobile.

## Desktop

- sidebar lateral para áreas internas;
- dashboard em grid;
- catálogo com filtros laterais;
- tabelas completas;
- calendário amplo.

## Tablet

- sidebar recolhível;
- cards em duas colunas;
- filtros em drawer;
- tabelas com scroll horizontal.

## Mobile

- navegação inferior ou menu hambúrguer;
- cards em uma coluna;
- busca em destaque;
- filtros em modal;
- ações principais fixas quando necessário.

---

# 9. Acessibilidade

A interface deve seguir boas práticas de acessibilidade:

- contraste adequado;
- foco visível;
- botões com tamanho confortável;
- labels claros;
- ícones acompanhados de texto quando necessário;
- status não depender apenas de cor;
- navegação por teclado;
- textos legíveis;
- mensagens de erro objetivas.

---

# 10. Estrutura geral do sistema

Crie as interfaces para os seguintes ambientes:

1. Área Pública
2. Área do Aluno
3. Área do Professor
4. Área do Funcionário
5. Área Administrativa

---

# 11. Área Pública

Criar telas públicas para visitantes, alunos e comunidade acadêmica.

## 11.1 Landing Page da Videoteca

Deve conter:

- header institucional com logo da Unifor e nome Videoteca;
- hero com chamada principal;
- campo de busca rápida no acervo;
- cards de serviços;
- seção de eventos em destaque;
- seção sobre a Videoteca;
- acesso rápido para login;
- CTA para explorar catálogo;
- rodapé institucional.

Tom visual:

- institucional;
- moderno;
- acadêmico;
- cultural.

## 11.2 Catálogo Público

Deve conter:

- busca;
- filtros;
- grid de filmes;
- status de disponibilidade;
- botão para ver detalhes;
- aviso de que reserva exige login.

## 11.3 Página de Evento Público

Deve conter:

- banner visual;
- nome do evento;
- filme exibido;
- data;
- horário;
- local;
- descrição;
- vagas;
- botão de inscrição;
- informações sobre certificado, se houver.

---

# 12. Área do Aluno

A área do aluno deve ser visual, amigável e exploratória.

## 12.1 Login

Criar tela de login com:

- fundo institucional em gradiente azul;
- elementos visuais discretos relacionados a cinema e universidade;
- card glassmorphism;
- logo Unifor;
- título “Videoteca Unifor”;
- campo de matrícula;
- campo de senha;
- botão entrar;
- opção “Esqueci minha senha”;
- alternância de perfil: Aluno, Professor, Funcionário.

## 12.2 Dashboard do Aluno

Deve conter:

- saudação personalizada;
- busca rápida no catálogo;
- card de empréstimo ativo;
- card de próxima devolução;
- card de reserva atual;
- eventos da semana;
- recomendações;
- favoritos;
- notificações recentes.

Layout em Bento Grid.

## 12.3 Catálogo de Filmes

Deve conter:

- busca grande no topo;
- filtros por gênero, ano, curso, idioma, mídia, disponibilidade e classificação;
- grid de filmes;
- cards com capa, título, gênero, ano, duração e status;
- botão “Ver detalhes”;
- botão “Reservar”;
- ordenação por mais recentes, mais procurados e ordem alfabética.

Visual inspirado no Airbnb para busca e cards.

## 12.4 Detalhes do Filme

Deve conter:

- capa grande;
- título;
- título original;
- sinopse;
- diretor;
- elenco;
- ano;
- gênero;
- duração;
- idioma;
- legenda;
- classificação indicativa;
- tipo de mídia;
- disponibilidade;
- localização no acervo;
- botão reservar;
- botão favoritar;
- filmes relacionados;
- eventos relacionados.

Pode ter uma seção mais imersiva inspirada no Spotify, mas mantendo o visual acadêmico.

## 12.5 Minhas Reservas

Deve conter:

- lista de reservas;
- status: aguardando retirada, confirmada, cancelada, expirada;
- data de solicitação;
- data limite de retirada;
- botão cancelar;
- botão ver detalhes.

## 12.6 Meus Empréstimos

Deve conter:

- empréstimos ativos;
- histórico de empréstimos;
- data de retirada;
- prazo de devolução;
- status: em dia, próximo do vencimento, atrasado, devolvido;
- opção de renovação, se permitido;
- alerta visual para atraso.

## 12.7 Eventos e Cineclubes

Deve conter:

- lista de eventos;
- cards visuais;
- filtros por data, tema e tipo;
- botão de inscrição;
- indicação de vagas disponíveis;
- destaque para eventos da semana.

Visual inspirado em Figma, com blocos coloridos e criativos.

## 12.8 Favoritos

Deve conter:

- filmes salvos;
- listas pessoais;
- botão remover;
- botão reservar;
- recomendações baseadas nos favoritos.

## 12.9 Notificações

Deve conter:

- reserva confirmada;
- devolução próxima;
- atraso;
- evento disponível;
- inscrição confirmada;
- material disponível.

## 12.10 Perfil do Aluno

Deve conter:

- nome;
- matrícula;
- curso;
- e-mail;
- telefone;
- preferências de notificação;
- histórico resumido;
- pendências.

---

# 13. Área do Professor

A área do professor deve ser objetiva, acadêmica e focada em solicitações.

## 13.1 Dashboard do Professor

Deve conter:

- próximas reservas de sala;
- materiais solicitados;
- sessões agendadas;
- solicitações em análise;
- histórico recente;
- botão para solicitar filme;
- botão para solicitar sala.

## 13.2 Solicitar Filme para Aula

Deve conter:

- busca de filme;
- seleção de disciplina;
- turma;
- data de uso;
- objetivo pedagógico;
- observações;
- botão enviar solicitação.

## 13.3 Solicitar Sala de Exibição

Deve conter:

- calendário de disponibilidade;
- seleção de sala;
- capacidade;
- data e horário;
- filme relacionado;
- quantidade estimada de alunos;
- descrição da atividade;
- botão enviar solicitação.

## 13.4 Minhas Solicitações

Deve conter:

- lista de solicitações;
- status: em análise, aprovada, recusada, cancelada, finalizada;
- detalhes;
- observações da equipe da Videoteca.

## 13.5 Histórico Acadêmico

Deve conter:

- filmes usados em aula;
- salas reservadas;
- sessões realizadas;
- turmas atendidas.

---

# 14. Área do Funcionário da Videoteca

A área do funcionário deve priorizar eficiência, clareza e controle operacional.

Use visual inspirado em IBM Carbon e Notion.

## 14.1 Dashboard Administrativo

Deve conter cards com indicadores:

- total de itens cadastrados;
- empréstimos ativos;
- reservas pendentes;
- itens atrasados;
- salas ocupadas hoje;
- eventos próximos;
- usuários com pendências;
- filmes mais procurados.

Também deve conter:

- tabela de movimentações recentes;
- agenda resumida do dia;
- alertas importantes.

## 14.2 Gestão do Acervo

Deve conter:

- tabela de filmes/materiais;
- busca;
- filtros;
- botão cadastrar novo material;
- status;
- tipo de mídia;
- quantidade disponível;
- ações: editar, ver cópias, inativar.

## 14.3 Cadastro de Material

Formulário completo com:

- título;
- título original;
- sinopse;
- diretor;
- elenco;
- ano;
- país;
- gênero;
- duração;
- classificação indicativa;
- idioma;
- legendas;
- tipo de mídia;
- código interno;
- localização física;
- quantidade;
- cursos relacionados;
- disciplinas relacionadas;
- imagem/capa;
- observações.

## 14.4 Gestão de Cópias

Deve conter:

- código da cópia;
- patrimônio;
- estado de conservação;
- status: disponível, emprestada, reservada, danificada, perdida, manutenção;
- histórico da cópia;
- botão editar.

## 14.5 Empréstimos

Tela operacional para balcão.

Deve conter:

- busca de aluno por matrícula;
- busca de material por código ou título;
- resumo do aluno;
- pendências do aluno;
- lista de itens selecionados;
- prazo de devolução;
- botão confirmar empréstimo;
- emissão de comprovante.

## 14.6 Devoluções

Tela rápida.

Deve conter:

- campo para código do item;
- identificação automática do empréstimo;
- dados do aluno;
- status do prazo;
- opção registrar dano;
- opção registrar observação;
- botão confirmar devolução.

## 14.7 Reservas

Deve conter:

- lista de reservas;
- filtros por status;
- fila de espera;
- confirmação de reserva;
- cancelamento;
- marcar como retirada;
- notificar aluno.

## 14.8 Gestão de Usuários

Deve conter:

- busca por nome, matrícula, e-mail ou curso;
- listagem de alunos e professores;
- histórico de empréstimos;
- pendências;
- bloqueios;
- observações internas.

## 14.9 Gestão de Salas

Deve conter:

- cadastro de salas;
- capacidade;
- equipamentos;
- status;
- disponibilidade;
- manutenção;
- ações de editar e bloquear horário.

## 14.10 Agenda de Salas

Criar calendário visual com:

- modo dia;
- modo semana;
- modo mês;
- salas como colunas;
- horários como linhas;
- reservas em blocos;
- filtros por sala;
- botão nova reserva.

## 14.11 Solicitações de Professores

Deve conter:

- solicitações recebidas;
- professor;
- disciplina;
- turma;
- filme solicitado;
- sala solicitada;
- data;
- status;
- botões aprovar, recusar e solicitar ajuste;
- campo de observação.

## 14.12 Gestão de Eventos

Deve conter:

- criar evento;
- editar evento;
- selecionar filme;
- escolher sala;
- data e horário;
- limite de vagas;
- descrição;
- imagem/banner;
- inscrições;
- status publicado/rascunho/finalizado.

## 14.13 Controle de Presença

Deve conter:

- lista de inscritos;
- check-in manual;
- check-in por QR Code;
- marcar ausente;
- exportar lista;
- indicador de presença.

## 14.14 Relatórios

Criar dashboard de relatórios com gráficos e tabelas:

- filmes mais emprestados;
- filmes mais reservados;
- cursos que mais utilizam;
- atrasos por período;
- uso das salas;
- eventos com maior participação;
- acervo por gênero;
- acervo por mídia;
- materiais danificados;
- histórico mensal de empréstimos.

## 14.15 Configurações

Deve conter:

- prazo padrão de empréstimo;
- limite de itens por aluno;
- limite de reservas;
- prazo para retirada de reserva;
- regras de renovação;
- horários de funcionamento;
- mensagens automáticas;
- permissões por perfil;
- parâmetros de notificação.

---

# 15. Componentes obrigatórios

Crie um design system interno para o projeto com os seguintes componentes:

## Navegação

- sidebar;
- header;
- breadcrumbs;
- tabs;
- menu de perfil;
- navegação mobile.

## Formulários

- input;
- select;
- textarea;
- date picker;
- time picker;
- upload de imagem;
- checkbox;
- radio;
- campo de busca;
- filtros avançados.

## Dados

- tabela;
- paginação;
- empty state;
- loading state;
- skeleton;
- badges;
- tags;
- cards de indicador;
- gráficos;
- calendário.

## Feedback

- toast;
- modal;
- drawer;
- alerta;
- confirmação;
- erro de formulário;
- sucesso;
- estado vazio.

## Cards

- card de filme;
- card de evento;
- card de sala;
- card de reserva;
- card de empréstimo;
- card de relatório;
- card de notificação.

## Status

Criar badges para:

- disponível;
- reservado;
- emprestado;
- atrasado;
- devolvido;
- cancelado;
- expirado;
- em análise;
- aprovado;
- recusado;
- danificado;
- manutenção.

---

# 16. Dados mockados

Use dados fictícios para simular o sistema.

Exemplos de filmes:

- Cidade de Deus
- Central do Brasil
- O Auto da Compadecida
- Bacurau
- Que Horas Ela Volta?
- Ilha das Flores
- O Menino e o Mundo
- Democracia em Vertigem
- Narradores de Javé
- Aquarius

Exemplos de eventos:

- Cineclube Unifor: Cinema Brasileiro Contemporâneo
- Mostra Audiovisual Acadêmica
- Sessão Comentada: Documentários e Sociedade
- Debate: Cinema, Comunicação e Educação
- Panorâmica Videoteca: Filmes e Pesquisa

Exemplos de salas:

- Videoteca A
- Videoteca B
- Videoteca C
- Sala de Exibição 1
- Sala de Exibição 2

Exemplos de cursos:

- Cinema e Audiovisual
- Jornalismo
- Publicidade e Propaganda
- Direito
- Psicologia
- Arquitetura
- Educação
- Administração

---

# 17. Requisitos de layout

Crie telas completas, não apenas wireframes.

As telas devem ter:

- conteúdo realista;
- botões;
- estados;
- tabelas;
- cards;
- filtros;
- menus;
- hierarquia visual;
- espaçamento consistente;
- aparência pronta para apresentação.

Priorize a criação de uma experiência visual de alta qualidade, como se fosse um produto real pronto para validação com usuários da universidade.

---

# 18. Principais fluxos de usuário

Desenhe ou organize as telas considerando estes fluxos:

## Fluxo do aluno reservar filme

1. Login
2. Dashboard
3. Catálogo
4. Filtros/busca
5. Detalhes do filme
6. Reservar
7. Confirmação
8. Minhas reservas

## Fluxo do aluno participar de evento

1. Eventos
2. Detalhes do evento
3. Inscrição
4. Confirmação
5. QR Code ou comprovante

## Fluxo do funcionário cadastrar material

1. Dashboard administrativo
2. Gestão do acervo
3. Cadastrar material
4. Preencher dados
5. Adicionar cópias
6. Salvar
7. Material aparece no catálogo

## Fluxo do funcionário realizar empréstimo

1. Empréstimos
2. Buscar aluno
3. Buscar material
4. Verificar disponibilidade
5. Confirmar empréstimo
6. Emitir comprovante

## Fluxo do professor solicitar sala

1. Dashboard do professor
2. Solicitar sala
3. Escolher sala/data/horário
4. Vincular filme
5. Enviar solicitação
6. Aguardar aprovação

---

# 19. Personalidade da interface

A interface deve parecer:

- institucional;
- confiável;
- moderna;
- universitária;
- cultural;
- organizada;
- amigável;
- eficiente.

Evite parecer:

- genérica;
- infantil;
- escura demais;
- parecida demais com Netflix;
- burocrática demais;
- poluída visualmente.

---

# 20. Resultado esperado

Entregue uma interface completa para o sistema Videoteca Unifor, incluindo:

1. Design system visual
2. Paleta de cores
3. Tipografia
4. Componentes
5. Área pública
6. Área do aluno
7. Área do professor
8. Área do funcionário
9. Área administrativa
10. Estados de loading, erro e vazio
11. Responsividade
12. Motion design sugerido
13. Fluxos principais

A interface deve estar pronta para ser usada como protótipo navegável e também como referência para desenvolvimento front-end.