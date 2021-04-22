const fs = require('fs')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Class Level: ", function(level) {
    rl.question("Enter Grade: ", function(letter) {
        fs.writeFile('yourgpa.txt', level +' '+ letter, (err) => {
            if (err) throw err;
        })
        rl.close();
    });
});




