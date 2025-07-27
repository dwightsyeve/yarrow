import express from 'express';
import cors from 'cors';
import axios from 'axios';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// ES modules __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7500967198:AAGGzenyA7objUb4jEBGPOY5HK9joWGyKMs';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '7207894371';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from dist (for production) or proxy to Vite dev server
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
} else {
  console.log('Development mode: Frontend served by Vite dev server');
}

// Form submission endpoint
app.post('/api/submit-form', async (req, res) => {
  try {
    console.log('📝 Form submission received:', req.body);
    const formData = req.body;
    
    // Validate required fields
    if (!formData.name || !formData.email) {
      console.log('❌ Validation failed: Missing required fields');
      return res.status(400).json({ 
        success: false, 
        message: 'Name and email are required' 
      });
    }

    // Format message for Telegram
    const message = formatTelegramMessage(formData);
    console.log('📤 Sending message to Telegram:', message);
    
    // Send to Telegram
    const telegramResponse = await sendToTelegram(message);
    console.log('✅ Telegram response:', telegramResponse);
    
    if (telegramResponse.ok) {
      res.json({ 
        success: true, 
        message: 'Form submitted successfully!' 
      });
    } else {
      throw new Error('Failed to send to Telegram');
    }
    
  } catch (error) {
    console.error('❌ Error submitting form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again.' 
    });
  }
});

// Format form data for Telegram message
function formatTelegramMessage(data) {
  let message = '🆕 NEW LOAN APPLICATION\n\n';
  
  message += `👤 Name: ${data.name}\n`;
  message += `📧 Email: ${data.email}\n`;
  
  if (data.phone) {
    message += `📱 Phone: ${data.phone}\n`;
  }
  
  if (data.loanType) {
    message += `🏷️ Loan Type: ${data.loanType}\n`;
  }
  
  if (data.loanAmount) {
    message += `💰 Loan Amount: ${data.loanAmount}\n`;
  }
  
  if (data.creditScore) {
    message += `📊 Credit Score: ${data.creditScore}\n`;
  }
  
  if (data.timeInBusiness) {
    message += `🏢 Time in Business: ${data.timeInBusiness}\n`;
  }
  
  if (data.purpose) {
    message += `🎯 Purpose: ${data.purpose}\n`;
  }
  
  if (data.additionalInfo) {
    message += `💬 Additional Info: ${data.additionalInfo}\n`;
  }
  
  message += `\n⏰ Submitted: ${new Date().toLocaleString()}`;
  
  return message;
}

// Send message to Telegram
async function sendToTelegram(message) {
  console.log('🤖 Attempting to send to Telegram Bot...');
  console.log('📍 Bot Token:', TELEGRAM_BOT_TOKEN ? 'Present' : 'Missing');
  console.log('📍 Chat ID:', TELEGRAM_CHAT_ID);
  
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  console.log('🔗 Request URL:', url);
  
  try {
    const response = await axios.post(url, {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });
    
    console.log('✅ Telegram API response:', response.data);
    return response.data;
  } catch (error) {
    console.error('❌ Telegram API Error:', error.response?.data || error.message);
    throw error;
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    telegram_configured: TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE'
  });
});

// Start Vite dev server in development
if (process.env.NODE_ENV !== 'production') {
  console.log('Starting Vite dev server...');
  const viteProcess = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });
  
  viteProcess.on('error', (error) => {
    console.error('Failed to start Vite dev server:', error);
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Form endpoint: http://localhost:${PORT}/api/submit-form`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
  
  if (TELEGRAM_BOT_TOKEN === 'YOUR_BOT_TOKEN_HERE') {
    console.warn('⚠️  Please set TELEGRAM_BOT_TOKEN environment variable');
  }
  
  if (TELEGRAM_CHAT_ID === 'YOUR_CHAT_ID_HERE') {
    console.warn('⚠️  Please set TELEGRAM_CHAT_ID environment variable');
  }
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});
