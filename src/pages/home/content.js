export const deliveries = [
  {
    title: 'Padrões para o time de TI',
    description: 'Estruturei o inventário de aplicações e serviços e organizei guias e runbooks. O time ganhou uma referência comum para desenvolvimento, publicação, diagnóstico e recuperação.',
    tags: ['Liderança técnica', 'Documentação'],
  },
  {
    title: 'CI/CD com imagens versionadas',
    description: 'Conduzi pilotos que separam build, publicação e deploy. A mesma imagem validada pode ser promovida sem reconstrução em produção, com validação pós-deploy e procedimento de retorno.',
    tags: ['GitHub Actions', 'Docker', 'GHCR'],
  },
  {
    title: 'Observabilidade em produção',
    description: 'Evoluí o monitoramento com alertas que identificam o serviço afetado, trazem contexto para diagnóstico e sinalizam quando o problema foi resolvido.',
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
  { label: 'Backend e integração', items: ['Java / Spring', 'Node.js / NestJS', 'APIs REST', 'Mensageria'] },
  { label: 'Frontend e mobile', items: ['React', 'Angular', 'React Native', 'Microfrontends'] },
  { label: 'Dados', items: ['PostgreSQL', 'Oracle', 'Redis', 'Prisma / Hibernate'] },
  { label: 'Entrega e operação', items: ['GitHub Actions', 'Docker', 'Prometheus', 'Runbooks e rollback'] },
];
