var fs = require('fs');
console.log('Going to get file');
fs.readFile('readFileSync.js', function(err , file){
    console.log('Gotten file Aysnc');
})
console.log('file reading done');