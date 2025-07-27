# Yarrow Financial Services - Setup Guide

This project includes a React frontend with a Node.js backend that sends form submissions to Telegram.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Telegram Bot

#### Create a Telegram Bot:
1. Open Telegram and search for `@BotFather`
2. Send `/newbot` command
3. Follow the instructions to create your bot
4. Copy the bot token provided

#### Get Your Chat ID:
1. Send a message to `@userinfobot` on Telegram
2. Copy your chat ID from the response

### 3. Environment Configuration
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your Telegram credentials
TELEGRAM_BOT_TOKEN=your_actual_bot_token_here
TELEGRAM_CHAT_ID=your_actual_chat_id_here
```

### 4. Run the Application

#### Development Mode (Recommended):
```bash
npm run dev:full
```
This command:
- Starts the Node.js server on port 3001
- Automatically starts Vite dev server on port 5173
- Serves the frontend and handles API requests

#### Alternative - Separate Servers:
```bash
# Terminal 1: Start the backend server
npm run server

# Terminal 2: Start the frontend dev server
npm run dev
```

## 📋 Available Scripts

- `npm run dev` - Start Vite dev server only
- `npm run server` - Start Node.js server only
- `npm run dev:full` - Start both frontend and backend
- `npm run build` - Build for production
- `npm run start` - Start production server

## 🔧 API Endpoints

### Form Submission
- **POST** `/api/submit-form`
- Sends form data to configured Telegram chat
- Returns JSON response with success status

### Health Check
- **GET** `/api/health`
- Returns server status and configuration info

## 📱 Form Integration

The form is automatically connected to:
- Hero section "Get Started Today" button
- Form submission endpoint
- Telegram notifications

## 🎯 Features

- ✅ Hero carousel with auto-slide and glitch effects
- ✅ Vertical marquee feature highlights
- ✅ Comprehensive loan application form
- ✅ Telegram integration for form submissions
- ✅ Responsive design with Tailwind CSS
- ✅ Form validation and error handling
- ✅ Loading states and user feedback

## 🔒 Security Notes

- Environment variables are used for sensitive data
- Form data is validated on both client and server
- CORS is configured for development
- No sensitive data is logged

## 📧 Telegram Message Format

Form submissions are sent to Telegram with:
- Applicant details (name, email, phone)
- Loan information (type, amount, credit score)
- Additional context (purpose, business info)
- Timestamp

## 🐛 Troubleshooting

### Common Issues:

1. **Telegram not receiving messages:**
   - Check bot token and chat ID in .env
   - Ensure bot is active (send `/start` to your bot)

2. **Form submission errors:**
   - Check browser console for errors
   - Verify server is running on port 3001

3. **Build issues:**
   - Run `npm install` to ensure all dependencies
   - Check Node.js version (recommended: 18+)

## 🔄 Development Workflow

1. Make frontend changes - hot reload via Vite
2. Make backend changes - restart with `npm run dev:full`
3. Test form submissions in browser
4. Check Telegram for received messages

## 📦 Production Deployment

1. Build the project: `npm run build`
2. Set environment variables on your server
3. Run: `npm run start`
4. Ensure port 3001 is accessible

## 🎨 Customization

- Modify form fields in `src/components/ApplicationForm.tsx`
- Update Telegram message format in `server.js`
- Customize styling with Tailwind classes
- Add new API endpoints in `server.js`
