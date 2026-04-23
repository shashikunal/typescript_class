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
// console.log(username1);  //TDZ hoisting is not working or throw error
// //Uncaught ReferenceError: Cannot access 'username' before initialization
// const username1 = "vinu";
// STRING
// let str = "shashi";
// let str1 = 'shashi1';
// //es6 onwards here new way can hold string data type ``backtic => Template literals or template string
// let str2  = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ea dolor minima, eveniet quaerat accusantium, labore in culpa reiciendis odit repellendus incidunt! Repellat saepe, sequi dolorum quis mollitia excepturi modi vero quas omnis. Voluptatibus 
// in velit facilis iste! 
// Maiores, similique.`; //multiline text 
// console.log(str);
// console.log(str1);
// console.log(str2)
//?Immutable
// let username = "shashi";
// let ChangeUsernameIntoUppercase = username.toUpperCase();
// console.log(ChangeUsernameIntoUppercase); //Creates a NEW string called 
// console.log(username);  //still this is shashi
// let price = 100;
// let price1 = 99.9;
// console.log(price);
// console.log(price1);
// console.log(typeof price); //to check data type
// console.log(typeof price1)
// let total = price.toExponential(2);
// console.log(total);
// console.log(price)
// Boolean Data type
// let isOnline = false;
// if(isOnline) {
//     console.log("i am online")
// }else {
//     console.log("I am offline")
// }
//! undefined data type 
// let x;
// console.log(x); //undefined
// if(typeof(x) === undefined){
//     console.log("undefined data stored in the memory")
// }else {
//     console.log("this is not undefined data")
// }
// console.log(typeof x); //undefined
let y; //undefined => not assigned
let x = null; //here we have value that value is empty
console.log(x);
console.log(typeof (x)); // bug in the javascript keep as it is.......
//es6 
// symbol 
// bigInt
// string 
// number 
// boolean 
// undefined 
// null 
// //es6
// symbol 
// bigint
// ARRAY
//if you want to store multiple values in a single variable use ARRAY data type
//syntax of Array data type
// let langauges = ["java" , true , undefined , null , 100 , "python" ];
// // how to access array values with help of array index start from 0
// console.log(langauges[7]); //index
// let company = [ ["qspiders"] , ["jspiders"] , "pyspiders"  , "mern" , "fullstack"
// ]
// console.log(company[1][0]);
// let arr = ["s" , "h"]
// Objects 
let user = {
    username: "shashi",
    company: "qspiders",
    salary: 20000,
    isAvailable: true,
    hobbies: ["playing cricket", "singing", "chatting", "always watch instgram..."],
    courses: {
        1: "java",
        2: "js",
        3: "python"
    }
}; //object literal way to assign object data in the form of key:value pair
// how to access object value  => keys
// console.log(user.username);
// console.log(user.isAvailable);
// console.log(user.company);
// console.log(user.salary);
console.log(user);
