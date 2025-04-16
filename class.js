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

class Person{
    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }
greet(){
    console.log("Hi, There!! I'm ", this.firstname);
    }

complement(name, object){
    return "That's wonderful " + object + ", " + name;
    }
}
let p = new Person("Van" ,"Hussen");
let complement = p.complement("Harry", "Hat");
console.log(complement);
p.greet();
