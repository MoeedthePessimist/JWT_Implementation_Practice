
const {
    initializeServer,
    startServer
} = require('./src/config/serverConfig');
const database = require('./src/config/databaseConfig');

const server = initializeServer();
database.connect();

startServer(server);

