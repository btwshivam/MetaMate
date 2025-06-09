# MetaMate Assistant

<p align="center">
  <img src="../MetaMate.png" alt="MetaMate Logo" width="200">
</p>

The conversational interface for MetaMate - Your Digital Twin, Always On.

## Overview

The MetaMate Assistant provides an intuitive chat interface for users and visitors to interact with your digital twin. Powered by advanced AI models, it delivers natural conversation experiences that represent you when you're unavailable.

## Features

- **Personalized Conversations**: Responds in your tone and style based on trained data
- **Contextual Awareness**: Understands conversation history and user preferences
- **Meeting Scheduling**: Can book appointments and manage your calendar
- **Information Retrieval**: Accesses your knowledge base to answer questions
- **Admin Controls**: Dashboard for monitoring and customizing your assistant's behavior
- **Multi-modal Support**: Handles text, links, and reference materials

## Tech Stack

- **React**: UI library
- **Vite**: Build tool
- **Google Generative AI**: For conversational capabilities
- **TailwindCSS**: Styling
- **Framer Motion**: Animations
- **Axios**: API communication

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- Google API key for Generative AI

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/metamate.git
cd metamate/Chatbot
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file with:
```
VITE_GOOGLE_API_KEY=your_google_api_key
VITE_BACKEND_URL=http://localhost:5000
```

4. Start development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── assets/                # Static assets
├── components/            # UI components
│   ├── ChatBot.jsx        # Main chat interface
│   ├── AdminPanel.jsx     # Admin controls
│   └── ...                # Other components
├── services/              # API and integration services
├── App.jsx                # Main application component
└── main.jsx               # Entry point
```

## Customization

The assistant can be customized in various ways:

- **Personality**: Adjust tone, style, and communication patterns
- **Knowledge Base**: Add specific information your assistant should know
- **Response Templates**: Create custom replies for common questions
- **Integration Hooks**: Connect with your tools and platforms

## Deployment

The chatbot can be deployed as a standalone application or embedded in your website:

```
# Build the application
npm run build

# Deploy to Vercel
vercel --prod
```

## License

This project is available for use under the terms outlined in the LICENSE file.
