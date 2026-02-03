/**
 * Constants - Three Devs
 * Dados compartilhados entre componentes
 * Design: Editorial Bold (Lando Norris style)
 */

export const COMPANY = {
  name: 'Three Devs',
  description: 'Transformamos ideias em soluções digitais de alta performance. Especialistas em React, Node.js, TypeScript e arquiteturas escaláveis.',
  tagline: 'Desenvolvimento Full Stack de Alta Performance',
  whatsappLink: 'https://wa.me/5585991082608',
  phone: '+55 85 99108-2608',
  email: 'contato@threedevs.com.br',
};

// Aliases for backward compatibility
export const COMPANY_NAME = COMPANY.name;
export const COMPANY_DESCRIPTION = COMPANY.description;
export const WHATSAPP_LINK = COMPANY.whatsappLink;
export const PHONE = COMPANY.phone;

export const SOCIAL_LINKS = {
  whatsapp: COMPANY.whatsappLink,
};

export const NAV_LINKS = [
  { label: 'Projetos', href: '#projetos' },
  { label: 'Skills', href: '#skills' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' }
];

export const COLORS = {
  primary: '#CCFF00',
  background: '#2A2A1E',
  backgroundAlt: '#F5F5E8',
  foreground: '#F0F0E0',
  olive: '#3D3D29',
  cream: '#F5F5E8',
};

export const METADATA = {
  title: 'Three Devs | Desenvolvimento Full Stack de Alta Performance',
  description: 'Transformamos ideias em soluções digitais de alta performance. Especialistas em React, Node.js, TypeScript e arquiteturas escaláveis.',
  keywords: 'desenvolvimento web, full stack, React, Next.js, Node.js, TypeScript, performance, Brasil',
  ogImage: '/logo.png',
  themeColor: '#2A2A1E',
};

export const PROJECTS = [
  {
    id: 1,
    title: 'E-commerce Premium',
    category: 'Web App',
    description: 'Plataforma de e-commerce completa com checkout otimizado e painel administrativo.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    category: 'SaaS',
    description: 'Sistema de analytics em tempo real com visualizações interativas.',
    tech: ['React', 'D3.js', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: 3,
    title: 'App de Delivery',
    category: 'Mobile',
    description: 'Aplicativo de delivery com rastreamento em tempo real e pagamentos integrados.',
    tech: ['React Native', 'Firebase', 'Maps'],
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80',
  },
  {
    id: 4,
    title: 'Sistema de Gestão',
    category: 'Enterprise',
    description: 'ERP completo para gestão empresarial com módulos integrados.',
    tech: ['TypeScript', 'GraphQL', 'AWS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
];

export const SKILLS = {
  frontend: {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  backend: {
    title: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  devops: {
    title: 'DevOps',
    items: ['Docker', 'AWS', 'Vercel', 'CI/CD', 'GitHub Actions'],
  },
};

export const DIFFERENTIALS = [
  {
    number: '01',
    title: 'Performance',
    subtitle: 'Obsessão',
    description: 'Cada milissegundo importa. Otimizamos cada linha de código para entregar a melhor experiência possível aos seus usuários.',
  },
  {
    number: '02',
    title: 'Qualidade',
    subtitle: 'Excelência',
    description: 'Código limpo, testado e documentado. Seguimos as melhores práticas da indústria para garantir manutenibilidade.',
  },
  {
    number: '03',
    title: 'Inovação',
    subtitle: 'Vanguarda',
    description: 'Utilizamos as tecnologias mais modernas do mercado para criar soluções que se destacam da concorrência.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery',
    description: 'Entendemos seu negócio e objetivos',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Criamos a arquitetura e protótipos',
  },
  {
    step: '03',
    title: 'Develop',
    description: 'Desenvolvemos com qualidade',
  },
  {
    step: '04',
    title: 'Deploy',
    description: 'Entregamos e damos suporte',
  },
];
