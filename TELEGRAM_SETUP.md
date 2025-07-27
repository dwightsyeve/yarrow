# 🚀 Yarrow Financial - Setup & Testing Guide

## ✅ Current Status

✅ **Telegram Bot Integration**: Working correctly!
- Bot Token: Valid and tested
- Chat ID: Valid and tested  
- Test message sent successfully

✅ **Server Configuration**: Complete
- Express server with Telegram integration
- CORS enabled for cross-origin requests
- Form validation and error handling
- Health check endpoint

✅ **Frontend Configuration**: Updated
- Vite proxy configured for API calls
- Form component ready for submissions
- Toast notifications for user feedback

## 🏃‍♂️ How to Start the Application

### 🚀 Single Command Start (Recommended)
```bash
# Start both backend and frontend with one command
cd "c:\Users\zerry poppi\Desktop\yarrow"
npm run dev:app
```

This will start both servers simultaneously:
- **Backend Server** (port 3001) - Telegram integration
- **Frontend Server** (port 8080) - React app

You should see output like:
```
[SERVER] 🚀 Server running on port 3001
[FRONTEND] Local:   http://localhost:8080/
[FRONTEND] Network: http://[::]:8080/
```

### Manual Start (Alternative)

### Step 1: Start the Backend Server
```bash
# Open a new terminal/PowerShell
cd "c:\Users\zerry poppi\Desktop\yarrow"
node server.js
```

You should see:
```
🚀 Server running on port 3001
⚠️  Please set TELEGRAM_BOT_TOKEN environment variable (using fallback)
⚠️  Please set TELEGRAM_CHAT_ID environment variable (using fallback)
```

### Step 2: Start the Frontend (Vite Dev Server)
```bash
# Open another terminal/PowerShell
cd "c:\Users\zerry poppi\Desktop\yarrow"
npm run dev
```

You should see:
```
  Local:   http://localhost:8080/
  Network: http://[::]:8080/
```

### Step 3: Test the Application
1. **Open your browser** and go to `http://localhost:8080`
2. **Fill out the form** in the "Apply Now" section
3. **Submit the form** and check for success message
4. **Check your Telegram** for the message from YarrowBot

## 🧪 Manual Testing Options

### Option 1: Test HTML Form
Open `test-form.html` directly in your browser:
1. Make sure the server is running (Step 1 above)
2. Open `c:\Users\zerry poppi\Desktop\yarrow\test-form.html` in your browser
3. Fill out and submit the test form

### Option 2: Test Server Health
```bash
# Test if server is running
curl http://localhost:3001/api/health

# Or using PowerShell
Invoke-WebRequest -Uri "http://localhost:3001/api/health" -Method GET
```

### Option 3: Test Telegram Bot Directly
```bash
# Test bot info
curl "https://api.telegram.org/bot7500967198:AAGGzenyA7objUb4jEBGPOY5HK9joWGyKMs/getMe"

# Test send message
curl -X POST "https://api.telegram.org/bot7500967198:AAGGzenyA7objUb4jEBGPOY5HK9joWGyKMs/sendMessage" -H "Content-Type: application/json" -d "{\"chat_id\":\"7207894371\",\"text\":\"Test message\"}"
```

## 🔧 Troubleshooting

### If Form Submissions Don't Work:

1. **Check Console Logs**:
   - Open browser DevTools (F12)
   - Look for errors in Console tab
   - Check Network tab for failed API calls

2. **Check Server Logs**:
   - Look at the terminal running `node server.js`
   - Should show form submissions and Telegram API calls

3. **Verify Endpoints**:
   ```bash
   # Test health endpoint
   curl http://localhost:3001/api/health
   
   # Test form submission
   curl -X POST http://localhost:3001/api/submit-form -H "Content-Type: application/json" -d "{\"name\":\"Test\",\"email\":\"test@example.com\"}"
   ```

### If Telegram Messages Don't Arrive:

1. **Check Bot Configuration**:
   - Make sure YarrowBot is in your Telegram contacts
   - Send a message to YarrowBot first: `/start`

2. **Verify Chat ID**:
   - Send a message to your bot
   - Visit: `https://api.telegram.org/bot7500967198:AAGGzenyA7objUb4jEBGPOY5HK9joWGyKMs/getUpdates`
   - Find your chat ID in the response

## 📝 What Happens When Form is Submitted

1. **User fills form** on frontend (localhost:8080)
2. **Form data sent** via fetch to `/api/submit-form`
3. **Vite proxy forwards** request to `localhost:3001/api/submit-form`
4. **Server validates** form data
5. **Server formats** message for Telegram
6. **Server sends** message to Telegram Bot API
7. **Telegram delivers** message to configured chat
8. **Server responds** with success/error to frontend
9. **Frontend shows** toast notification to user

## 🎯 Expected Results

- ✅ Form submission shows success toast
- ✅ Telegram message received in your chat
- ✅ Server logs show successful API calls
- ✅ No errors in browser console

## 📞 Current Configuration

- **Bot Name**: YarrowBot
- **Bot Username**: @Yarrowbot  
- **Backend Port**: 3001
- **Frontend Port**: 8080
- **API Endpoint**: `/api/submit-form`

The Telegram integration is fully configured and tested working. The issue was likely that both servers (frontend and backend) need to be running simultaneously for the form to work properly.
