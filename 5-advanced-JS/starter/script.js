// Function constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         console.log(2019 - this.yearOfBirth);
//     }
// }

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.yearOfBirth);
// }

// var john = new Person('John', 1990,'teacher');

// john.calculateAge();

// var jane = new Person('Mark', 1969, 'designer');
// var mark = new Person ('Mark', 1948, 'retired');



// Object.create

// var personProto = {
//     calculateAge: function(){
//         console.log(2019 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);

// john.name = "John";
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto,
//     {
//         name: {value: 'Jane'},
//         yearOfBirth: {value: 1969},
//         job: {value: 'designer'}
//     });



//Primatives vs Objects

//Primatives
// var a = 23;
// var b = a;
// a = 46;

// console.log(a, b);

// //Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 30

// console.log(obj1.age);
// console.log(obj2.age);

// //Functions
// var age = 27;
// var obj = {
//     name: 'Fahim',
//     city: 'Buffalo'
// };

// function change(a, b){
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);

// console.log(age, obj.city)




//Passing function as arguments
//  var years = [1990, 1965, 1937, 2005, 1998];

//  function arrayCalc(arr, fn){
//      let arrRes = [];
//      for (let i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//      }
//      return arrRes;
//  }

//  function calculateAge(el) {
//      return 2019 - el;
//  }

//  function isFullAge(el) {
//      return el >= 18;
//  }

//  var ages = arrayCalc(years, calculateAge);
//  console.log(ages);

//  var fullAges = arrayCalc(ages, isFullAge);
//  console.log(fullAges);

//  function maxheartRate(el){
//      if(el >= 18 && el <= 81){
//      return Math.round(206.9 - (0.67 * el));
//      } else {
//          return -1;
//      }
//  }

//  let rates = arrayCalc(ages, maxheartRate);
//  console.log(rates);



//Function returning function

// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         } 
//     }else if(job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + "?");
//         }
//     }else{
//         return function(name){
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Mary');

// interviewQuestion('Uber')('Derrick');



//Immediately Involked Function Expression IIFE

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();



//Closures

// function retirement(retirementAge){
//     var a = ' years left until retirement.';
//     return function(yearOfBirth){
//         var age = 2019 - yearOfBirth;
//         console.log((retirementAge - age) + a);  
//     }
// }

// var retirementUs = retirement(66);

// retirementUs(1990);

// function interviewQuestion(job){
//     return function(name){
//         if(job === 'designer'){
//             console.log(name + ', can you please explain what UX design is?');
//         }else if(job === 'teacher'){
//             console.log('What subject do you teach, ' + name + "?");
//         }else{
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// interviewQuestion('teacher')('Sam');

var john = {
    name: 'John',
    age: 29,
    job: 'teacher',
    presentation: function(style, timeOfday){
        if(style == 'formal'){
            console.log('Good ' + timeOfday + ' Sir/Mam! My name is ' + this.name + '. I work as a ' + this.job + ' and I am ' + this.age + ' years old');
        }else if(style === 'casual'){
            console.log('Yo nice ' + timeOfday + ' were having' + 'My name is ' + this.name + '. I work as a ' + this.job + ' and I am ' + this.age + ' years old');
        }
    }
};

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 25,
    job: 'designer'
};

john.presentation.call(emily, 'casual', 'afternoon');
