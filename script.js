//Ways to create an object
//1. Literally created object
let student = {
    name : "Muhammad",
    energy : 10,
    eat : function(portions) {
        this.energy =+ portions;
        console.log(`Enjoy the food ${this.name}!`);
    }
}
//2. Function Declaration object
//3. Constructor Function object
//4. Object.create()