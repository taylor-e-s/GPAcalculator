var fs = require('fs');
var text = fs.readFileSync("major.gpa.txt", 'utf-8');
let array = text.split(' ')
console.log(array)