//Ways to create an object
//1. Literally created object
// let student = {
//     name : "Muhammad",
//     energy : 10,
//     eat : function(portions) {
//         this.energy =+ portions;
//         console.log(`Enjoy the food ${this.name}!`);
//     }
// }
//2. Function Declaration object
// function students(name, energy) {
//     let student = {};
//     student.name = name;
//     student.energy = energy;

//     student.eat = function(portions) {
//         this.energy += portions;
//         console.log(`Enjoy the food ${this.name}!`);
//     }

//     student.game = function(hours){
//         this.energy -= hours;
//         console.log(`Happy Gaming ${this.name}!`);
//     }

//     return student;
// }

// let student1 = students("Muhammad", 10);
// let student2 = students("Mamat", 10);
//3. Constructor Created Object(new keyword)
function Students(name, energy) {
    this.name = name;
    this.energy = energy;

    this.eat = function(portions) {
        this.energy += portions;
        console.log(`Enjoy the food ${this.name}!`);
    }

    this.game = function(hours){
        this.energy -= hours;
        console.log(`Happy Gaming ${this.name}!`);
    }
}

let student1 = new Students("Muhammad", 10);
//4. Object.create()