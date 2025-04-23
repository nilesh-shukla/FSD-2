// A MAP hold key value pair where keys can be of any datatype
const fruits = new Map([
    ["apples", 500],
    ["banana", 300],
    ["oranges", 200]
]);
// console.log(fruits);

// Adding elements using set() method and also key value can be changed
fruits.set("kiwi", 500);
fruits.set("oranges", 700);
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