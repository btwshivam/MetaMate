# MetaMate Frontend

<p align="center">
  <img src="../MetaMate.png" alt="MetaMate Logo" width="200">
</p>

The primary user interface for MetaMate - Your Digital Twin, Always On.

## Overview

The MetaMate Frontend provides a sleek, modern user interface for managing your digital twin. It's built with React and Vite for optimal performance and user experience.

## Features

- **User Dashboard**: Monitor your digital twin's activities and performance
- **Profile Management**: Configure your personal and professional information
- **Preference Settings**: Set your meeting preferences, availability, and communication style
- **Analytics**: View detailed reports on your assistant's interactions
- **Integration Management**: Connect with calendar, email, and messaging platforms

## Tech Stack

- **React**: UI library
- **Vite**: Build tool
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: Navigation
- **Axios**: API communication

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/metamate.git
cd metamate/Frontend
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Project Structure

```
src/
├── assets/       # Static assets like images and icons
├── components/   # Reusable UI components
├── App.jsx       # Main application component
├── App.css       # Application styles
├── main.jsx      # Entry point
└── index.css     # Global styles
```

## Connecting to Backend

The frontend connects to the MetaMate Backend API. Configure the API endpoint in your environment:

```
VITE_API_URL=http://localhost:5000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is available for use under the terms outlined in the LICENSE file.
