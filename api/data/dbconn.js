var mongoClient = require('mongodb').MongoClient;
var dbhost = 'mongodb://localhost:27017/meanhotel';
var _connection = null;

var open = function () {
    mongoClient.connect(dbhost, function (err, db) {
        if (err) {
            console.log("Connection failed");
            return;
        }

        _connection = db;
        console.log("connection successful",db);


    });
};
var get = function () {
    return _connection
};
module.exports = {
    open: open,
    get: get

};
