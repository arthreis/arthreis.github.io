export const deliveries = [
  {
    stage: 'Padronizar',
    title: 'Padrões para o time de TI',
    description: 'Estruturei o inventário de aplicações e serviços e organizei guias e runbooks. O time ganhou uma referência comum para desenvolvimento, publicação, diagnóstico e recuperação.',
    problem: 'As informações sobre serviços e procedimentos estavam dispersas, o que dificultava encontrar a origem de uma aplicação ou saber como operá-la.',
    decision: 'Organizar o inventário e reunir os procedimentos recorrentes em guias e runbooks.',
    outcome: 'Inventário de aplicações e serviços e orientações para desenvolver, publicar, diagnosticar e recuperar aplicações.',
    tags: ['Liderança técnica', 'Documentação'],
  },
  {
    stage: 'Entregar',
    title: 'CI/CD com imagens versionadas',
    description: 'Conduzi pilotos que separam build, publicação e deploy. A mesma imagem validada pode ser promovida sem reconstrução em produção, com validação pós-deploy e procedimento de retorno.',
    problem: 'Construir imagens no servidor de produção disputava recursos com aplicações em execução e dificultava rastrear a versão publicada.',
    decision: 'Separar build e deploy para promover a mesma imagem versionada, sem reconstruí-la em produção.',
    outcome: 'Pilotos com GitHub Actions, Docker e GHCR, com verificação após o deploy e procedimento de rollback.',
    tags: ['GitHub Actions', 'Docker', 'GHCR'],
  },
  {
    stage: 'Operar',
    title: 'Observabilidade em produção',
    description: 'Evoluí o monitoramento com alertas que identificam o serviço afetado, trazem contexto para diagnóstico e sinalizam quando o problema foi resolvido.',
    problem: 'Os alertas nem sempre deixavam claro qual serviço investigar ou quando a condição tinha voltado ao normal.',
    decision: 'Levar ao Teams alertas com identificação do serviço, contexto de diagnóstico e aviso de recuperação.',
    outcome: 'Alertas de produção com Prometheus e Alertmanager, notificações no Teams e runbooks para orientar a investigação.',
    tags: ['Prometheus', 'Alertmanager', 'Teams'],
  },
];

// Titles and periods follow the existing portfolio.
export const experiences = [
  {
    company: 'Make Consultores',
    period: 'Out. 2025 — atual',
    sector: 'Comércio exterior',
    description: 'Sou responsável pela equipe de TI e oriento o time de desenvolvimento na definição de padrões técnicos. Atuo na evolução de aplicações, APIs e integrações que apoiam a operação de comércio exterior, além de iniciativas de CI/CD e observabilidade.',
    tags: ['APIs e integrações', 'GitHub Actions', 'Docker', 'Prometheus'],
  },
  {
    company: 'NEORIS',
    period: 'Fev. 2024 — Abr. 2024',
    sector: 'Varejo',
    description: 'Colaborei na evolução do sistema de gestão de estoque das lojas BR Mania, da Vibra Energia. Participei da migração de Angular para React e de entregas no backend, com refinamento de requisitos, testes e documentação.',
    tags: ['React', 'Angular', 'NestJS', 'Prisma', 'PostgreSQL'],
  },
  {
    company: 'Foursys',
    period: 'Abr. 2022 — Fev. 2024',
    sector: 'Serviços financeiros',
    description: 'Atuei na evolução da área de investimentos do aplicativo do Bradesco. Desenvolvi telas e microfrontends para produtos de investimento e serviços de apoio, e acompanhei entregas em produção, monitoramento e análise de incidentes.',
    tags: ['Angular', 'Node.js', 'Java', 'Redis', 'Kafka'],
  },
  {
    company: 'Oi S/A e V.tal',
    period: 'Jan. 2021 — Abr. 2022',
    sector: 'Telecomunicações',
    description: 'Na Oi, trabalhei na revisão de repositórios, na atualização de páginas legadas e na manutenção de sistemas web. Na mesma equipe, já na V.tal, participei da implementação de gateways para APIs externas e do PortalDEV, voltado a documentação com Swagger e versionamento.',
    tags: ['React', 'Java', 'Node.js', 'API Gateway', 'Swagger'],
  },
  {
    company: 'Radix Engenharia e Software',
    period: 'Mai. 2018 — Jan. 2021',
    sector: 'Energia e combustíveis',
    description: 'Participei de projetos para o grupo Ipiranga, incluindo uma aplicação que consultava preços de aquisição de combustíveis e calculava custos considerando transporte, impostos e preços do dia. Também colaborei em um aplicativo de pedidos de combustível para postos.',
    tags: ['Angular', 'Java', 'Spring', 'Oracle', 'React Native', 'Node.js'],
  },
  {
    company: 'Metatron',
    period: 'Fev. 2015 — Abr. 2018',
    sector: 'Telecomunicações',
    description: 'Desenvolvi e mantive funcionalidades do OiVende, usado por lojistas da Oi para consultar viabilidade de instalação e ofertas disponíveis por região. A aplicação consolidava dados de APIs e bancos de dados; também atuei com testes, requisitos e acompanhamento de entregas.',
    tags: ['Java', 'Spring', 'Hibernate', 'JSP', 'JavaScript', 'LumisPortal'],
  },
];

export const earlierExperience = [
  { company: 'WebAmericas', role: 'Desenvolvedor JavaScript', period: 'Jul. 2014 — Fev. 2015' },
  { company: 'Acol Consultoria & Sistemas', role: 'Desenvolvedor Java', period: 'Jan. 2014 — Abr. 2014' },
  { company: 'Stefanini', role: 'Desenvolvedor Java', period: 'Jul. 2012 — Jan. 2014' },
];

export const skills = [
  {
    label: 'Interface',
    title: 'Frontend e mobile',
    description: 'Telas web e mobile que conectam usuários aos fluxos do sistema.',
    example: 'Na NEORIS, participei da migração de Angular para React no sistema de gestão de estoque da BR Mania. Na Foursys, desenvolvi telas e microfrontends para o app do Bradesco.',
    items: ['React', 'Angular', 'React Native', 'Microfrontends'],
  },
  {
    label: 'APIs e integrações',
    title: 'Backend e integração entre sistemas',
    description: 'APIs e mensageria para compartilhar dados e automatizar processos entre aplicações.',
    example: 'Na V.tal, participei da implementação de gateways para APIs externas e do PortalDEV, voltado à documentação com Swagger e ao versionamento.',
    items: ['Java / Spring', 'Node.js / NestJS', 'APIs REST', 'Mensageria'],
  },
  {
    label: 'Dados',
    title: 'Persistência e cache',
    description: 'PostgreSQL e Oracle para persistência relacional; Redis para cache e acesso rápido a dados.',
    example: 'Na NEORIS, contribuí para o backend do sistema de estoque da BR Mania, que usava Prisma e PostgreSQL.',
    items: ['PostgreSQL', 'Oracle', 'Redis', 'Prisma / Hibernate'],
  },
  {
    label: 'Entrega e operação',
    title: 'Publicação, monitoramento e recuperação',
    description: 'Práticas que atravessam as camadas: publicar versões rastreáveis, acompanhar a saúde do sistema e recuperar serviços.',
    example: 'Na Make, conduzi pilotos de CI/CD com imagens versionadas e evoluí os alertas de produção com contexto para diagnóstico e aviso de recuperação.',
    items: ['GitHub Actions', 'Docker', 'Prometheus', 'Runbooks e rollback'],
  },
];
