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




