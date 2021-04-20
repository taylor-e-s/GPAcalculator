//reading the GPA file and splitting it by line
var fs = require('fs');
var grades = fs.readFileSync("mygpa.txt", 'utf-8').split('\n');
//defining variables for while loop
let i = 0
let classes = grades.length
let credits = 0.0
let currentClass = grades[0]
//looks through every class and checks level and grade
while(i< classes){
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
    }else{
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
    }
//adds to one to continue loop and defines new current class
i += 1
currentClass = grades[i]
}
//printing final GPA
console.log(credits/classes)