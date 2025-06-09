# MetaMate Backend

<p align="center">
  <img src="../MetaMate.png" alt="MetaMate Logo" width="200">
</p>

The API server for MetaMate - Your Digital Twin, Always On.

## Overview

The MetaMate Backend is the central server that handles data management, authentication, and integration with external services. It serves as the bridge between the user interfaces (Frontend and Chatbot) and the AI services that power your digital twin.

## Features

- **User Management**: Authentication, profile storage, and preference settings
- **Meeting Coordination**: Scheduling, tracking, and management of meetings
- **Task System**: Creation, assignment, and tracking of tasks and reminders
- **Google Integration**: OAuth2 authentication and Calendar API integration
- **Data API**: Endpoints for storing and retrieving user information

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: Database
- **Mongoose**: ODM for MongoDB
- **Google APIs**: Calendar, Authentication
- **JWT**: Authentication tokens

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB
- Google API credentials

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/metamate.git
cd metamate/Backend
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file with:
```
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the server
```bash
npm start
```

## API Routes

### Authentication
- **POST /auth/google**: Google OAuth login
- **POST /auth/logout**: Logout user
- **GET /auth/verify**: Verify authentication token

### User Management
- **GET /user**: Get user profile
- **PUT /user**: Update user profile
- **POST /user/preferences**: Set user preferences

### Meetings
- **POST /meeting/schedule**: Schedule a new meeting
- **GET /meeting/upcoming**: Get upcoming meetings
- **POST /meeting/join**: Request bot to join a meeting

### Tasks
- **POST /task**: Create a new task
- **GET /tasks**: Get all tasks
- **PUT /task/:id**: Update a task
- **DELETE /task/:id**: Delete a task

## Database Schema

### User
- Email (unique)
- Name
- Profile data
- Preferences
- Integrations

### Meeting
- ID
- Title
- Participants
- Datetime
- Link
- Status
- Summary (after completion)

### Task
- ID
- Title
- Description
- Due date
- Status
- Assignee

## Security

The backend implements several security measures:
- JWT-based authentication
- Input validation
- Rate limiting
- CORS protection

## License

This project is available for use under the terms outlined in the LICENSE file. 