import fetch from 'node-fetch';

async function testServer() {
  console.log('🧪 Testing server endpoints...\n');
  
  try {
    // Test health endpoint
    console.log('📡 Testing health endpoint...');
    const healthResponse = await fetch('http://localhost:3001/api/health');
    const healthData = await healthResponse.json();
    
    console.log('✅ Health check response:', healthData);
    
    // Test form submission
    console.log('\n📤 Testing form submission...');
    const testFormData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      loanAmount: '50000',
      loanPurpose: 'business',
      monthlyIncome: '5000',
      employmentStatus: 'employed'
    };
    
    const formResponse = await fetch('http://localhost:3001/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testFormData)
    });
    
    const formResult = await formResponse.json();
    console.log('✅ Form submission response:', formResult);
    
  } catch (error) {
    console.error('❌ Error testing server:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Server is not running. Start it with: node server.js');
    }
  }
}

// Run the test
testServer();
