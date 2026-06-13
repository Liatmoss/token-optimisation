const slide = {
  layout: 'comparison-cards',
  title: 'What Is Eating Up Your Tokens',
  cards: [
    {
      icon: 'layers',
      heading: 'At the start of your session:',
      points: [
        {
          label: 'MCPs and Skills',
          text: 'MCP definitions, tools and schemas as well as definitions of skills may be included in the session\'s context window and can end up costing tokens',
        },
        {
          label: 'Large instruction files',
          text: 'Large instruction files including CLAUDE.md/copilot-instructions.md are read at the start of your session and parts may be brought back into the context window during the session if the tools find it necessary',
        },
        {
          label: 'Context accumulation',
          text: 'Restarting an existing session after some time or bringing in documentation to introduce previous content can take up a lot of space in your context window and end up costing tokens',
        },
      ],
    },
    {
      icon: 'lightning',
      heading: 'During your session:',
      points: [
        {
          label: 'Model responses',
          text: 'Large, verbose model responses take up tokens, even if this happens behind the scenes and does not appear on your screen',
        },
        {
          label: 'Images and screenshots',
          text: 'While images and screenshots may sometimes be necessary, they take a lot of tokens to read',
        },
        {
          label: 'Files referenced in prompts',
          text: 'When including files in your prompt, make sure they are necessary to what you are working on — files take tokens and memory to read, and if they\'re not relevant it\'s wasted tokens',
        },
        {
          label: 'Long prompts',
          text: 'Long prompts are great if they provide the right information, but prompts with unnecessary or missing information waste tokens because AI tools will need to read the prompt and then clarify',
        },
      ],
    },
  ],
}

export default slide
