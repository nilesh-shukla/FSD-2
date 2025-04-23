// class ClassName{
//     constructor(prop1, prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj = new ClassName("arg1", "arg2");

// class Dog{
//     constructor(dogName, weight, color, breed){
//         this.dogName = dogName;
//         this.weight = weight;
//         this.color = color;
//         this.breed = breed;
//     }
// }
// let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
// console.log(dog.dogName);
// console.log(dog.weight);
// console.log(dog.color);
// console.log(dog.breed);

// class Person{
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let p = new Person("New", "John");
// console.log(p.firstname);
// console.log(p.lastname);

// class Person{
//     constructor(fname, lname){
//         this.firstname = fname;
//         this.lastname = lname;
//     }
// }
// let p = new Person("New", "John");
// console.log(p.firstname);
// console.log(p.lastname);

// class Person{
//     constructor(fname, lname){
//         this.firstname = fname;
//         this.lastname = lname;
//     }
// greet(){
//     console.log("Hi, There!! I'm ", this.firstname);
//     }

// complement(name, object){
//     return "That's wonderful " + object + ", " + name;
//     }
// }
// let p = new Person("Van" ,"Hussen");
// let complement = p.complement("Harry", "Hat");
// console.log(complement);
// p.greet();


// class Person{
//     #firstname;
//     #lastname;

//     constructor(firstname, lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("maria", "Saga");
// console.log(p.firstname);

//**Getters And Setters Method which are the methods of the class and hence can access the private members of the class
// class Person{
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname){
//         if (firstname.startsWith("M")) {
//             this.#firstname = firstname;
//         }
//         else{
//             this.#firstname = "M"+firstname;
//         }
//         this.#lastname = lastname;
//     }

//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         this.#firstname = firstname;  // Changes/Resets the value if the variable is already initialized with a value
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname = lastname;
//     }
// }
// let p = new Person("Karia", "Saga");
// console.log(p.firstname);

//**Inheritance: Only parent members can be accessed in child and not the vice versa
// class Vehicle{
//     constructor(color, currentSpeed, maxSpeed){
//       this.color = color;
//       this.currentSpeed = currentSpeed;
//       this.maxSpeed = maxSpeed;
//     }
//     move(){
//       console.log("Moving at", this.currentSpeed);
//     }
//     accelerate(amount){
//       this.color += amount;
//     }
//   }
  
//   class Motorcycle extends Vehicle{
//     constructor(color, currentSpeed, maxSpeed, Fuel){
//       super(color, currentSpeed, maxSpeed);
//       this.Fuel = Fuel;
//     }
//     doWheelie(){
//       console.log("Driving on one wheel!");
//     }
//   }
//   let motor = new Motorcycle("Black", 0, 250, "gasoline");
//   console.log(motor.color);
//   console.log(motor.currentSpeed);
//   console.log(motor.maxSpeed);
//   console.log(motor.Fuel);
//   motor.accelerate(50);
//   motor.move();

// **PROTOTYPE 
// class Person{
//     constructor(firstname, lastname){
//         this.firstname =firstname;
//         this.lastname = lastname;
//     }
//     greet(){
//         console.log("Hi There");
//     }    
// }
// Person.prototype.introduce =function(){
//         console.log("Hi, there I'm ", this.firstname);
// }
// Person.prototype.faviorateColor="green";
// let p = new Person("Maria","Saga");
// console.log(p.faviorateColor);
// p.introduce();




