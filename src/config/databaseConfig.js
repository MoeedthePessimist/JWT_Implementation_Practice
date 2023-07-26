const mongoose = require('mongoose');

const {
    CONNECTION_STRING
} = require('../constants');

const databaseConfig = {
    connect: () => {
        mongoose.connect(CONNECTION_STRING)
            .then(() => console.log('Database connected'))
            .catch(err => console.log(err));
    }

}

module.exports = databaseConfig;
