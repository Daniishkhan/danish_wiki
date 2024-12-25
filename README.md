# ORR AI Chat Assistant

A React + TypeScript + Vite project powered by Bun, featuring an AI-powered chat assistant for Online Remote Recruiting (ORR).

## Tech Stack

- React 18
- TypeScript
- Vite
- Bun (Package Manager & Runtime)
- OpenAI API

## Getting Started

### Prerequisites

Make sure you have Bun installed on your system. If not, install it by running:

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

### Development

Run the development server:
```bash
bun dev
```

### Build

Create a production build:
```bash
bun run build
```

### Environment Variables

Create a `.env` file in the root directory with:
```env
VITE_OPENAI_API_KEY=your_api_key_here
```

## Features

- AI-powered chat interface
- Company knowledge base integration
- Real-time responses using OpenAI's GPT model
- TypeScript for type safety
- Fast development with Vite HMR

## Project Structure

```
src/
├── components/
│   └── Chat.tsx
├── lib/
│   └── knowledge-base.ts
└── ...
```

## License

[MIT](LICENSE)
