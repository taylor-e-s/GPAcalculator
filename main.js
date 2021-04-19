//reading the GPA file and splitting it by line
var fs = require('fs');
var grades = fs.readFileSync("majorgpa.txt", 'utf-8').split('\n');
let i = 0
let classes = grades.length
let credits = 0
let currentClass =grades[0]
// getting each class individually
while(i< classes){
    if(currentClass.startsWith('C')){
        console.log('CP')
    //if the grade is this, add this else if this, else if this, else if this, else this
    }else if(currentClass.startsWith('A')){
        console.log('AP')
    }else{
        console.log('honors')
    }
    i++
    currentClass = grades[i]
}
//printing final GPA
//console.log(credits/classes)