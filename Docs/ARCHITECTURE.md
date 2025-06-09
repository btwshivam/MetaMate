# MetaMate Architecture Overview

This document provides a detailed explanation of the MetaMate system architecture, its components, and how they interact with each other.

## System Architecture

MetaMate follows a microservices architecture with four main components:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│    Frontend     │     │     Chatbot     │     │     Backend     │
│   (React.js)    │◄───►│   (React.js)    │◄───►│    (Node.js)    │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         ▼
                                               ┌─────────────────┐
                                               │    Services     │
                                               │    (Python)     │
                                               └─────────────────┘
```

### 1. Frontend (React + Vite)

The Frontend is responsible for user registration, profile management, and the main user interface.

**Key Files and Directories:**
- `Frontend/src/components/FrontPage.jsx` - Main landing page
- `Frontend/src/components/SignupPage.jsx` - User registration
- `Frontend/src/components/LoginPage.jsx` - User authentication
- `Frontend/src/components/AdminPanel.jsx` - User dashboard

**Technologies:**
- React.js with Vite
- Framer Motion for animations
- Tailwind CSS for styling
- Axios for API requests

### 2. Chatbot (React + Vite)

The Chatbot is a separate application that provides the conversational interface for users and visitors to interact with the digital twin.

**Key Files and Directories:**
- `Chatbot/src/components/ChatBot.jsx` - Main chat interface
- `Chatbot/src/components/UserVerificationPage.jsx` - User verification
- `Chatbot/src/services/ai.jsx` - Core AI functionality and API integration

**Technologies:**
- React.js with Vite
- Google Generative AI SDK
- Tailwind CSS for styling
- WebSockets for real-time communication

### 3. Backend (Node.js + Express)

The Backend serves as the central API server, handling authentication, data storage, and business logic.

**Key Files and Directories:**
- `Backend/server.js` - Main server file
- `Backend/models/` - MongoDB schemas
- `Backend/routes/` - API endpoints
- `Backend/middleware/` - Authentication and validation

**Technologies:**
- Node.js with Express
- MongoDB for data storage
- JWT for authentication
- Google API integrations

### 4. Services (Python)

The Services component handles specialized tasks such as Google Meet integration, audio processing, and meeting summarization.

**Key Files and Directories:**
- `Services/server.py` - Python API server
- `Services/metamate.py` - Google Meet attendance bot
- `Services/audio_processor.py` - Audio transcription and analysis
- `Services/Dockerfile` - Docker configuration

**Technologies:**
- Python
- Flask for API endpoints
- Selenium for browser automation
- FFmpeg for audio/video processing
- Google Generative AI for content generation

## Data Flow

### User Registration and Setup

1. User registers on the Frontend
2. Frontend sends registration data to Backend
3. Backend creates user record in MongoDB
4. User adds Gemini API key and personal information
5. Backend stores encrypted credentials

### Digital Twin Interaction

1. Visitor accesses the Chatbot with a user's unique link
2. Chatbot verifies the visitor and loads user data from Backend
3. Visitor sends a message to the digital twin
4. Chatbot processes the message using `ai.jsx` services
5. Google Generative AI generates a response based on user data
6. Response is displayed to the visitor

### Meeting Attendance Flow

1. User schedules a meeting via the Frontend
2. Backend creates a meeting record with Google Meet link
3. Services component polls for upcoming meetings
4. When meeting time approaches, Services launches metamate.py
5. Bot joins the meeting, records audio/video
6. After meeting ends, audio is processed and transcribed
7. Meeting summary is generated and stored in Backend
8. User is notified of the meeting summary

### Task Management Flow

1. Visitor requests a task via the Chatbot
2. AI detects task intent and extracts details
3. Backend creates a task record associated with the user
4. User receives notification about the new task
5. User can view and manage tasks via Frontend

## Database Schema

### User Collection

```javascript
{
  _id: ObjectId,
  name: String,
  username: String,
  email: String,
  password: String (hashed),
  geminiApiKey: String (encrypted),
  prompt: String,
  userPrompt: String,
  dailyTasks: {
    content: String
  },
  contributions: [
    {
      question: String,
      answer: String,
      status: String
    }
  ],
  accessList: [String],
  accessRestricted: Boolean
}
```

### Task Collection

```javascript
{
  _id: ObjectId,
  userId: String,
  taskQuestion: String,
  taskDescription: String,
  uniqueTaskId: String,
  status: String,
  createdAt: Date,
  topicContext: String,
  isMeeting: {
    date: String,
    time: String,
    duration: Number,
    title: String,
    description: String
  }
}
```

### Meeting Record Collection

```javascript
{
  _id: ObjectId,
  username: String,
  taskId: String,
  google_meeting_link: String,
  start_time: Date,
  duration: Number,
  status: String
}
```

## Authentication and Security

1. **JWT Authentication**
   - User login generates a JWT token
   - Token is verified on protected routes

2. **API Key Management**
   - Gemini API keys are encrypted in the database
   - Keys are decrypted only when needed for API calls

3. **Access Control**
   - Users can restrict access to their digital twin
   - Whitelist specific users who can interact with the twin

## Scaling Considerations

1. **Horizontal Scaling**
   - Backend and Services can be scaled independently
   - Stateless design allows for multiple instances

2. **Database Scaling**
   - MongoDB can be scaled with sharding
   - Indexes are used for efficient queries

3. **Caching Strategy**
   - Frequently accessed user data is cached
   - AI responses can be cached for common questions

## Integration Points

1. **Google Generative AI**
   - Used for natural language understanding and generation
   - Integrated via the Google Generative AI SDK

2. **Google Meet**
   - Used for meeting attendance
   - Integrated via browser automation with Selenium

3. **MongoDB Atlas**
   - Cloud database for data storage
   - Connected via MongoDB Node.js driver

4. **FFmpeg**
   - Used for audio/video processing
   - Integrated via command-line interface

## Deployment Architecture

For production deployment, the recommended architecture is:

```
                                    ┌─────────────────┐
                                    │   MongoDB Atlas │
                                    └────────┬────────┘
                                             │
                                             ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Frontend   │     │   Chatbot   │     │   Backend   │     │  Services   │
│  (Vercel)   │◄───►│  (Vercel)   │◄───►│  (Railway)  │◄───►│   (VPS)     │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
        ▲                  ▲                   ▲                   ▲
        │                  │                   │                   │
        └──────────────────┴───────────────────┴───────────────────┘
                                     │
                                     ▼
                             ┌─────────────────┐
                             │  Google Cloud   │
                             │    Platform     │
                             └─────────────────┘
```

This architecture ensures:
- Scalability for each component
- High availability
- Cost-effective resource utilization
- Separation of concerns

## Conclusion

MetaMate's architecture is designed to be modular, scalable, and extensible. Each component can be developed, deployed, and scaled independently, making it easy to maintain and enhance the system over time. 