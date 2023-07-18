const express = require('express');
const cors = require('cors');

const api = require('../routes');

const {
    PORT
}
 = require('../constants')

exports.initializeServer = () => {
    const server = express();
    server.use(cors())
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use('/api', api);
    return server;
}


exports.startServer = (server) => {
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
};