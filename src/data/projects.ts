export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    id: "nova-operations",
    title: "Nova Operations - Plataforma de Automação Corporativa",
    description:
      "Sistema interno para orquestração de processos e automações operacionais.",
    longDescription:
      "Plataforma desenvolvida para centralizar e automatizar fluxos operacionais, reduzindo tarefas manuais e aumentando a eficiência de equipes técnicas e administrativas.",
    problem:
      "Processos internos fragmentados, dependentes de execução manual e sem visibilidade centralizada.",
    solution:
      "Criação de um sistema modular com painéis administrativos, automações assíncronas e integração entre diferentes fluxos de trabalho.",
    tags: ["Next.js", "Node.js", "Automação", "PostgreSQL"],
    image: "/images/nova-operations.png",
    githubUrl: "https://github.com/LucasaaOrse/nova-operations", // Adicionado para manter o padrão
    demoUrl: "https://nova-operations.vercel.app",
    linkLabel: "Ver online",
  },

  {
    id: "email-service-app",
    title: "Email Service API - Plataforma de Envio de E-mails",
    description:
      "API escalável para envio de e-mails com autenticação via API Key e controle de filas.",
    longDescription:
      "Sistema backend robusto para envio de e-mails em larga escala, com autenticação por API Key, filas assíncronas e processamento distribuído.",
    problem:
      "Falta de uma solução centralizada para envio de e-mails programáticos com controle e rastreamento.",
    solution:
      "Implementação de API com autenticação, BullMQ para filas, Redis para cache e controle de envios assíncronos.",
    tags: ["Node.js", "Redis", "BullMQ", "PostgreSQL", "API"],
    image: "/images/email-service.png",
    githubUrl: "https://github.com/LucasaaOrse/email-service-app",
    // Como é API de backend, opcionalmente você pode colocar a URL do Swagger ou do ambiente de testes aqui:
    // demoUrl: "https://email-service-app.vercel.app/api-docs" 
  },

  {
    id: "taskflow-api",
    title: "TaskFlow API - Sistema de Gerenciamento de Tarefas",
    description:
      "API backend para controle de tarefas com autenticação e estrutura escalável.",
    longDescription:
      "API REST estruturada para gerenciamento de tarefas e fluxos de trabalho, com foco em escalabilidade e organização de processos.",
    problem:
      "Dificuldade em organizar tarefas e fluxos de trabalho de forma estruturada em pequenos sistemas.",
    solution:
      "Criação de API modular com autenticação, regras de negócio separadas e estrutura preparada para expansão futura.",
    tags: ["Node.js", "Fastify", "PostgreSQL", "JWT"],
    image: "/images/taskflow.png",
    githubUrl: "https://github.com/LucasaaOrse/TaskFlow-API",
  },

  {
    id: "viva-bem-saas",
    title: "VivaBem SaaS - Plataforma de Saúde e Bem-estar",
    description:
      "SaaS com foco em gestão de saúde, agendamentos e acompanhamento de usuários.",
    longDescription:
      "Sistema SaaS completo voltado para área de saúde, com funcionalidades de cadastro, agendamento e gestão de usuários.",
    problem:
      "Processos de gestão de pacientes e agendamentos feitos manualmente ou em sistemas desconectados.",
    solution:
      "Desenvolvimento de plataforma SaaS com autenticação, dashboard administrativo e fluxo completo de agendamento.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "SaaS"],
    image: "/images/vivabem.png",
    githubUrl: "https://github.com/LucasaaOrse/VivaBem-Saas",
    demoUrl: "https://viva-bem-saas.vercel.app",
    linkLabel: "Ver online",
  },

  {
    id: "d-avila-associados",
    title: "D'Avila Associados - Sistema Institucional",
    description:
      "Sistema web institucional com foco em apresentação e automação de contato.",
    longDescription:
      "Website institucional desenvolvido para empresa jurídica, com foco em presença digital e captação de clientes.",
    problem:
      "Ausência de presença digital estruturada e profissional.",
    solution:
      "Criação de site moderno com foco em conversão, responsividade e comunicação clara dos serviços.",
    tags: ["Next.js", "UI", "Frontend"],
    image: "/images/davila.png",
    githubUrl: "https://github.com/LucasaaOrse/D-Avila-Associados",
    demoUrl: "https://d-avila-associados.vercel.app",
    linkLabel: "Ver online",
  },

  {
    id: "brind10premium",
    title: "Brind10 Premium - Plataforma Comercial",
    description:
      "Sistema de catálogo e gestão de produtos personalizados.",
    longDescription:
      "Plataforma desenvolvida para exibição e gestão de produtos personalizados com foco em vendas e catálogo digital.",
    problem:
      "Falta de uma plataforma organizada para apresentação de produtos e pedidos.",
    solution:
      "Criação de sistema web com catálogo dinâmico e estrutura de apresentação comercial.",
    tags: ["Next.js", "E-commerce", "Frontend"],
    image: "/images/brind10.png",
    githubUrl: "https://github.com/LucasaaOrse/brind10premium",
    demoUrl: "https://brind10premium.vercel.app",
    linkLabel: "Ver online",
  },

  {
    id: "conectafonoaudiologia",
    title: "Conecta Fonoaudiologia - Plataforma de Fonoaudiologia",
    description:
      "Plataforma de fonoaudiologia com foco em atendimento personalizado.",
    longDescription:
      "Plataforma desenvolvida para fonoaudiologia, com foco em atendimento personalizado e agendamento de consultas.",
    problem:
      "Falta de uma plataforma organizada para agendamento de consultas e atendimento personalizado.",
    solution:
      "Criação de plataforma de fonoaudiologia com agendamento e atendimento personalizado.",
    tags: ["Next.js", "Frontend"],
    image: "/images/fonoaudiologia.png",
    githubUrl: "https://github.com/LucasaaOrse/conectafonoaudiologia",
    demoUrl: "https://conectafonoaudiologia.vercel.app",
    linkLabel: "Ver online",
  },
];