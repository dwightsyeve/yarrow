export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7500967198:AAGGzenyA7objUb4jEBGPOY5HK9joWGyKMs';
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || '7207894371';

  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    telegram_configured: TELEGRAM_BOT_TOKEN !== 'YOUR_BOT_TOKEN_HERE',
    environment: 'vercel'
  });
}
