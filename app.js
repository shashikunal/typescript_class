"use strict";
// {
//   var x = 10;   //global if {} , for(){} ,
// }
// console.log(x);
//let and const keywords are blocked scope means only available within {}//
// {
//     let x = 10; //block scope => it is avalabile with this block not expose outside thsi block
// }
// console.log(x);
// {
//  const y = 20;
// }
// console.log(y)
// if(true){
//     let x = 10; //blocked
//     let y = 20; //blocked
//     console.log(x);
// }
// console.log(y);
// var x = 10;
// console.log(x);
// x = 20;
// console.log(x);
// let y = 10;
// console.log(y);
// y = 20;
// console.log(y);
// declare variable
//if var keyword easyly can reclare 
// var x = 10; //declare
// var x = 30; //re-declare
// console.log(x);
// //if var keyword easyly can reclare 
// let y = 10; //declare
// let y = 30; //re-declare is not possible 
// // //Uncaught SyntaxError: Identifier 'y' has already been 
// // declared (at app.js:36:5)
// console.log(y);
// const z = 10; //one time assign //Uncaught TypeError: Assignment to constant variable.
// console.log(z);
// z = 20;
// console.log(z);
// const z = 20;
// console.log(z)
// const x = 10;
//  x = 10;
// console.log(myName); //variable hoisting = top //undefined
// var myName = "shashi";
//hoisting is a javascript mechanism
// console.log(username);  //TDZ hoisting is not working or throw error
// //Uncaught ReferenceError: Cannot access 'username' before initialization
// let username = "shashi";
console.log(username1); //TDZ hoisting is not working or throw error
//Uncaught ReferenceError: Cannot access 'username' before initialization
const username1 = "vinu";
