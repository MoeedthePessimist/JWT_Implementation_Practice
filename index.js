
const {
    initializeServer,
    startServer
} = require('./src/config/serverConfig');

const server = initializeServer();

startServer(server);

