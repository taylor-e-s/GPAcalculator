//asking for file name
var readline = require('readline-sync');
var name = readline.question("What is the name of your GPA file? ");
let fileName = (name + '.txt')
//reading the GPA file and splitting it by line
var fs = require('fs');
var grades = fs.readFileSync(fileName, 'utf-8').split('\n');
//defining variables for while loop
let i = 0
let classes = grades.length
let credits = 0.0
let currentClass = grades[0]
//looks through every class and checks level and grade
while(i< classes){
    //CP Classes, checks grades by looking the the last character of the string
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
        //Honors Classes, checks grades and adds honors weighted credits
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
        //AP+ Classes, checks grades and adds credits
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
        //AP Classes, checks grades and adds credits
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
        //Error message if one of the strings is written incorrectly
        console.log('Error: Class not recognized: check text file')
    }
//adds to one to continue loop and defines new current class
i += 1
currentClass = grades[i]
}
//printing final rounded GPA
let GPA = (credits/classes)
console.log(GPA.toFixed(2))