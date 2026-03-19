# Guia: Como usar o Claude Code com esse projeto

## O que é o Claude Code

Claude Code é a ferramenta CLI da Anthropic que roda no terminal e age como um agente de desenvolvimento. Ele lê arquivos, escreve código, executa comandos, e navega pelo projeto — tudo conversacional. A diferença de usar o Claude na web (como estamos fazendo agora) é que ele tem acesso direto ao filesystem, ao git, e ao terminal.

## O conceito central: CLAUDE.md

O `CLAUDE.md` é o arquivo que o Claude Code lê automaticamente no início de **toda sessão**. Ele funciona como o "onboarding" do Claude no seu projeto. Sem ele, toda vez que você abre o Claude Code, precisa re-explicar o projeto, a stack, as regras de design, os padrões de código.

**Regra importante:** o CLAUDE.md não é para enfiar tudo que você sabe sobre o projeto. Ele é para informações concisas e universalmente aplicáveis — e ponteiros para documentação detalhada. O Claude Code trata o conteúdo do CLAUDE.md como "contexto que pode ou não ser relevante" e pode ignorar instruções que não parecem relevantes para a tarefa atual. Por isso, menos é mais.

## Estrutura que preparei

```
portfolio/
├── CLAUDE.md                    ← Claude lê isso TODA sessão
├── .claude/
│   ├── settings.json            ← Hooks (ex: bloqueia edição na main)
│   └── commands/                ← Slash commands customizados
│       ├── section.md           ← /section Hero → implementa seção
│       ├── component.md         ← /component TechBadge → cria componente
│       ├── audit.md             ← /audit → verifica compliance com design
│       └── perf.md              ← /perf → checa build e performance
├── docs/
│   ├── DESIGN_SPEC.md           ← Especificação visual completa
│   ├── DEV_PLAN.md              ← Plano de desenvolvimento e arquitetura
│   └── WIREFRAME_NOTES.md       ← Anatomia das seções extraída do wireframe
└── src/ (... código do projeto)
```

## Como instalar e rodar

### 1. Instalar o Claude Code
```bash
npm install -g @anthropic-ai/claude-code
```
Requer Node.js 18+. Autenticação via OAuth (conta Pro/Max) ou API key.

### 2. Criar o projeto Astro
```bash
npm create astro@latest portfolio -- --template minimal --typescript strict
cd portfolio
```

### 3. Copiar os arquivos de contexto
Copie toda a estrutura que preparei para dentro do seu projeto:
- `CLAUDE.md` na raiz
- `.claude/` com settings e commands
- `docs/` com as specs

### 4. Iniciar o Claude Code
```bash
cd portfolio
claude
```

Ele automaticamente lê o CLAUDE.md e tem contexto do projeto.

## Como usar no dia a dia

### Conversação natural
```
> Implementa a seção Hero seguindo a spec de design
```
O Claude vai ler o CLAUDE.md, ver que existe `docs/DESIGN_SPEC.md`, ler a seção Hero de lá, e implementar seguindo as regras.

### Slash commands (atalhos)
```
> /section Hero
> /section About
> /component TechBadge
> /audit
> /perf
```
Cada comando já tem instruções detalhadas embutidas.

### Referência direta a docs
```
> Leia docs/DESIGN_SPEC.md e implemente o componente ProjectCard exatamente como especificado
```

### Correções em tempo real
```
> Esse card está usando #F28705 hardcoded. Use a variável --accent
> O body text está usando --text-primary, deveria ser --text-muted
```

## Workflow recomendado por fase

### Fase 0: Setup
```bash
claude
> Inicialize o projeto Astro com TypeScript e Tailwind CSS v4. 
> Configure os design tokens de docs/DESIGN_SPEC.md como CSS custom 
> properties em src/styles/tokens.css e estenda o Tailwind config 
> para usar esses tokens.
```

### Fase 1: Seções
```bash
# Crie uma branch para cada seção
git checkout -b feature/hero

claude
> /section Hero
```
Revise, ajuste, commite. Próxima seção, próxima branch.

### Fase 2: Animações
```bash
git checkout -b feature/animations

claude
> Leia docs/DESIGN_SPEC.md seção "Animations" e implemente todas 
> as animações Priority 0 e Priority 1. Garanta que prefers-reduced-motion 
> desabilita todas elas.
```

### Fase 3: Polish
```bash
claude
> /audit
> /perf
```

## O que cada arquivo faz

### CLAUDE.md (raiz)
O que o Claude vê TODA sessão:
- Stack e comandos de dev
- Estrutura de diretórios
- Design tokens resumidos (regras-chave)
- Convenções de código
- Ponteiros para docs detalhados

**Não está aqui:** spec completa de cada seção, wireframe detalhado, plano de fases — isso fica em `docs/` e o Claude busca quando precisa.

### docs/DESIGN_SPEC.md
A spec visual completa: paleta, tipografia, containers, anatomia de cada seção, animações, componentes, acessibilidade. O Claude lê isso quando vai implementar algo visual.

### docs/DEV_PLAN.md
Arquitetura, decisões técnicas, fases do projeto, targets de performance. O Claude lê isso quando precisa de contexto sobre decisões de stack.

### docs/WIREFRAME_NOTES.md
Dimensões e proporções extraídas dos SVGs de wireframe. Referência para implementação de layout.

### .claude/commands/
Slash commands que encapsulam prompts complexos em atalhos simples:
- `/section [nome]` — implementa uma seção completa
- `/component [nome]` — cria um componente novo
- `/audit` — verifica compliance com o design system
- `/perf` — checa build e performance

### .claude/settings.json
Hook que bloqueia edição diretamente na branch main. Força o workflow de feature branches.

## Dicas importantes

1. **Uma feature por sessão.** Não tente fazer tudo numa conversa só. O context window enche e o Claude começa a esquecer instruções. Melhor: uma sessão para o Hero, outra para o About, outra para animações.

2. **Corrija rápido.** Se o Claude tomou uma direção errada, interrompa com Esc e redirecione. Não deixe ele ir longe num caminho ruim.

3. **Use /compact se a sessão ficar longa.** O comando compacta o histórico da conversa para liberar espaço no context window.

4. **CLAUDE.md evolui com o projeto.** Conforme você descobre padrões que repete, adicione ao CLAUDE.md. Use # no Claude Code para adicionar memórias rápidas.

5. **Commite os docs.** O `CLAUDE.md`, `.claude/`, e `docs/` devem estar no git. Assim qualquer sessão nova do Claude Code já tem o contexto.
