# MetaMate - Your Digital Twin, Always On.

<p align="center">
  <img src="MetaMate.png" alt="MetaMate Logo" width="200">
</p>

## 🚀 Introduction

Welcome to **MetaMate** — a personalized AI assistant that acts as your digital twin when you're unavailable. Whether you're a busy professional, a college student, or someone who needs a virtual presence, MetaMate has got you covered!

## 🎯 Problem We're Solving

In today's fast-paced world, people often struggle to manage multiple tasks simultaneously. Professionals miss meetings, students forget important deadlines, and important information gets lost in the shuffle. MetaMate addresses this by creating a personalized AI assistant that represents you, handles queries, manages your schedule, and even joins meetings on your behalf.

## 💡 What is MetaMate?

MetaMate is a comprehensive AI-powered assistant that:

- **Acts as your digital twin** - Answers questions based on data you've fed into it
- **Manages your schedule** - Sets up meetings and sends reminders
- **Attends meetings for you** - Records, transcribes, and summarizes meetings
- **Multilingual support** - Communicates in multiple languages
- **Context-aware** - Understands your preferences, schedule, and responsibilities

## 🤖 Core Features

### 1. Personalized AI Training
Feed MetaMate with your personal data, professional information, or academic details to create a virtual representation of yourself.

### 2. Meeting Management
Schedule, record, transcribe, and summarize meetings with intelligent follow-up capabilities.

### 3. Task & Reminder System
Never miss a deadline or important event with smart, context-aware reminders.

### 4. Contextual Question Answering
Visitors can ask your AI about you, your work, availability, and more.

## 💬 Sample Interactions

Here are some examples of how you can interact with MetaMate:

### Scheduling Meetings
```
User: "Schedule a meeting with Sarah about the marketing proposal at 2 PM today"
MetaMate: "I've scheduled a meeting with Sarah at 2 PM today about the marketing proposal. The Google Calendar invite has been sent to both of you."
```

### Training Your Assistant
```
User: "Save this information: I'm working on Project Phoenix which is due on May 15th"
MetaMate: "Information saved. I now know you're working on Project Phoenix with a May 15th deadline."

User: "Add to my profile that I prefer morning meetings between 9-11 AM"
MetaMate: "Added to your profile. I'll prioritize scheduling meetings between 9-11 AM when possible."
```

### For Visitors Interacting with Your Assistant
```
Visitor: "What projects is [Your Name] currently working on?"
MetaMate: "[Your Name] is currently working on Project Phoenix, which has a deadline of May 15th."

Visitor: "When is [Your Name] available for a meeting this week?"
MetaMate: "[Your Name] prefers morning meetings between 9-11 AM. They have availability on Tuesday and Thursday mornings this week."
```

### Meeting Companion Features
```
User: "Summarize my meeting with the design team from yesterday"
MetaMate: "In your meeting with the design team yesterday, you discussed the new UI mockups. Action items include: 1) Sarah to refine the homepage design by Friday, 2) You to provide feedback on color schemes by Wednesday, 3) Next review scheduled for Monday at 10 AM."
```

## 🛠️ Technical Architecture

### System Components

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

### Component Details

#### Frontend (React + Vite)
- User registration and profile management
- Dashboard for monitoring assistant activities
- Configuration interface for personalization

#### Chatbot (React + Vite)
- Conversational interface for users and visitors
- Real-time interaction with the AI assistant
- Admin panel for managing assistant behavior

#### Backend (Node.js + Express)
- API endpoints for user authentication and data management
- MongoDB integration for data persistence
- Google API integrations (Calendar, OAuth)
- Task and meeting management

#### Services (Python)
- Google Meet integration for automated meeting attendance
- Audio processing with Deepgram for transcription
- LLM integration with Google Gemini for content generation
- Meeting recording and summarization

### Data Flow

1. User registers and configures their digital twin
2. Assistant collects and processes user data
3. Visitors interact with the assistant through the chatbot interface
4. Assistant joins meetings, records, and processes content
5. Backend stores and retrieves data as needed

## 📋 Flow Architecture

1. **User Registration & Profile Creation**
   - Create account
   - Define use case (Professional/Student/Custom)
   - Configure preferences
   
2. **Data Ingestion & Training**
   - Upload personal information
   - Connect calendars
   - Add projects/courses/responsibilities
   - All data securely embedded and stored
   
3. **Assistant Deployment**
   - Unique URL for visitors to interact with your assistant
   - Integration with calendar and communication tools
   
4. **Meeting Companion Bot**
   - Joins meetings 5 minutes before start time
   - Records video and audio
   - Transcribes conversations using Deepgram
   - Generates summaries using LangChain and Google Gemini
   - Extracts action items and key points
   
5. **Intelligent Reminders**
   - Context-aware notifications
   - Deadline alerts
   - Meeting preparations

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16+) and npm
- **Python** (v3.8+)
- **MongoDB** database
- **Docker** (for Services component)
- **Google API credentials** (for Google Meet and Gemini integration)

### Environment Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/metamate.git
cd metamate
```

2. **Set up environment variables**

Create `.env` files in the Backend and Services directories with the following variables:

```
# Backend/.env
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
```

```
# Services/.env
GMAIL_USER_EMAIL=yourbot@email.com
GMAIL_USER_PASSWORD=your_app_password
GOOGLE_API_KEY=your_gemini_api_key
SERVER_API=http://localhost:5000
MAX_WAIT_TIME_IN_MINUTES=1
```

### Installation

1. **Backend setup**

```bash
cd Backend
npm install
npm run start
```

2. **Frontend setup**

```bash
cd Frontend
npm install
npm run dev
```

3. **Chatbot setup**

```bash
cd Chatbot
npm install
npm run dev
```

4. **Services setup**

```bash
cd Services
./build.sh
docker run -it -p 5000:5000 \
  -e GMAIL_USER_EMAIL=yourbot@email.com \
  -e GMAIL_USER_PASSWORD=YOUR_PASSWORD \
  -e GOOGLE_API_KEY="<----YOUR API KEY---->" \
  -e SERVER_API=http://localhost:5000 \
  -e MAX_WAIT_TIME_IN_MINUTES=1 \
  -v $PWD/storage:/app/storage \
  metamate
```

## 🔒 Privacy & Security

MetaMate takes your privacy seriously:
- All data is encrypted at rest and in transit
- Fine-grained control over what information your assistant can share
- Option to set expiration dates for sensitive information
- Clear data deletion policies

We're excited to bring MetaMate to the world and revolutionize how people manage their digital presence!

## 📄 License

Fork it, clone it, ship it.

Just don't say you wrote it while blasting lofi and drinking chai under a red LED light at 3:00 AM.
We earned that vibe.😄

## 📺 Demo Video

[![MetaMate Demo](MetaMate.png)](https://www.youtube.com/watch?v=your-video-id)


