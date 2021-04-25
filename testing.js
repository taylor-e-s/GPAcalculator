//making user's GPA file
let i = 0
const fs = require('fs')
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("How many classes do you have?", function(number) {
while(i!=number) {
    rl.question("Enter Class Level and Grade: ", function(Class) {
          fs.writeFile('yourgpa.txt', Class, (err) => {
             if (err) throw err;
         rl.close();
});
i++
    })}
//reading the GPA file and splitting it by line
let grades = fs.readFileSync("yourgpa.txt", 'utf-8').split('\n');
//defining variables for while loop
let j = 0
let classes = grades.length
let credits = 0.0
let currentClass = grades[0]
//looks through every class and checks level and grade
if(i=number){
    while(j< classes){
    //CP Classes, checks grades
     if(currentClass.startsWith('C')){
        if(currentClass.charAt(currentClass.length -1) === 'A'){
            credits+=4.0
        }else if(currentClass.charAt(currentClass.length -1) === 'B'){
            credits+=3.0
        }else if(currentClass.charAt(currentClass.length -1) === 'C'){
            credits+=2.0
        }else if(currentClass.charAt(currentClass.length -1) === 'D'){
            credits+=1.0
        }else{
            credits+=0.0
        }
    }else if(currentClass.startsWith('H')){
        //Honors Classes, checks grades
        if(currentClass.charAt(currentClass.length -1) === 'A'){
            credits+=4.5
        }else if(currentClass.charAt(currentClass.length -1) === 'B'){
            credits+=3.5
        }else if(currentClass.charAt(currentClass.length -1) === 'C'){
            credits+=2.5
        }else if(currentClass.charAt(currentClass.length -1) === 'D'){
            credits+=1.5
        }else{
            credits+=0.0
        }
    }else if(currentClass.startsWith('AP+')){
        //AP+ Classes, checks grades
        if(currentClass.charAt(currentClass.length -1) === 'A'){
            credits+=5.5
        }else if(currentClass.charAt(currentClass.length -1) === 'B'){
            credits+=4.5
        }else if(currentClass.charAt(currentClass.length -1) === 'C'){
            credits+=3.5
        }else if(currentClass.charAt(currentClass.length -1) === 'D'){
            credits+=2.5
        }else{
            credits+=0.0
        }
    }else if(currentClass.startsWith('AP')){
        //AP Classes, checks grades
        if(currentClass.charAt(currentClass.length -1) === 'A'){
            credits+=5.0
        }else if(currentClass.charAt(currentClass.length -1) === 'B'){
            credits+=4.0
        }else if(currentClass.charAt(currentClass.length -1) === 'C'){
            credits+=3.0
        }else if(currentClass.charAt(currentClass.length -1) === 'D'){
            credits+=2.0
        }else{
            credits+=0.0
        }
    }else{
        console.log('Error: Class not recognized: check text file')
    }
}
//adds to one to continue loop and defines new current class
j += 1
currentClass = grades[i]

//printing final GPA
let GPA = (credits/classes)
console.log(GPA.toFixed(2)
)}})