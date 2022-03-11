//Object in Javascript---------------------------------------------------------------------------------------
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

//Prototype in Javascript-------------------------------------------------------------------------------
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

//Closure Concept Implementation--------------------------------------------------------------------------------
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

//Simple Arrow Function--------------------------------------------------------------------------------------
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

//This Concept on Arrow Function----------------------------------------------------------------------------
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

//Higher Order Function--------------------------------------------------------------------------------------
// function doTask(task, done) {
//     console.log(`The ${task} is now in the doing`);
//     done();
// }

// function done() {
//     console.log(`Task is Done`);
// }

// doTask('New Software AG API', done);

//"Filter", "Map", "Reduce" Function in Higher Order Function Concept---------------------------------------------
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
// const name = 'Muhammad Mujahid';
// const age = 23;
// const email = 'muhammadmujahid14@gmail.com';
// function highlight(strings, ...args) {
//     return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${args[i] || ''}</span>`, '');
// }

// const str = highlight`Hello, My name is ${name} and I am ${age} years old and my email address is ${email}.`;
// document.body.innerHTML = str;

//Destructuring Assignment
//Array
// const introduction = ['Hello', 'My Name', 'is', 'Muhammad'];
// const [greeting, name, toBe, myName] = introduction;
// console.log(greeting);

//Skipping Items
// const introduction = ['Hello', 'My Name', 'is', 'Muhammad'];
// const [greeting, , , name] = introduction;
// console.log(greeting);

//Swapping Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a,b] = [b, a];
// console.log(a);
// console.log(b);

//return value in function
// function tryin() {
//     return [1,2];
// }
// const [a,b] = tryin();
// console.log(b);

//Rest Parameters
// const [a,...values] = [1, 2, 3, 4, 5];
// console.log(values);

//Object
// const employee = {
//     name: 'Muhammad',
//     age: 23
// }

// const {name, age} = employee;
// console.log(name);

//Non-declared Object Assignment
// ({name, age} = { name: 'Muhammad', age: 23 });
// console.log(name);

//Assigning Properties to New Variables
// const employee = {
//     name: 'Muhammad',
//     age: 23
// }

// const {name: n, age: a} = employee;
// console.log(n);'

//Default Value Assignment
// const employee = {
//     name: 'Muhammad',
//     age: 23,
//     email: 'muhammadmujahid14@gmail.com'
// }

// const {name, age, email = 'email@default.com'} = employee;
// console.log(email);

//Default Value Assignment and Assigning It to New Variables
// const employee = {
//     name: 'Muhammad',
//     age: 23,
//     email: 'muhammadmujahid14@gmail.com'
// }

// const {name: n, age: a, email: e = 'email@default.com'} = employee;
// console.log(e);

//Rest Parameters
// const employee = {
//     name: 'Muhammad',
//     age: 23,
//     email: 'muhammadmujahid14@gmail.com'
// }

// const {name, ...value} = employee;
// console.log(value);

//Getting Field in an Object and after that sending it as a function parameter
// const employee = {
//     id: 123,
//     name: 'Muhammad',
//     age: 23,
//     email: 'muhammadmujahid14@gmail.com'
// }

// function getIdEmployee({id}) {
//     return id;
// }

// console.log(getIdEmployee(employee));

//Destructuring (Function)
// function calculations(a, b) {
//     return [a + b, a - b, a * b];
// }
// //The Destructuring array varibles order must be exactly the same as the return value order
// const [addition, substraction, multiplication, division = 'No Operations Done'] = calculations(2, 4);
// console.log(addition);
// console.log(substraction);
// console.log(multiplication);
// console.log(division);

//In order to destructure it unordered, change the array into an object
// function calculations(a, b) {
//     return {
//             add: a + b,
//             substract: a - b,
//             multiply: a * b,
//             divide: a / b
//         }
// }

// const {divide = 'No Operation is Done', add, substract, multiply} = calculations(2, 4);
// console.log(add);
// console.log(substract);
// console.log(multiply);
// console.log(divide);

//Destructuring on Arguments
// const student1 = {
//     name: "Muhammad Mujahid",
//     age: 23,
//     email: "muhammadmujahid14@gmail.com",
//     score:{
//         task: 80,
//         midExam: 85,
//         finalExam: 90
//     }
// }

// function printStudent({name, age, score: {task, midExam, finalExam}}) {
//     return `Hello, My Name is ${name}. I am ${age} years old. My Final Exam Grade is ${finalExam}`;
// }

// console.log(printStudent(student1));

//for..of
//for..of is used to create a loop over iterable objects
//for..of Array
// const employee = ['Muhammad', 'Sari', 'Mamat'];
// for(const e of employee){
//     console.log(e);
// }

//for..of String
// const name = 'Muhammad';
// for(const n of name){
//     console.log(n);
// }

//indexing in forEach
// const employee = ['Muhammad', 'Sari', 'Mamat'];
// employee.forEach((e, i) => {
//     console.log(`${e} is at ${i}`);
// });

//indexing in for..of
// const employee = ['Muhammad', 'Sari', 'Mamat'];
// for (const [i, e] of employee.entries()) {
//     console.log(`${e} is at ${i}`);
// }

//for..of NodeList
// const listName = document.querySelectorAll('.name');
// listName.forEach(e => {
//     console.log(e.textContent);
// });
// for (n of listName) {
//     console.log(n.innerHTML);
// }

//for..of arguments
// function addition() {
//     let result = 0;
//     for (args of arguments) {
//         result += args;
//     }
//     return result;
// }

// console.log(addition(1, 2, 3, 4, 5));

//for..in
//for..in is used to create a loop only for enumerable
//enumerable means properties in objects
// const employee = {
//     name: 'Muhammad',
//     age: 23,
//     email: 'muhammadmujahid14@gmail.com'
// }
// for (e in employee) {
//     console.log(employee[e]);
// }

//Spread Operator
//Spread Operator is used to expand or unpack iterables into a single element.
// const employee = ['Muhammad', 'Sari', 'Mamat'];
// console.log(...employee[0]);

//When do we use Spread Operator?
//First, Spread operator is used when we want to combine 2 arrays
// const employee = ['Muhammad', 'Sari', 'Mamat'];
// const employer = ['Mujahid', 'Setya', 'Ningsih'];
// const people = [...employee, 'Sayang',...employer];
// const people = employee.concat(employer);
// console.log(people);
//Why do we use Spread Operator rather than Array.Concat?
//It is because using spread operator is more flexible than Array.Concat
//You can add one or more elements in the middle of the array.

//Second, It is used to copy an array.
// const employee = ['Muhammad', 'Sari', 'Mamat'];
// const employee1 = [...employee];
// employee1[0] = 'Mujahid';
// console.log(employee);

//Getting Value from html element
// const listName = document.querySelectorAll('li');
// const names = [...listName].map(n => n.textContent);
// console.log(names);

// const name = document.querySelector('.myName');
// const letters = [...name.textContent].map(l => `<span>${l}</span>`).join('');
// name.innerHTML = letters;

//Rest Parameter
//Rest Parameter is used to represent function's arguments unlimitedly to an array
// function mine() {
    // return args;
    // return Array.from(arguments);
    // return [...arguments];
// }
// console.log(mine(1, 2, 3, 4, 5));

// function add(...numbers) {
    // let total = 0;
    // for (const n of numbers) {
    //     total += n;
    // }
    // return total;

    // return numbers.reduce((acc, curr) => acc + curr);
// }
// console.log(add(1, 2, 3, 4, 5));

//Rest Parameter in Array Destructuring
// const group1 = ['Muhammad', 'Sari', 'Mamat', ' Mujahid', 'Setya'];
// const [chief, vice, ...members] = group1;
// console.log(chief);
// console.log(vice);
// console.log(members);

//Rest Parameter in Object Destructuring
// const team = {
//     pm: 'Sari',
//     fe: 'Setya',
//     be1: 'Muhammad',
//     be2: 'Mujahid',
//     qc: 'Mamat'
// }

// const {pm, ...myTeam} = team;
// console.log(pm);
// console.log(myTeam);

//Rest Parameter for Filtering
// function filterBy(type, ...values) {
//     return values.filter(v => typeof(v) === type);
// }
// console.log(filterBy('boolean', 1, 2, 'Muhammad', false, 10, true, 'Sari'));

//Asynchronous Javascript
//Callback
//Callback is a function that is sent as a parameter to the other function
//Synchronous Callback
// function hello(name) {
//     alert(`Hello, ${name}!`);
// }
// function message(callback) {
//     const identity = prompt('Please enter your name: ');
//     callback(identity);
// }

// message((name) => alert(`Hello, ${name}!`));

// const employee = [
    // {
    //     name: 'Muhammad',
    //     id: '91000',
    //     email: 'muhammadmujahid14@gmail.com',
    //     division: 'Backend Developer',
    //     leadID: 3
    // },
    // {
    //     name: 'Sari',
    //     id: '14045',
    //     email: 'sarisetyaningsih98@gmail.com',
    //     division: 'Technical Writer',
    //     leadID: 5
    // },
    // {
    //     name: 'Mamat',
    //     id: '14144',
    //     email: 'mlmaster1411@gmail.com',
    //     division: 'Frontend Developer',
    //     leadID: 2
    // }
// ];

// console.log('start');
// employee.forEach(m => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.name)
// });
// console.log('finish');

//Asynchronous Callback
// function getEmployeeData(url, successCallback, errorCallback) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 successCallback(xhr.response);
//             } else if(xhr.status === 404) {
//                 errorCallback();
//             }
//         }
//     }
//     xhr.open('GET', url);
//     xhr.send();
// }

// // function successCallback(results) {
// //     console.log(results);
// // }

// // function errorCallback() {

// // }
// console.log('start');
// getEmployeeData('data/employee.json', (results) => {
//     const employee = JSON.parse(results);
//     employee.forEach(e => console.log(e.name));
// }, () => {

// });
// console.log('finish');

//Asynchronous JQuery Callback
// console.log('start');
// $.ajax({
//     url: 'data/employee.json',
//     success: (empl) => {
//         empl.forEach(e => console.log(e.name));
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     }
// });
// console.log('finish');

//Asynchronous Callback Exercise with OMDB API
//Using jQuery Ajax
// $('.search-button').on('click', function (){
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=bc20012f&s=' + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
//             $('.movie-container').html(cards);
    
//             //when read more button is pushed
//             $('.modal-detail-button').on('click', function(){
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=bc20012f&i=' + $(this).data('imdbid'),
//                     success: (m) => {
//                         const movieDetail = showDetails(m);
//                         $('.modal-body').html(movieDetail);
//                     },
//                     error: (e) => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// });

//Using Fetch
// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', function () {
//     const inputKeyword = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=bc20012f&s=' + inputKeyword.value)
//         .then(response => response.json())
//         .then(response => {
//             const movies = response.Search;
//             let cards = '';
//             movies.forEach(m => cards += showCards(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             //when read more button is pushed
//             const readMore = document.querySelectorAll('.modal-detail-button');
//             readMore.forEach(r => {
//                 r.addEventListener('click', function () {
//                    const imdbid = this.dataset.imdbid;
//                    fetch('http://www.omdbapi.com/?apikey=bc20012f&i=' + imdbid)
//                     .then(response => response.json())
//                     .then(response => {
//                         const movieDetail = showDetails(response);
//                         const modalBody = document.querySelector('.modal-body');
//                         modalBody.innerHTML = movieDetail;
//                     });
//                 });
//             });
//         });
// });

//Fetch Refactoring (Async Await)
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
    try {
        const inputKeyword = document.querySelector('.input-keyword');
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch (err) {
        alert(err);
    }
});

function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?apikey=bc20012f&s=' + keyword)
            .then(response => {
                if (response.ok === false) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                if (response.Response === "False") {
                    throw new Error(response.Error);
                }
                return response.Search;
            });
}

function updateUI(movies) {
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML = cards;
}

//Event Binding for Read More Button
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetails(imdbid);
        updateUIDetail(movieDetail);
    }
});

function getMovieDetails(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=bc20012f&i=' + imdbid)
            .then(response => response.json())
            .then(response => response);
}

function updateUIDetail(movie) {
    const movieDetail = showDetails(movie);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}

function showCards(m) {
    return `
            <div class="col-md-3 my-3">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${m.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Read More</a>
                    </div>
                </div>
            </div>
        `;
}

function showDetails(m) {
    return `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                        <li class="list-group-item"><h3><strong>${m.Title}</strong></h3></li>
                        <li class="list-group-item"><strong>Director: </strong>${m.Director}</li>
                        <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
                        <li class="list-group-item"><strong>Writer: </strong>${m.Writer}</li>
                        <li class="list-group-item"><strong>Plot: </strong><br>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
}

//jQuery Ajax
// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=bc20012f&s=avengers',
//     success: (movies) => console.log(movies)
// });

//Vanilla Javascript Ajax
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.status === 200) {
//         if (xhr.readyState === 4) {
//             console.log(JSON.parse(xhr.response));
//         }
//     } else {
//         console.log(xhr.responseText);
//     }
// };
// xhr.open('get', 'http://www.omdbapi.com/?apikey=bc20012f&s=avengers');
// xhr.send();

//Fetch
//Fetch Returns Promise Value
// fetch('http://www.omdbapi.com/?apikey=bc20012f&s=avengers')
// .then(response => response.json())
// .then(response => console.log(response));

//Promise
//Promise is an object representing a success or failure of an upcoming asynchronous event
//states (fulfilled / rejected / pending)
//callback (resolve / reject / finally)
//action (then / catch)

//1st example without pending
// let fulfilled1 = false;
// const promise1 = new Promise((resolve, reject) => {
//     if (fulfilled1) {
//         resolve('Promise Fulfilled');
//     } else {
//         reject('Promise Rejected');
//     }
// });
// promise1
// .then(response => console.log('Fulfilled : ' + response))
// .catch(response => console.log('Rejected : ' + response));

//2nd example with pending
// let fulfilled2 = true;
// const promise2 = new Promise((resolve, reject) => {
//     if (fulfilled2) {
//         setTimeout(() => {
//            resolve('Promise Fulfilled after a moment') ;
//         }, 2000);
//     } else {
//         setTimeout(() => {
//            reject('Promise Rejected after a moment'); 
//         }, 2000);
//     }
// });

// console.log('Start');
// // console.log(promise2.then(() => console.log(promise2)));
// promise2
// .finally(() => console.log('Done Waiting'))
// .then(response => console.log('Fulfilled : ' + response))
// .catch(response => console.log('Rejected : ' + response));
// console.log('Finish');

//Promise.all()
// It is used to run many promises simultaneously
// const movies = new Promise(resolve => {
//     setTimeout(() => {
//        resolve([{
//             title: 'Avengers',
//             director: 'Muhammad',
//             actors: 'Sari, Mamat'
//        }]);
//     }, 1000);
// });

// const weather = new Promise(resolve => {
//     setTimeout(() => {
//         resolve([{
//             city: 'Yogyakarta',
//             temperature: 26,
//             condition: 'Cloudy'
//         }]);
//     }, 500);
// });

// // movies.then(response => console.log(response));
// // weather.then(response => console.log(response));
// Promise.all([movies, weather])
// // .then(response => console.log(response));
// .then(response => {
//     const [movies, weather] = response;
//     console.log(movies);
//     console.log(weather);
// });

//Async Await
// const trying = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Finished');
//     }, 2000);
// });
// trying
//     .then(() => console.log(trying));

// function promiseTrying() {
//     return new Promise((resolve, reject) => {
//         const pendingTime = 5000;
//         if (pendingTime < 5000) {
//             setTimeout(() => {
//                 resolve('Finished');
//             }, pendingTime);
//         } else {
//             reject('Timed Out');
//         }
//     });
// }

// const test = promiseTrying();
// test
//     .then((test) => console.log(test))
//     .catch((test) => console.log(test));

// async function asyncTry() {
//     try {
//         const test = await promiseTrying();
//         console.log(test);
//     } catch (error) {
//         console.error(error);
//     }
// }
// asyncTry();