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
// function doTask(task, done) {
//     console.log(`The ${task} is now in the doing`);
//     done();
// }

// function done() {
//     console.log(`Task is Done`);
// }

// doTask('New Software AG API', done);

//"Filter", "Map", "Reduce" Function in Higher Order Function Concept
//Initial Array
// const numbers = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//looking for 3 or higher numbers with simple for loop
// const moreThanThree = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 3) {
//         moreThanThree.push(numbers[i]); 
//     }
// }
// console.log(moreThanThree);

//looking for 3 or higher numbers with "Filter"
// const moreThanThree = numbers.filter((n) => n >= 3);
// console.log(moreThanThree);

//multiplying each element of the array by 2 using "Map"
// const multipliedBy2 = numbers.map((n) => n * 2);
// console.log(multipliedBy2);

//summing each element of the array using "reduce"
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const sumUp = numbers.reduce((accumulator, currentValue) => accumulator + currentValue); //by default, reduce has initial value of 0 after currentValue
// console.log(sumUp);

//Method Chaining
//looking numbers higher than 5 and multiplying them by 3, and then summing them up
// const total = numbers.filter((n) => n > 5)
//               .map((n) => n * 3)
//               .reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(total);

//Take all video elements
// const videos = Array.from(document.querySelectorAll('[data-duration]'));
// //Choose only Advanced Javascript
// let advancedJavascript = videos.filter(v => v.textContent.includes('ADVANCED JAVASCRIPT'))
// //Take the duration
// .map(item => item.dataset.duration)
// //Convert duration to float datatype and convert minutes to seconds
// .map(time => {
//     //10:30 -> [10,30] split
//     const seconds = time.split(':').map(second => parseFloat(second));
//     return (seconds[0] * 60) + seconds[1];
// })
// //Sum up the seconds
// .reduce((sum, sec) => sum + sec);
// //Convert the seconds into a time format
// const hours = Math.floor(advancedJavascript/3600);
// advancedJavascript = advancedJavascript - hours * 3600;
// const minutes = Math.floor(advancedJavascript / 60);
// const seconds = Math.floor(advancedJavascript - minutes * 60);
// //Save it in DOM
// const duration = document.querySelector('.total-duration');
// duration.textContent = `${hours} Hours, ${minutes} Minutes, ${seconds} Seconds.`;
// const totalVideos = videos.filter(v => v.textContent.includes('ADVANCED JAVASCRIPT')).length;
// const sumVideos = document.querySelector('.total-videos');
// sumVideos.textContent = `${totalVideos} videos.`;

//Literal Templates
// const name = 'Muhammad';
// let age = 23;
//Simple Literal Template
// console.log(`Hello, My name is ${name} and I am ${age} years old.`);
//Embedded Expression
// console.log(`${alert(`Hello, My name is ${name} and I am ${age} years old.`)}`);
// const x = 10;
// console.log(`${(x % 2 == 0) ? 'even' : 'odd'}`);
//HTML Fragments
// const student = {
//     name: 'Muhammad',
//     age: 23,
//     id: '91000',
//     email: 'muhammadmujahid14@gmail.com'
// };
// const element = `<div class="student">
//                     <h2>${student.name}</h2>
//                     <span class="id">${student.id}</span>
//                 </div>`;

//looping using literal template
// const employee = [
//     {
//         name: 'Muhammad',
//         email: 'muhammadmujahid14@gmail.com'
//     },
//     {
//         name: 'Mamat',
//         email: 'mamat@gmail.com'
//     },
//     {
//         name: 'Sari',
//         email: 'sari98@gmail.com'
//     }
// ];
// const element = `<div class="employee">
//                     ${employee.map(e => 
//                     `<ul>
//                         <li>${e.name}</li>
//                         <li>${e.email}</li>
//                     </ul>`).join('')}
//                  </div>`;

//Conditionals
//Ternary Operation
// const song = {
//     title: 'Beauty And The Beast',
//     singer: 'Justin Bieber',
//     feat: 'Nicki Minaj'
// }

// const element = `<div class="song">
//                     <ul>
//                         <li>${song.title}</li>
//                         <li>${song.singer} ${song.feat ? `(feat. ${song.feat})` : ''}</li>
//                     </ul>
//                 </div>`;

//Nested HTML Fragments
// const student = {
//     name: 'Muhammad',
//     semester: 5,
//     subjects : [
//     'Web Development',
//     'Information Systems Analysis and Designs',
//     'Interractive Systems Development',
//     'Object Oriented Programming'
//     ]
// };
// function printSubjects(subjects) {
//     return `
//     <ol>
//         ${subjects.map(s => `<li>${s}</li>`).join('')}
//     </ol>
//     `;
// }
// const element = `<div class="student">
//                     <h2>Name: ${student.name}</h2>
//                     <span class="semester">Semester: ${student.semester}</span>
//                     <h4>Subjects: </h4>
//                     ${printSubjects(student.subjects)}
//                  </div>`;

// document.body.innerHTML = element;

//Tagged Templates
// const name = 'Muhammad Mujahid';
// const age = 23;

// function trying(strings, ...args) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${args[i] || ''}`;
//     // });
//     // return result;

//     return strings.reduce((result, str, i) => `${result}${str}${args[i] || ''}`, '');
// }

// const str = trying`Hello, My name is ${name} and I am ${age} years old.`;
// console.log(str);

//Highlighting
const name = 'Muhammad Mujahid';
const age = 23;
const email = 'muhammadmujahid14@gmail.com';
function highlight(strings, ...args) {
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '');
}

const str = highlight`Hello, My name is ${name} and I am ${age} years old and my email address is ${email}.`;
document.body.innerHTML = str;