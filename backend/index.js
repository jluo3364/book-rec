const startDBServer = require('./server');
const startPicServer = require('./picServer');
const startAIServer = require('./gemniapi')

// Start server 1 on port 3000
startDBServer(3001);

// Start server 2 on port 4000
startPicServer(4000);

startAIServer(6000);