# MetaMate Local Setup Guide

This guide will help you set up and run MetaMate locally on your machine.

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16+) and npm
- **Python** (v3.8+)
- **MongoDB** (local installation or cloud account)
- **Docker** (for running the Services component)
- **Google API credentials** (for Google Meet and Gemini integration)

## Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/MetaMate.git
cd MetaMate
```

## Step 2: Set Up Environment Variables

### Backend Environment Setup

Create a `.env` file in the `Backend` directory:

```
# Backend/.env
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Frontend Environment Setup

Create a `.env` file in the `Frontend` directory:

```
# Frontend/.env
VITE_BACKEND=http://localhost:5000
VITE_FRONTEND=http://localhost:5173
VITE_FRONTEND_TWO=http://localhost:3000
```

### Chatbot Environment Setup

Create a `.env` file in the `Chatbot` directory:

```
# Chatbot/.env
VITE_BACKEND=http://localhost:5000
VITE_FRONTEND=http://localhost:5173
VITE_FRONTEND_TWO=http://localhost:5173
```

### Services Environment Setup

Create a `.env` file in the `Services` directory:

```
# Services/.env
GMAIL_USER_EMAIL=yourbot@email.com
GMAIL_USER_PASSWORD=your_app_password
GOOGLE_API_KEY=your_gemini_api_key
SERVER_API=http://localhost:5000
MAX_WAIT_TIME_IN_MINUTES=60
```

## Step 3: Install Dependencies and Start Services

### Backend Setup

```bash
cd Backend
npm install
npm run start
```

The backend server will start on port 5000.

### Frontend Setup

```bash
cd Frontend
npm install
npm run dev
```

The frontend will start on port 5173.

### Chatbot Setup

```bash
cd Chatbot
npm install
npm run dev
```

The chatbot will start on port 3000.

### Services Setup

For the Python services component, you have two options:

#### Option 1: Run directly with Python

```bash
cd Services
pip install -r requirements.txt
python server.py
```

#### Option 2: Run with Docker (Recommended)

```bash
cd Services
docker build -t metamate .
docker run -it -p 7000:7000 \
  -e GMAIL_USER_EMAIL=yourbot@email.com \
  -e GMAIL_USER_PASSWORD=YOUR_PASSWORD \
  -e GOOGLE_API_KEY="<----YOUR API KEY---->" \
  -e SERVER_API=http://localhost:5000 \
  -e MAX_WAIT_TIME_IN_MINUTES=60 \
  -v $PWD/storage:/app/storage \
  metamate
```

## Step 4: Set Up Google Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Add this key to your user profile in MetaMate

## Step 5: Create Your First User

1. Open the Frontend application at http://localhost:5173
2. Click on "Get Started" and register a new user
3. After registration, you'll be prompted to add your Gemini API key
4. Configure your profile with personal information

## Step 6: Start Using MetaMate

Once you've completed the setup, you can:

1. Access your personal dashboard at http://localhost:5173
2. Share your chatbot with others at http://localhost:3000/username
3. Configure your digital twin with personalized information
4. Set up meeting attendance and task scheduling

## Troubleshooting

### Connection Issues

- Make sure all environment variables are correctly set
- Verify MongoDB is running and accessible
- Check that all services are running on their expected ports

### API Key Issues

- Verify your Gemini API key is valid and has not expired
- Check for quota limitations on your Google API key

### Meeting Attendance Issues

- Ensure the Gmail credentials have proper permissions
- Check Docker logs for any errors in the Services component

## Customization

To customize MetaMate for your own use:

1. Modify the branding in `Frontend/src/components/FrontPage.jsx`
2. Update the logo by replacing `MetaMate.png` with your own logo
3. Adjust the prompts in `Chatbot/src/services/ai.jsx` to match your use case

## Deployment

For production deployment:

1. Set up a MongoDB Atlas account for cloud database
2. Deploy Backend to a service like Heroku, Railway, or Render
3. Deploy Frontend and Chatbot to Vercel or Netlify
4. Run Services on a VPS with Docker installed

## Support

If you encounter any issues, please check the GitHub repository for updates or open an issue.

Happy MetaMate-ing! 