# MetaMate Customization Guide

This guide will help you customize MetaMate to make it your own. Follow these steps to rebrand the application, modify functionality, and adapt it to your specific needs.

## Rebranding MetaMate

### 1. Change the Name and Logo

1. Replace the logo file:
   - Replace `MetaMate.png` in the root directory with your own logo
   - Make sure to keep the same filename or update all references

2. Update the Frontend branding:
   ```bash
   cd Frontend/src/components
   ```
   
   Edit `FrontPage.jsx` to change:
   - The main title "MetaMate" to your brand name
   - The tagline "Your Digital Twin, Always On"
   - The color scheme (search for "gradient" and modify the color values)

3. Update the Chatbot branding:
   ```bash
   cd Chatbot/src/components
   ```
   
   Edit `UserVerificationPage.jsx` to update:
   - All instances of "MetaMate" to your brand name
   - The color scheme and styling

### 2. Modify Content and Features

1. Edit the feature descriptions in `Frontend/src/components/FrontPage.jsx`:
   - Update the "Transform Your Daily Workflow" section
   - Modify the pricing plans in the "Choose Your Plan" section

2. Update the documentation in `Frontend/src/components/HowItWorksPage.jsx`

3. Update contact information in `Frontend/src/components/ContactUsPage.jsx`

## Customizing AI Behavior

### 1. Modify AI Prompts

The core AI functionality is in `Chatbot/src/services/ai.jsx`. You can customize:

1. The main prompt template:
   ```javascript
   const prompt = `
   You are ${userData.name}'s personal AI assistant. Answer based on the following details...
   // Modify this prompt to change the AI's personality and behavior
   `;
   ```

2. Task detection logic:
   ```javascript
   const detectionPrompt = `
   Analyze the following text and determine if it contains a request...
   // Customize how the AI detects tasks
   `;
   ```

3. Meeting extraction logic:
   ```javascript
   const extractMeetingDetails = async (message, userData) => {
     // Customize how meeting details are extracted
   };
   ```

### 2. Customize User Data Structure

1. Edit the user schema in `Backend/models/User.js` to add custom fields

2. Update the registration flow in `Backend/routes/auth.js` to handle your custom fields

3. Modify the frontend forms in `Frontend/src/components/SignupPage.jsx` to collect additional information

## Adding Custom Functionality

### 1. Add New API Endpoints

1. Create new route files in `Backend/routes/` for your custom functionality

2. Register the routes in `Backend/server.js`:
   ```javascript
   app.use('/api/your-feature', require('./routes/your-feature'));
   ```

### 2. Add New Frontend Components

1. Create new React components in `Frontend/src/components/`

2. Add navigation to your new components in the appropriate places

### 3. Extend the Digital Twin Capabilities

1. Modify the `Services/audio_processor.py` file to add custom processing for meeting recordings

2. Update the `Services/metamate.py` file to enhance meeting attendance capabilities

## Database Customization

1. Create new MongoDB schemas in `Backend/models/` for your custom data

2. Add appropriate API endpoints in `Backend/routes/` to handle CRUD operations

3. Update the frontend to interact with your new data models

## Deployment Customization

1. Create custom Docker configurations:
   - Modify the `Dockerfile` in the `Services` directory
   - Create new Dockerfiles for other components if needed

2. Set up CI/CD pipelines:
   - Create GitHub Actions workflows in `.github/workflows/`
   - Configure automated testing and deployment

## White-labeling for Enterprise Use

1. Create an environment-based configuration system:
   ```javascript
   // In config.js
   const config = {
     development: {
       brandName: 'Your Development Brand',
       theme: 'dark',
       // other config
     },
     production: {
       brandName: 'Your Production Brand',
       theme: 'light',
       // other config
     }
   };
   
   export default config[process.env.NODE_ENV || 'development'];
   ```

2. Use the configuration throughout your application to enable easy white-labeling

## Security Enhancements

1. Implement role-based access control:
   - Modify `Backend/middleware/auth.js` to check user roles
   - Add role checks to sensitive routes

2. Add encryption for sensitive data:
   - Update models to encrypt fields like API keys
   - Implement proper key rotation mechanisms

## Support and Maintenance

After customizing MetaMate, make sure to:

1. Update the README.md file with your specific information
2. Create documentation for your custom features
3. Set up monitoring and logging for your deployment
4. Establish a maintenance schedule for updates

By following this guide, you can transform MetaMate into a completely customized solution that meets your specific needs while maintaining the core functionality that makes it powerful. 