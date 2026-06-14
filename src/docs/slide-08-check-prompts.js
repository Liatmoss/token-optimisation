const slide = {
  layout: 'split-list',
  title: 'Check Your Prompts',
  examples: {
    vague: 'Can you help me fix the bug in my code?',
    specific:
      'In Services/UserService.cs, the GetUserById method is returning null when a user doesn\'t exist. Update it to throw a UserNotFoundException instead — the exception class already exists in Exceptions/UserNotFoundException.cs. Don\'t change the method signature.',
  },
  items: [
    {
      icon: 'target',
      color: '#2dd4bf',
      text: 'Be specific and to the point',
    },
    {
      icon: 'shield',
      color: '#a78bfa',
      text: 'Short and vague prompts can result in poor or incorrect responses',
    },
    {
      icon: 'summarise',
      color: '#f59e0b',
      text: 'This could mean a lot more back and forth with the agent to clarify requirements',
    },
    {
      icon: 'sparkle',
      color: '#06d6a0',
      text: "Doesn't mean long points with too much information — find the right balance",
    },
  ],
}

export default slide
