var mongoose = require('mongoose');
var dbhost = 'mongodb://localhost:27017/meanhotel';
mongoose.connect(dbhost);
mongoose.connection.on('connected', function () {
    console.log('moongoose is connected to ' + dbhost);

});
mongoose.connection.on('disconnected', function () {
    console.log('moongoose is disconnected');

});
mongoose.connection.on('error', function (err) {
    console.log('moongoose connection error ' + err);

});
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose is disconnected through app termination (SIGINT)')
        process.exit(0);

    });

});
process.on('SIGTERM', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose is disconnected through app termination (SIGTERM)')
        process.exit(0);

    });

});
process.once('SIGUSR2', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose is disconnected through app termination (SIGUSR2)');
        process.kill(process.pid, 'SIGUSR2');

    });

});
require('./hotels.model');