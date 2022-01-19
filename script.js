//Ways to create an object
//1. Literally created object
//The Disadvantage is that this kind of object is not effective for creating many
// let student = {
//     name : "Muhammad",
//     energy : 10,
//     eat : function(portions) {
//         this.energy =+ portions;
//         console.log(`Enjoy the food ${this.name}!`);
//     }
// }

//2. Function Declaration object
//The Disadvantage is that this kind of object creation saves the methods init everytime the function is called.
//The solution is to separate the methods from the object into a single function and call it by using Object.create()
// const studentActivities = {
//     eat : function(portions) {
//         this.energy += portions;
//         console.log(`Enjoy the food ${this.name}!`);
//     },

//     game : function(hours){
//         this.energy -= hours;
//         console.log(`Happy Gaming ${this.name}!`);
//     }
// }

// function students(name, energy) {
//     let student = Object.create(studentActivities);
//     student.name = name;
//     student.energy = energy;

//     return student;
// }

// let student1 = students("Muhammad", 10);
// let student2 = students("Mamat", 10);

//3. Constructor Created Object(new keyword)
// function Students(name, energy) {
//     this.name = name;
//     this.energy = energy;
// }

// Students.prototype.eat = function(portions){
//     this.energy += portions;
//     return `Enjoy The Food ${this.name}!`;
// }

// Students.prototype.game = function(hours){
//     this.energy -= hours;
//     return `Happy Gaming ${this.name}!`;
// }

// Students.prototype.sleep = function(hours){
//     this.energy += hours * 2;
//     return `Have A Nice Dream ${this.name}!`;
// }

// let student1 = new Students("Muhammad", 10);

//Closure Concept Implementation
// function init() {
//     return function(name) {
//         console.log(name);
//     }
// }
// let callTheName = init();
// callTheName('Mamat');

//Function Factories Implementation
// function greetings(time) {
//     return function (name) {
//         console.log(`Hello ${name}, Good ${time}. Have a nice day!`);
//     }
// }

// let morning = greetings('Morning');
// let afternoon = greetings('Afternoon');
// let evening = greetings('Evening');

// morning('Mamat');
// afternoon('Sari');
// evening('Muhammad');

//Private Methods Using Closure
// let add = (function (){
//     let counter = 0;
//     return function () {
//         return ++counter;
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

//Simple Arrow Function
// const printName = (name) => {
//     return `Hello, ${name}`;
// }
// console.log(printName('Mamat'));

//Arrow Function Multiple Parameters
// const greetings = (name, time) => {
//     return `Hello ${name}, Good ${time}`;
// }
// console.log(greetings('Mamat', 'Morning'));

//Arrow Function Implicit Return
// const printName = name => `Hello, ${name}`;
// console.log(printName('Mamat'));

//Arrow Function with various operations
// let students = ['Mamat', 'Sari'];
// let lettersOfEach = students.map(function (name) {
//     return name.length;
// });
// console.log(lettersOfEach);

// let lettersOfEach = students.map(name => name.length);
// console.log(lettersOfEach);

// let lettersOfEach = students.map(name => ({ name, letters: name.length }));
// console.table(lettersOfEach);

//This Concept on Arrow Function

//Constructor Made Object
// const students = function(){
//     this.name = 'Mamat';
//     this.age = 23;
//     this.sayHello = function () {
//         return `Hello, My name is ${this.name} and I am ${this.age} years old`;
//     }
// }
// const mamat = new students();

//Method Creation using arrow function
//Note: Arrow Function does not recognize "this" concept
// const students = function(){
//     this.name = 'Mamat';
//     this.age = 23;
//     this.sayHello = () => {
//         return `Hello, My name is ${this.name} and I am ${this.age} years old`;
//     }
// }
// const mamat = new students();

// const students1 = {
//     name: 'Mamat',
//     age:  23,
//     sayHello: () => {
//         console.log(`Hello, My name is ${this.name} and I am ${this.age} years old`);
//     }
// }

// const students = function(){
//     this.name = 'Mamat';
//     this.age = 23;
//     this.sayHello = function() {
//         return `Hello, My name is ${this.name} and I am ${this.age} years old`;
//     }

//     // setInterval(() => {
//     //     console.log(this.age++);
//     // }, 3000);
// }
// const mamat = new students();

// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//     let one = 'size';
//     let two = 'caption';

//     if (this.classList.contains(one)) {
//         [one, two] = [two, one];
//     }

//     this.classList.toggle(one);
//     setTimeout(() => {
//         this.classList.toggle(two);
//     }, 600);
// })

//Higher Order Function
function doTask(task, done) {
    console.log(`The ${task} is now in the doing`);
    done();
}

function done() {
    console.log(`Task is Done`);
}

doTask('New Software AG API', done);