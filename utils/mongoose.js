const mongoose = require("mongoose");

module.exports = {
    init: () => {

        const dbOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: false,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 5,
            connectTimeoutMS: 10000,
            family: 4
        };

        mongoose.connect('mongodb+srv://suzukikat:54323210ab@suzukikatsumi.tdhsf.mongodb.net/Suzukikatsumi?retryWrites=true&w=majority', dbOptions);
        mongoose.set('useFindAndModify', false);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connected', () => {

            console.log('O Mongoose foi conectado com sucesso!');

        });

        mongoose.connection.on('err', err => {

            console.error(`Erro de conexão do Mongoose: \n${err.stack}`);

        })

        mongoose.connection.on('disconnected', () => {

            console.warn('Conexão do Mongoose perdida.')

        })

    }
}
