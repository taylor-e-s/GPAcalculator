const fs = require('fs')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Class and Grade: ", function(Class) {
        fs.writeFile('yourgpa.txt', Class, (err) => {
            if (err) throw err;
        })
        rl.close();
    });





