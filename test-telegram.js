import axios from 'axios';

// Test Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = '7865493854:AAGrOOjjyKDONuZUyUvLaNfC_oGEBwWu_8w';
const TELEGRAM_CHAT_ID = '7052671653';

async function testTelegramBot() {
  console.log('🧪 Testing Telegram Bot Configuration...\n');
  
  try {
    // Test 1: Get bot info
    console.log('📡 Test 1: Getting bot information...');
    const botInfoUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`;
    const botResponse = await axios.get(botInfoUrl);
    
    if (botResponse.data.ok) {
      console.log('✅ Bot info retrieved successfully:');
      console.log(`   Bot name: ${botResponse.data.result.first_name}`);
      console.log(`   Username: @${botResponse.data.result.username}`);
    } else {
      console.log('❌ Failed to get bot info');
      return;
    }
    
    // Test 2: Send test message
    console.log('\n📤 Test 2: Sending test message...');
    const testMessage = `🧪 Test message from Yarrow Financial\n\nTimestamp: ${new Date().toISOString()}`;
    
    const messageUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const messageResponse = await axios.post(messageUrl, {
      chat_id: TELEGRAM_CHAT_ID,
      text: testMessage,
      parse_mode: 'HTML'
    });
    
    if (messageResponse.data.ok) {
      console.log('✅ Test message sent successfully!');
      console.log(`   Message ID: ${messageResponse.data.result.message_id}`);
    } else {
      console.log('❌ Failed to send test message');
    }
    
  } catch (error) {
    console.error('❌ Error testing Telegram bot:', error.response?.data || error.message);
    
    if (error.response?.status === 401) {
      console.log('\n💡 Bot token appears to be invalid');
    } else if (error.response?.status === 400) {
      console.log('\n💡 Chat ID might be incorrect or bot not added to chat');
    }
  }
}

// Run the test
testTelegramBot();
