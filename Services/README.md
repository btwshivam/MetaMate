# MetaMate Services

This directory contains the services that power MetaMate's meeting attendance and audio processing capabilities.

## Overview

The MetaMate Services component handles:

1. **Automated Meeting Attendance**: Joins Google Meet calls on your behalf
2. **Audio/Video Recording**: Records meeting content for later processing
3. **Transcription**: Converts speech to text using Deepgram
4. **AI Summarization**: Processes transcripts with Google Gemini to extract key points and action items

## Setup

### Prerequisites

- Docker
- Google account credentials
- Google API key for Gemini API
- Deepgram API key

### Configuration

Set the following environment variables:

```
GMAIL_USER_EMAIL=yourbot@email.com
GMAIL_USER_PASSWORD=your_app_password
GOOGLE_API_KEY=your_gemini_api_key
SERVER_API=http://localhost:5000
MAX_WAIT_TIME_IN_MINUTES=1
```

### Building the Docker Container

```bash
./build.sh
```

### Running the Service

```bash
docker run -it -p 5000:5000 \
  -e GMAIL_USER_EMAIL=yourbot@email.com \
  -e GMAIL_USER_PASSWORD=YOUR_PASSWORD \
  -e GOOGLE_API_KEY="<----YOUR API KEY---->" \
  -e SERVER_API=http://localhost:5000 \
  -e MAX_WAIT_TIME_IN_MINUTES=1 \
  -v $PWD/storage:/app/storage \
  metamate
```

## API Endpoints

- **POST /record_meeting**: Initiates recording for a Google Meet link
  - Requires: `google_meeting_link`, `taskId`, `username`
  - Returns: Recording ID

## Architecture

The service uses:
- **Python Flask**: For the API server
- **Selenium/Undetected Chrome**: For browser automation
- **FFmpeg**: For audio/video processing
- **Deepgram**: For speech-to-text transcription
- **Google Gemini**: For AI summarization

## Storage

Meeting recordings and transcripts are stored in the `storage/` directory, organized by meeting ID.
