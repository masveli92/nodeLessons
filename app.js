const fs = require ('node:fs')

const builder = require ('./someDir/createStudent');

let student1 = builder.studentBuilder('Victoria', 19);
console.log(student1);

// let student1 = builder.fName('Victoria', 19);
// console.log(student1);

