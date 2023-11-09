const https = require('https');

// Function to make an HTTP request to your own server
function pingServer() {
  // Replace 'yourwebsite.com' with your actual domain
  https.get('http://fortunebloodtest.com', (res) => {
    console.log('Server pinged with response status code:', res.statusCode);
  }).on('error', (e) => {
    console.error('Error pinging server:', e.message);
  });
}

// Set an interval to run the pingServer function every 15 minutes
setInterval(pingServer, 900000);
