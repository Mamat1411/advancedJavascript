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
function init() {
    let name = "Mamat";
    function printName() {
        console.log(name);
    }
    console.dir(printName);
}
init();