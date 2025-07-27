export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
}

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

async function sendToTelegram(message) {
  console.log('🤖 Attempting to send to Telegram Bot...');
  
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7500967198:AAGGzenyA7objUb4jEBGPOY5HK9joWGyKMs';
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '7207894371';
  
  console.log('📍 Bot Token:', TELEGRAM_BOT_TOKEN ? 'Present' : 'Missing');
  console.log('📍 Chat ID:', TELEGRAM_CHAT_ID);
  
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  console.log('🔗 Request URL:', url);
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      }),
    });
    
    const result = await response.json();
    console.log('✅ Telegram API response:', result);
    return result;
  } catch (error) {
    console.error('❌ Telegram API Error:', error.message);
    throw error;
  }
}
