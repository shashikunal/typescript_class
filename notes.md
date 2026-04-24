what is typescript?
TypeScript is an open-source, strongly typed programming language developed by Microsoft that builds on JavaScript. It is primarily used to add static typing to JavaScript projects, allowing developers to catch errors early during development rather than at runtime. 

what is TSC?
The tsc compiler (short for TypeScript Compiler) is the official tool developed by Microsoft that transforms TypeScript code (.ts files) into clean, standard JavaScript (.js files). Because web browsers and Node.js environments cannot execute TypeScript directly, the compiler acts as a bridge, converting the developer-friendly TypeScript syntax into a format the machine can understand. 

how to install typescript?

    step 1 : install nodejs => (https://nodejs.org/en/download)

    step 2 : npm  => javascript/typescript packages(libraries)(default one which comes with nodejs)
    => yarn , pnpm third party libraries   

what are npm , yarn pnpm?
In the JavaScript ecosystem, npm, Yarn, and pnpm are all package managers. They are tools used to install, update, and manage the third-party libraries (dependencies) your code needs to run.  (typescript , express) 

 Install typescript 
npm install -g typescript 

check typescript installed or not with this command
tsc --version
    => Version 6.0.3


// what is compiled language in typescript?(AOT)

The distinction between compile-time and runtime in TypeScript is fundamental to understanding how the language works. TypeScript provides safety during development, but that safety disappears once the code is executed as JavaScript. 

1. Compile Time (Development Phase)

Compile time is the period when the TypeScript compiler (tsc) analyzes your source code. Its primary job is to find errors and transform TypeScript into JavaScript. 
Static Type Checking: This is when TypeScript checks if you are assigning the correct types. For example, if you try to assign a string to a number variable, the TypeScript Compiler will flag a "compile-time error" and often stop the build. 
Type Erasure: A critical concept in TypeScript is that types are erased during compilation. Interfaces, type aliases, and type annotations are completely removed. The resulting JavaScript file has no idea what a User interface or a string | number union was. 

Early Bug Detection: Catching errors at this stage is preferred because it prevents broken code from ever reaching the user. According to research cited by Swizec Teller, static typing significantly reduces "code smells" and detectable bugs. 


Runtime (Execution Phase)
Runtime is the period when the compiled JavaScript code is actually running in a browser or on a server (Node.js). 
No Native Type Safety: Because types were erased at compile-time, there is no native TypeScript engine to stop you from performing invalid operations at runtime. If an API returns a null when your TypeScript code expected a User object, the application may crash with an error like Cannot read property 'name' of null. 
Unpredictable Data: Data from external sources (API calls, user input, local storage) is not checked by TypeScript at runtime. You must "promise" the compiler that the data matches your types, but if it doesn't, the compiler won't be there to catch it. 
Runtime Errors: Errors like ReferenceError or TypeError (e.g., x is not a function) occur at this stage.


//Typescript is a superset of javascript
    1 : All javascript code is valid typescript
    2 : Typescript adds a "TYPE LAYER" on top of it => static typing....example let x:string = "qspider"
    3 : The typescript Compiler(TSC) check your code and removes the error  to give you clean and error free javascript code

    npm install -g typescript 

//your first typescript code 
let myName:string = "qspiders"
console.log(myName);

How to declare variable in typescript/javascript

declare variables in js/ts => var , let , const 


//what is ecmascript?
ECMAScript (ES) is a standardized scripting language specification, managed by Ecma International, that serves as the foundation for technologies like JavaScript, ActionScript, and JScript. It defines the core syntax, types, and objects, with annual updates (e.g., ES6/ES2015, ES2025) ensuring language evolution, often requiring tools like Babel for compatibility.

varsions : es5 => browser 
varsion : es6  => development 
          es7
          es10 
          features : arrows
                classes
                enhanced object literals
                template strings
                destructuring
                default + rest + spread
                let + const
                iterators + for..of
                generators
                unicode
                modules
                module loaders
                map + set + weakmap + weakset
                proxies
                symbols
                subclassable built-ins
                promises
                math + number + string + array + object APIs
                binary and octal literals
                reflect api
                tail calls 


old /es5 way 
var user = "vinu";

        var => function scope(local variable) => global scope(global variable) 


modren js (ES6)(ES2015)
 block scope || script scope
let user1 = "manu";


const user2 = "minu";

what is hoisting?
Hoisting is a JavaScript mechanism where the interpreter appears to move declarations (variables, functions, and classes) to the top of their containing scope (global or function) before the code is executed. 

Variable Hoisting (var)

Variables declared with var are hoisted to the top of their scope and initialized with a value of undefined. 
Example:
javascript
console.log(myVar); // Output: undefined (no error)
var myVar = 5;




DATA TYPE IN JAVASCRIPT 

//primitive datatypes

1 : String 
2 : number 
3 : boolean 
4 : undefined 
5 : null
6 : symbol
7 : bigInt

Object reference Types (NON-primitive);
1 : Object 
2 : Array
3 : functions




String 
    Strings are useful for holding data that can be represented in text form

let str = "shashi";
let str1 = 'shashi1';

//es6 => template string or literals
let str3 = `shashi2 `


Immutable concept in javascript?
 immutability refers to data that cannot be changed after it is created. When you want to modify an immutable value, you must create a new copy with the updated information rather than altering the original. 

 ALL Primitive data types in javascript are Immutable.
 

 NUMBER data type
 //64 bit floating point value => All numbers in js(integers and decimals) are same type that is number
 
 In JavaScript, the Number data type is a primitive value used to represent both integers (whole numbers) and floating-point numbers (decimals). Unlike many other programming languages that have specific types for different kinds of numbers (like int, float, or double), JavaScript uses a single type for all of them. 


 Boolean
 A logical entity that can have only two values true , false

 In JavaScript, a Boolean is a primitive data type that represents one of two values: true or false. It is the fundamental building block for logic, conditional testing, and control flow in your code. 


 undefined data type?
 A variable that has been declared but has not yet assigned a value and it is the defaulgt state of a variable 
 global variable in js => global object => window object

 syntax:
 let x; //undefined data type


 null data type 
 null represents the intentional value that should be empty value or absence of any object value

In JavaScript, null is a primitive data type that represents the intentional absence of any object value. It is one of the seven primitive types and is typically used to indicate that a variable is "empty" or should point to "nothing." 



Object Reference Types (mutable)
Array
object 
function 

<!-- Array  --> 
[] //array
An array in JavaScript is a global object used to store multiple values in a single variable
List store multiple values in a single variable 


Objects (key and value pair) (JSON) => {} => object

In JavaScript, an Object is a standalone entity that stores data as a collection of key-value pairs. It is one of the most fundamental data types in the language and is used to represent real-world entities (like a car or a person) by grouping related data and functionalities together. 
syntax 
let user = {
    key : "data type"
} 

functions
    function is a block of resusable code written to perform a specific task

    A function in JavaScript is a reusable block of code designed to perform a specific task. Instead of writing the same logic multiple times, you can wrap it in a function and "call" or "invoke" it whenever needed. 

    In javascript we have builtin functions 
    alert()
    propmt()
    confirm();
    ...........

    how to define function 
    //function syntax in javascript / typescript

    function Demo(){
        //statements
        //code here ....
    }

    Function keyword 
    The name of the function 
    parentheses(which can take parameter or empty)
    body of the function (wrapped in curly braces)


    what is Named function?
    A named function in JavaScript is a function that is defined with a specific identifier (name) during its creation
    example 
            function Demo(){
                console.log("hello world")
            }

            //invoking funtion Demo();

 what is Anonymous function?
    An Anonymous Function in JavaScript is a function that does not have a name or identifier. Unlike a standard function declaration (e.g., function myName() {}), anonymous functions are typically created as part of an expression and are used for one-time or short-term tasks. 

    syntax : function(){
            console.log("hello world);
    }

what is  function expression or variable declaration function ?
    A Function Expression (sometimes called a variable declaration function) defines a function by assigning it to a variable or using it within an expression. These are not hoisted in the same way; the variable name may be hoisted, but the function itself is only available after the execution reaches that line. 
    Syntax: Defined as part of a variable assignment (e.g., using const, let, or var).
    Hoisting: Not hoisted. If you call it before the definition, you will get an error (a ReferenceError for const/let or a TypeError for var).

    Syntax or example 
    
    let Demo = function(){
        console.log("function expressions are here")
    }

    //invoke it with help of variabel that is Demo
    Demo();


    What is function Hoisted with function Declaration?
    Function hoisting is a unique behavior in JavaScript where the interpreter appears to move function declarations to the top of their containing scope (either the global scope or a function's local scope) before the code is executed. This allows you to call a function before it is defined in your code. 

    Function Declarations
    Function declarations are fully hoisted. This means both the function's name and its entire body are stored in memory during the compilation phase, making the function available throughout the entire scope. 


    Why function expression is not Hoisted?
    Function Expressions
    Function expressions (functions assigned to a variable) behave differently because they follow the rules of variable hoisting. Only the variable declaration is hoisted, not the function assignment itself. 
    Using var: If you use var, the variable is hoisted and initialized as undefined. Calling it before the assignment line will result in a TypeError because undefined is not a function.


    IIFE function
    An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It is a common design pattern used to create a private scope and prevent variables from "leaking" into the global namespace. 

1. Basic Syntax
(function(){
    console.log("hello");
})();












