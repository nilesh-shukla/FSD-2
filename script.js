// function sayHello(){
//     let you = prompt("What's your name?");
//     console.log("Hello", you + "!");
// }

// let varContainingFunction = function(){
//     let varInFunction = "I in funtion";
//     console.log("hi there!", varInFunction);
// }

// function tester(para1, para2) {
//     return para1 + " " + para2;
// }
// const arg1 = "Argument 1";
// const arg2 = "Argument 2";
// console.log(tester(arg1, arg2));

// function addTwoNumber(x=2, y=3) DEFAULT ARGUMENTS ARE ALWAYS THE TRAILING ARGUMNENTS
// {
//     console.log(x+y);
// }
// let var1 = prompt("Enter a:", "0");
// let var2 = prompt("Enter b:", "0");
// let x = parseInt(var1);
// let y = parseInt(var2);
// addTwoNumber(x, y);

// function addTwoNumber(x=2, y=3) {
//     console.log(x+y);
// }
// addTwoNumber(); //5
// addTwoNumber(6,6);  //12
// addTwoNumber(13);  //16

//**SPECIAL FUNCTIONS:-
// 1.Arrow Function-
// let doingStuff = x =>console.log(x);
// doingStuff("Great");
// let addTwoNumbers = (x,y)=>console.log(x+y);
// addTwoNumbers(5,3);
// const arr = ["squirrrel", "alpaca", "buddy"];
// arr.forEach(e => console.log(e));

// **Spread Operator
// let spread = ["so", "much", "fun"];
// let message = ["Javascript", "is", ...spread, "and", "very","powerful"];
// message.forEach(e => console.log(e));

// function addTwoNumber(x,y)
// {
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumber(...arr);

// function addFourNumbers(x,y,z,a)
// {
//     console.log(x+y+z+a);
// }
// let arr = [5,9];
// let arr2 = [6,7];
// addFourNumbers(...arr, ...arr2);

// *Rest Operator
// function someFunction(param1, ...param2)
// {
//     console.log(param1, param2);
// }
// someFunction("hi", "there", "how you doing");


// function addtwoNumbers(x,y)
// {
//     return x+y;
// }
// let resultArr = [];
// for(let i=0; i<10; i++)
// {
//     let result = addtwoNumbers(i, 2*i);
//     resultArr.push(result);
// }

// console.log(resultArr);

// let result = addTwoNumbers(4, 5)
// {
//     console.log(result);
// }

// let addTwoNumber = (x, y) => x+y;
// let result = addTwoNumber(12, 15);
// console.log(result);


// let addTwoNumber = (x, y) => 
//     {
//         console.log("Adding...");
//         return x+y;
//     }
//     console.log(addTwoNumber);

// // ** SCOPE
// function testAvailibility(x)
// {
//     console.log("Available here:", x);
// }

// testAvailibility("Hi");
// console.log("Not Available here:", x);

// function testAvailibility()
// {
//     let y = "local variable";
//     console.log("Available Here:", y);
// }
// testAvailibility();
// console.log("Not Available:", y);

// function doingStuff(){
//     if(true){
//         console.log(x);
//         let x= "local"
//     }
// }

// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x= "local";
//     }
// }
// doingStuff();


// function doingStuff(){
//     if(true){
//         const x= "local";
//     }
//     console.log(x);
// }
// doingStuff();

// //** GLOBAL VARIABLE */
// let globalvar = "Accessible EveryWhere";
// console.log("Outside Function: ", globalvar);

// function creatingNerSpace(x){
//     console.log("Access to global vars inside function", globalvar);
// }
// creatingNerSpace("Some parameter");
// console.log("Still Available: ", globalvar);

