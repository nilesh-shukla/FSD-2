// **CALLBACKS
// A callback is a function that is passed as an argument to another function.
// function doSomething(callback){
//     callback();
//     console.log("Hello World");
// }
// function sayHi(){
//     console.log("Hi");
// }
// doSomething(sayHi); Output: Hi \n Hello World

// function judge(grade){
//     switch(true){
//         case grade == "A":
//             console.log("YOU GOT AN ", grade, " amazing");
//             break;
//             case grade == "B":
//                 console.log("YOU GOT A ", grade, "well done");
//                 break;
//                 case grade == "C":
//                     console.log("YOU GOT A ", grade, " alright");
//                     break;
//                     case grade == "D":
//                         console.log("YOU GOT A ", grade, " hmmmm..");
//                         break;
//                         default:
//                             console.log("An ", grade, " What?");
                            
//     }
// }
// function getGrade(score, callback){
//     let grade;
//     switch(true){
//         case score >= 90:
//         grade = "A";
//     break;
//     case score >= 80:
//         grade = "B";
//     break;
//     case score >= 70:
//         grade = "C";
//     break;
//     case score >= 60:
//         grade = "D";
//         break;
//     default:
//         grade = "E";
//     }
// }
// getGrade(85, judge);

//**PROMISES: This function needs two parameters and these are callbacks, we have called them resolve and reject(more or less like try and catch block)
// let promise = new Promise(function(resolve, reject){
//     let x = 20;
//     if (x>10){
//         resolve(x);
//     }
//     else{
//         reject("Too low");
//     }
// });
// promise.then(
//     function(value){
//         console.log("Success: ", value);
//     },
//     function(error){
//         console.log("Error:". error);
//     }
// );

// const promise = new Promise((resolve, reject) => {
//     // resolve("success!!");
//     reject("error!!");
// })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })  
//     .then(value => {
//         console.log(value);
//         return "can";
//     })
//     .then(value => {
//         console.log(value);
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);
//         return "promises";
//     })
//     .catch(value => {
//         console.log(value);
//     })


//** ASYN AND AWAIT */
// With async keyword, we can make a function return a Promise. This makes Promise nicer to read and look a lot like synchronous code. 
//The more powerful await keyword to wait until a Promise is done, await only works in an asynchronous function. 

// function saySomething(x){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(" something " + x);
//         }, 2000);
//     });
// }
// async function talk(x){
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

//** EVENT LOOP: 

//** CALL STACK:

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I am late"), 1000);
// console.log(add(4, 5));

// function add(x, y){
//     return x+y;
// }
// The setTimeout() task gets outsourced to browser's web API, and when it is done this appears in a special place: the callback queue. When the call stack is empty, the event loop will check the callback queue for work to do. If there are any callbacks waiting, they'll be executed, one by one. After every action , the event loop will check the cll stack for words

