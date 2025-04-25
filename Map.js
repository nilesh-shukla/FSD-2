// A MAP hold key value pair where keys can be of any datatype
// const fruits = new Map([
//     ["apples", 500],
//     ["banana", 300],
//     ["oranges", 200]
// ]);
// console.log(fruits);

// Adding elements using set() method and also key value can be changed
// fruits.set("kiwi", 500);
// fruits.set("oranges", 700);
// console.log(fruits);

// Getting the value of a key using get() method
// console.log(fruits.get("apples"));


// Checking the data type using 'typeof'
// typeof fruits;


// MAP METHODS
// 1. get()
// 2. set()
// 3. size()
// console.log(fruits.size);

// 4. delete()
// console.log(fruits.delete("kiwi")); // returns true if the key is deleted

// 5. clear()
// console.log(fruits.clear()); // clears the map

// 6. has(): Membership test
// console.log(fruits.has("banana")); // returns true if the key is present

// 7. forEcah(): Invoke callback
// let text="";
// fruits.forEach(function(value, key){
//     text += key + "=" + value + "\n";
// })
// console.log(text);


// 8. keys(): Returns an iterator object containing the keys of the map
// let text="";
// for(const x of fruits.keys()){
//     text += x + " ";
// }
// console.log(text);

// 9. values(): Returns an iterator object containing the values of the map
// let text="";
// for(const x of fruits.values()){
//     text += x + " ";
// }
// console.log(text);

// 10. entries(): Returns an iterator object containing the key-value pairs of the map
// let text2="";
// for(const x of fruits.entries()){
//     text2 += x;
// }


// 11. groupBy(): Grouping the map by key
// const fruit = [
//     { name: "apple", quantity:300 },
//     { name: "banana", quantity:500 },
//     { name: "kiwi", quantity:200 },
//     { name: "orange", quantity:150 }
// ];
// function myCallBack({quantity}){
//     return quantity>200?"ok":"low";
// }
// const result = Map.groupBy(fruit, myCallBack);
// console.log(result);

// Output:
// {
//     'ok' => [
//       { name: 'apple', quantity: 300 },
//       { name: 'banana', quantity: 500 }
//     ],
//     'low' => [
//       { name: 'kiwi', quantity: 200 },
//       { name: 'orange', quantity: 150 }
//     ]
// }


//** JAVASCRIPT DESTRUCTURING
// const person = {
//     firstname: "John",
//     lastname: "Doe",
//     age: 50
// };
// Destructuring the object
// let {firstname,lastname} = person; // Order of properties does not matter but key matters
// console.log(firstname); // John
// console.log(lastname); // Doe

// let {firstname,lastname:name} = person;
// console.log(name); // Doe
// console.log(lastname); // Error

// let name = "GurukulThe Schools";
// let [a1,a2,a3,a4,a5] = name;
// console.log(a1); // G
// console.log(a2); // u
// console.log(a3); // r
// console.log(a4); // u
// console.log(a5); // k

// const fruit = ["Bananas", "Mango", "Apple", "Oranges"];
// let [fruit1,, fruit2] = fruit;
// console.log(fruit1); //Bananas
// console.log(fruit2); //Apple

// let {[0]:fruit1, [3]:fruit2}=fruit;
// console.log(fruit2);

// Using Rest and Spread Property 
// const num = [10, 20, 30, 40, 50, 60, 70];
// const [a, b, ...rest] = num;
// console.log(a);
// console.log(b);
// console.log(rest);

// Using iteration in destructuring
// let test = "";
// for(const [key, value] of fruits){
//     test += key + " is "+ value + "\n"; 
// }
// console.log(test);

//Exponentiation Operator
// let z = x**2;
// let z =Math.pow(x, 2);

// const fruits = ["banana", "mango", "apple", "orange"];
// console.log(fruits.includes("mango"));
// console.log(fruits.includes("orange", 3));

// const sparseArray = [1,,,4,5,,,]; // Sparse Matrix can be created
// const person = {
//     fistname:"John",
//     ,
//     age :30
// } // Error as sparse matrix cannot be created for object