# MetaMate Troubleshooting Guide

This guide addresses common issues you might encounter while setting up and using MetaMate, along with their solutions.

## Installation Issues

### Backend Won't Start

**Issue:** The backend server fails to start with connection errors.

**Solutions:**
1. Check if MongoDB is running:
   ```bash
   sudo systemctl status mongodb
   # or for MongoDB installed via Homebrew on macOS
   brew services list
   ```

2. Verify your MongoDB connection string in `.env`:
   ```
   MONGO_URI=mongodb://localhost:27017/metamate
   ```

3. Check for port conflicts:
   ```bash
   lsof -i :5000
   # Kill the process if needed
   kill -9 <PID>
   ```

### Frontend or Chatbot Build Errors

**Issue:** Vite build fails with dependency errors.

**Solutions:**
1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```

2. Check for Node.js version compatibility:
   ```bash
   node -v
   # Should be v16 or higher
   ```

3. Update dependencies:
   ```bash
   npm update
   ```

### Services Docker Build Fails

**Issue:** Docker build for the Services component fails.

**Solutions:**
1. Check Docker installation:
   ```bash
   docker --version
   ```

2. Ensure you have the required Python packages:
   ```bash
   pip install -r Services/requirements.txt
   ```

3. Check for disk space:
   ```bash
   df -h
   ```

## Connection Issues

### Frontend Can't Connect to Backend

**Issue:** Frontend shows API connection errors.

**Solutions:**
1. Verify backend is running:
   ```bash
   curl http://localhost:5000/health
   ```

2. Check CORS configuration in `Backend/server.js`:
   ```javascript
   app.use(cors({
     origin: ['http://localhost:5173', 'http://localhost:3000'],
     credentials: true
   }));
   ```

3. Ensure environment variables are set correctly:
   ```
   # Frontend/.env
   VITE_BACKEND=http://localhost:5000
   ```

### Chatbot Can't Connect to Backend

**Issue:** Chatbot shows API connection errors.

**Solutions:**
1. Check environment variables:
   ```
   # Chatbot/.env
   VITE_BACKEND=http://localhost:5000
   ```

2. Ensure backend routes are accessible:
   ```bash
   curl http://localhost:5000/verify-user/test
   ```

### Services Can't Connect to Backend

**Issue:** Python services can't connect to the Node.js backend.

**Solutions:**
1. Check network configuration in Docker:
   ```bash
   docker network ls
   ```

2. Ensure the SERVER_API environment variable is set correctly:
   ```
   SERVER_API=http://host.docker.internal:5000  # For Docker on macOS/Windows
   # or
   SERVER_API=http://172.17.0.1:5000  # For Docker on Linux
   ```

## Authentication Issues

### User Registration Fails

**Issue:** Unable to register new users.

**Solutions:**
1. Check MongoDB connection:
   ```bash
   mongo
   use metamate
   show collections
   ```

2. Verify user schema in `Backend/models/User.js`

3. Check for duplicate username errors in backend logs

### Login Fails

**Issue:** Unable to log in with correct credentials.

**Solutions:**
1. Reset password in database:
   ```javascript
   // Using MongoDB shell
   db.users.updateOne(
     { username: "yourusername" },
     { $set: { password: "$2a$10$someHashedPassword" } }
   )
   ```

2. Check JWT configuration in `Backend/middleware/auth.js`

3. Clear browser cookies and localStorage:
   ```javascript
   // In browser console
   localStorage.clear()
   ```

## AI and Integration Issues

### Gemini API Key Not Working

**Issue:** AI responses fail with API key errors.

**Solutions:**
1. Verify API key is valid:
   ```bash
   curl -H "Authorization: Bearer YOUR_API_KEY" \
     "https://generativelanguage.googleapis.com/v1beta/models?key=YOUR_API_KEY"
   ```

2. Check if the key is stored correctly in the database

3. Ensure you haven't exceeded API quotas

### Meeting Bot Not Joining Meetings

**Issue:** The MetaMate bot doesn't join scheduled meetings.

**Solutions:**
1. Check Gmail credentials:
   ```
   GMAIL_USER_EMAIL=yourbot@gmail.com
   GMAIL_USER_PASSWORD=your_app_password
   ```

2. Verify the meeting record exists in the database:
   ```javascript
   // Using MongoDB shell
   db.meetingRecords.find({ status: "scheduled" })
   ```

3. Check Docker logs for the Services container:
   ```bash
   docker logs <container_id>
   ```

4. Ensure the meeting link is valid and accessible

### Audio Processing Fails

**Issue:** Meeting recordings aren't being processed.

**Solutions:**
1. Check if FFmpeg is installed in the Services container:
   ```bash
   docker exec <container_id> ffmpeg -version
   ```

2. Verify storage permissions:
   ```bash
   docker exec <container_id> ls -la /app/storage
   ```

3. Check for error logs in `storage/<meeting_id>/logs/`

## Database Issues

### MongoDB Connection Errors

**Issue:** Backend can't connect to MongoDB.

**Solutions:**
1. Check if MongoDB is running:
   ```bash
   sudo systemctl status mongodb
   ```

2. Verify network access to MongoDB:
   ```bash
   telnet localhost 27017
   ```

3. Check MongoDB authentication:
   ```
   MONGO_URI=mongodb://username:password@localhost:27017/metamate
   ```

### Data Not Persisting

**Issue:** Data disappears after server restart.

**Solutions:**
1. Check MongoDB storage configuration:
   ```bash
   mongo --eval "db.adminCommand('getParameter', {dbpath: 1})"
   ```

2. Verify disk space:
   ```bash
   df -h
   ```

3. Check MongoDB logs:
   ```bash
   tail -f /var/log/mongodb/mongodb.log
   ```

## Performance Issues

### Slow Response Times

**Issue:** The application responds slowly.

**Solutions:**
1. Check server resources:
   ```bash
   top
   ```

2. Monitor MongoDB performance:
   ```javascript
   // Using MongoDB shell
   db.currentOp()
   ```

3. Implement caching for frequently accessed data

### High Memory Usage

**Issue:** The application uses too much memory.

**Solutions:**
1. Check for memory leaks:
   ```bash
   node --inspect Backend/server.js
   ```

2. Monitor Docker container resources:
   ```bash
   docker stats
   ```

3. Optimize database queries and add proper indexes:
   ```javascript
   // Using MongoDB shell
   db.users.createIndex({ username: 1 }, { unique: true })
   ```

## Security Issues

### API Key Exposure

**Issue:** Gemini API key is visible in frontend code.

**Solutions:**
1. Ensure API calls are only made from the backend
2. Check that API keys are properly encrypted in the database
3. Implement API key rotation

### Unauthorized Access

**Issue:** Users can access other users' data.

**Solutions:**
1. Review authorization middleware:
   ```javascript
   // Check Backend/middleware/auth.js
   ```

2. Ensure proper user ID verification in all routes
3. Implement role-based access control

## Deployment Issues

### Vercel Deployment Fails

**Issue:** Frontend or Chatbot deployment to Vercel fails.

**Solutions:**
1. Check build output:
   ```bash
   npm run build
   ```

2. Verify environment variables are set in Vercel dashboard
3. Check for unsupported dependencies

### Railway/Heroku Deployment Fails

**Issue:** Backend deployment fails.

**Solutions:**
1. Check for platform-specific requirements
2. Verify environment variables
3. Check build logs for specific errors

## Common Error Messages and Solutions

### "Cannot find module 'xyz'"

**Solution:** Install the missing dependency:
```bash
npm install xyz
```

### "MongoServerError: E11000 duplicate key error"

**Solution:** The username or email already exists. Choose a different one or update the existing record.

### "Error: listen EADDRINUSE: address already in use :::5000"

**Solution:** The port is already in use. Kill the process or change the port number.

### "TypeError: Cannot read properties of undefined"

**Solution:** Check for null or undefined values in your data. Add proper validation.

### "Access to fetch at 'http://localhost:5000/...' has been blocked by CORS policy"

**Solution:** Update CORS configuration in Backend/server.js to include your frontend origin.

## Getting Additional Help

If you're still experiencing issues:

1. Check the GitHub repository for open issues
2. Join our community Discord server
3. Create a detailed bug report with:
   - Error messages
   - Steps to reproduce
   - Environment details (OS, Node version, etc.)
   - Logs from relevant components

Remember to redact any sensitive information like API keys or passwords before sharing logs or configuration files. 