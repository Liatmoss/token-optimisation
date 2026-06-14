const slide = {
  layout: 'split-list',
  title: 'Keep Instruction Files Short',
  examples: {
    vague: `# My Project\nThis project is a React application that uses TypeScript and we use Vite for bundling. The team prefers functional components over class components. Always use arrow functions. Never use var, always use const or let. We use ESLint and Prettier for formatting. Make sure to follow the existing code style throughout the project. The project also uses Tailwind CSS for styling and we prefer utility classes over custom CSS where possible...`,
    specific: `# My Project\nStack: React, TypeScript, Vite, Tailwind CSS\n- Functional components, arrow functions, const/let only\n- Styles: Tailwind utility classes preferred\n- Lint/format: ESLint + Prettier (runs on save)\n- Tests: Vitest, run with npm test`,
  },
  items: [
    {
      icon: 'book',
      color: '#2dd4bf',
      text: 'Instruction files (CLAUDE.md, copilot-instructions.md, AGENTS.md) are loaded into every session',
    },
    {
      icon: 'lightning',
      color: '#a78bfa',
      text: 'Every line consumes context and tokens before you\'ve typed a single prompt',
    },
    {
      icon: 'target',
      color: '#f59e0b',
      text: 'Aim for under 200 lines — include only what the AI needs to know, not everything about the project',
    },
    {
      icon: 'sparkle',
      color: '#06d6a0',
      text: 'Review and trim regularly — outdated instructions waste tokens every session',
    },
  ],
}

export default slide
