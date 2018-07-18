var fs = require('fs');
console.log('Going to get file');
var file = fs.readFileSync('readFileSync.js');
console.log('file reading done');