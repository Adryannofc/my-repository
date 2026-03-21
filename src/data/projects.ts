export interface Project {
  id: number;
  name: string;
  descriptionEn: string;
  descriptionPtBr: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'API Gateway',
    descriptionEn: 'Centralized gateway handling auth, rate limiting, and routing for internal microservices.',
    descriptionPtBr: 'Gateway centralizado com autenticação, rate limiting e roteamento para microsserviços internos.',
    technologies: ['Node.js', 'TypeScript', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/username/api-gateway',
  },
  {
    id: 2,
    name: 'Dev CLI',
    descriptionEn: 'Command-line tool that scaffolds project structures and automates local environment setup.',
    descriptionPtBr: 'Ferramenta de linha de comando que cria estruturas de projeto e automatiza o ambiente local.',
    technologies: ['TypeScript', 'Node.js', 'Shell'],
    githubUrl: 'https://github.com/username/dev-cli',
    liveUrl: 'https://npmjs.com/package/dev-cli',
  },
  {
    id: 3,
    name: 'Query Monitor',
    descriptionEn: 'PostgreSQL query profiler that surfaces slow queries and suggests index improvements in real time.',
    descriptionPtBr: 'Profiler de queries PostgreSQL que detecta consultas lentas e sugere índices em tempo real.',
    technologies: ['PostgreSQL', 'Python', 'FastAPI'],
    githubUrl: 'https://github.com/username/query-monitor',
  },
  {
    id: 4,
    name: 'Deploy Pipeline',
    descriptionEn: 'Zero-downtime deployment pipeline with rollback support, health checks, and Slack notifications.',
    descriptionPtBr: 'Pipeline de deploy com suporte a rollback, health checks e notificações no Slack sem downtime.',
    technologies: ['GitHub Actions', 'Docker', 'Bash'],
    githubUrl: 'https://github.com/username/deploy-pipeline',
    liveUrl: 'https://example.com/deploy-pipeline',
  },
];
