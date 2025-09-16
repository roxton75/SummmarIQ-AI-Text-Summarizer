# SummarIQ: AI Powered Summarizer

SummarIQ is an AI-powered content summarization tool built with Next.js. It allows users to input text and receive concise, high-quality summaries using Google Gemini AI.

## Features
- Summarize any text with a single click
- Choose between "Normal" and "Abstracted" summary styles
- Clean, modern UI
- Justified summary output for readability

## Tech Stack
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Google Gemini AI](https://makersuite.google.com/)
- Tailwind CSS (via custom classes)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/roxton75/SummmarIQ-AI-Text-Summarizer.git
cd SummmarIQ-AI-Text-Summarizer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory and add your Google Gemini API key:
```
GOOGLE_GENERATIVE_AI_API_KEY=your-api-key-here
```

### 4. Run the development server
```bash
npm run dev
```

## Build for Production
```bash
npm run build
npm start
```

## Deployment

### Deploy on Vercel
- Push your code to GitHub
- Import your repo on [vercel.com](https://vercel.com)
- Set environment variables in the Vercel dashboard
- Click "Deploy"

### Deploy on Netlify
- Push your code to GitHub
- Import your repo on [netlify.com](https://netlify.com)
- Set build command: `npm run build`
- Set publish directory: `.next`
- Add environment variables in Site Settings
- Click "Deploy site"

## Live Preview
Visit [SummarIQ](https://summariq.netlify.app/) to use the app.

## Contact 
Created by [roxton75](https://github.com/roxton75) - feel free to reach out for questions or collaboration.

## License
[MIT](LICENSE)
