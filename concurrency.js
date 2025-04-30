// **CALLBACKS
// A callback is a function that is passed as an argument to another function.
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hi");
// }
// doSomething(sayHi);

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

const promise = new Promise((resolve, reject) => {
    // resolve("success!!");
    reject("error!!");
})
    .then(value => {
        console.log(value);
        return "we";
    })  
    .then(value => {
        console.log(value);
        return "can";
    })
    .then(value => {
        console.log(value);
        return "chain";
    })
    .then(value => {
        console.log(value);
        return "promises";
    })
    .catch(value => {
        console.log(value);
    })
