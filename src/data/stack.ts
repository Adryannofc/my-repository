import {
  siTypescript,
  siJavascript,
  siReact,
  siAstro,
  siHtml5,
  siCss,
  siNodedotjs,
  siPostgresql,
  siDocker,
  siGit,
} from 'simple-icons';

export interface StackItem {
  name: string;
  svgPath: string;
}

export interface StackCategory {
  labelEn: string;
  labelPtBr: string;
  items: StackItem[];
}

export const stackCategories: StackCategory[] = [
  {
    labelEn: 'Languages',
    labelPtBr: 'Linguagens',
    items: [
      { name: 'TypeScript', svgPath: siTypescript.path },
      { name: 'JavaScript', svgPath: siJavascript.path },
    ],
  },
  {
    labelEn: 'Frontend',
    labelPtBr: 'Frontend',
    items: [
      { name: 'React', svgPath: siReact.path },
      { name: 'Astro', svgPath: siAstro.path },
      { name: 'HTML5', svgPath: siHtml5.path },
      { name: 'CSS',   svgPath: siCss.path   },
    ],
  },
  {
    labelEn: 'Backend & Tools',
    labelPtBr: 'Backend e Ferramentas',
    items: [
      { name: 'Node.js',    svgPath: siNodedotjs.path  },
      { name: 'PostgreSQL', svgPath: siPostgresql.path },
      { name: 'Docker',     svgPath: siDocker.path     },
      { name: 'Git',        svgPath: siGit.path        },
    ],
  },
];
