// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// // These are comments
// job = 'teacher';
// console.log(job);

/*WOW
Multi
Line 
Comment */

// var firstName = 'John';
// var age = 28;

// // This is type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;

// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name');
// console.log(firstName + ' ' + lastNam

/***************************
 * Basic Operators
 */
// var year, yearJohn, yearMark;

// now = 2018;
// yearJohn = now - 28;
// yearMarl = now - 33;

//  console.log(yearJohn);

//  console.log(now + 2);

/* 
    Operator Precedence
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// //More Operators
// x = x * 2;
// x *= 2;

// Coding Challange 1

// var markWeight, johnWeight, markHeight, johnHeight, markBmi, johnBmi;

// markHeight = 1.8; //Meters
// johnHeight = 1.6; //Meters

// markWeight = 75; //kg
// johnWeight = 80 //kg

// markBmi = markWeight / (markHeight *= markHeight);
// johnBmi = johnWeight / (johnHeight *= johnHeight);

// var greater = markBmi > johnBmi;

// console.log(markBmi + ' ' + johnBmi);

// console.log('Is Mark\'s BMI greater than John\'s? ' + greater);

/* 
    If / Else Statements
*/

// var firstName = 'John';
// var maritalStatus = 'single';

// if (maritalStatus === 'married'){
//     console.log(firstName + ' is married;')
// } else {
//     console.log(firstName + ' is not married!');
// }

// var isMarried = false;
// if (isMarried) {
//     console.log(firstName + ' is married;')
// } else {
//     console.log(firstName + ' is not married!');
// }

// Boolean Logic

// var firstName = 'John';
// var age = 25;

// if (age < 13){
//     console.log(firstName + ' is a boy.');
// } else if(age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if(age >= 20 && age < 30){
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }


// The Ternary Operator and Switch Statements

// var firstName = 'John';
// var age = 22;

// age >= 18 ? console.log(firstName + ' drinking beer.')
// : console.log(firstName + ' drinks juice.')

// var drink = age >= 18 ? 'beer' : 'juice';

// // console.log(drink);

// // Switch Statement

// var job = 'designer';
// switch (job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     case 'driver': 
//         console.log(firstName + ' drives an Uber.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// Truthy and Falsy Values and equality operators

// var height;

// if (height) {
//     console.log('The variable is defined.');
// } else {
//     console.log('The variable is not defined!')
// }


//Coding Challange #2

// var johnAvg, mikeAvg, maryAvg;

// johnAvg = (90 + 90 + 90) / 3;

// mikeAvg = (90 + 90 + 90) / 3;

// maryAvg = (90 + 90 + 90) / 3;

// if (johnAvg > mikeAvg && johnAvg > maryAvg){
//     console.log('John has the highest average with ' + johnAvg + ' points.');
// } else if ( mikeAvg > johnAvg && mikeAvg > maryAvg) {
//     console.log('Mike has the highest average with ' + mikeAvg + ' points.');
// } else if ( maryAvg > johnAvg && maryAvg > mikeAvg) {
//     console.log('Mary has the highest avereage with ' + maryAvg + ' points.');
// } else {
//     console.log('There is a tie with John getting ' + johnAvg + ' points.' + ' Mike getting ' + mikeAvg + ' points.' + ' and Mary geting ' + maryAvg + ' points.');
// }

// Functions

// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// console.log(ageJohn);

// function yearsToRetire(birthYear, firstName){
//     var age = calculateAge(birthYear);
//     var retirement = 65 - age;
//     console.log(firstName + ' retires in ' + retirement + ' years.');
// }

// yearsToRetire(1990, 'John');

// Function Statments and Expressions

//Function Declaration

// function yourJob(job, firstName) {

// }

//Function Expression
// var yourJob = function(job, firstName){
//     switch(job){
//         case 'teacher':
//             return firstName + ' teaches kids!';
//         case 'driver':
//             return firstName + ' drives Uber!'; 
//         case 'designer':
//             return firstName + ' designs websites';
//         default:
//             return firstName + ' does something else';
//     }
// }
// console.log(yourJob('teacher', 'John'));

//Arrays

// var names = ['John' , 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names);
// console.log(names.length);

// names[1] = 'Ben';
// names[5] = "Mary";
// console.log(names);

// Different Data Types

// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.push('blue'); // Addes an element to the end of the array

// john.unshift('Mr.') // Adds an element to the beginning of the array

// john.pop(); // Removes the the last element of the array

// john.shift(); // Removes the first element of the array

// console.log(john.indexOf(1990)); //Shows where on the array the element is

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';

// console.log(isDesigner);

// Coding Challange #3

// var bill = [124, 48, 268];

// function calcTip(bill){
//     var tip = [];
//     for(var i = 0; i < bill.length; i++){
        
        
//         if(bill[i] < 50){
//             tip.push(bill[i] * 0.2);
           
//         }else if(bill[i] >= 50 && bill[i] < 200){
//             tip.push(bill[i] * 0.15);
            
//         }else {
//             tip.push(bill[i] * 0.1);
            
//         }
//     }
//     return tip ;
// }

// var tip = calcTip(bill);

// function calcTotal(bill, tip){
//     var total = [];
//     for(var i = 0; i < bill.length; i++){
//         total.push(bill[i] + tip[i]);
//     }
//     return total;
// }
// var total = calcTotal(bill, tip);

// console.log('Bill \n' + bill + '\nTips \n' + tip + '\nTotal \n' + total);

// Objexts and Properties

//Object literal syntax
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMArried: false
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear'
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] =  true;
// console.log(john);

// // New object Sytax

// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

// Objects and Methods

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1995,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMArried: false,
//     calcAge: function(birthYear) {
//         this.age = 2018 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john);

// Coding Challange # 4

// markHeight = 1.8; //Meters
// johnHeight = 1.6; //Meters

// markWeight = 75; //kg
// johnWeight = 80 //kg

// var mark = {
//     name: 'Mark',
//     mass: 92,
//     height: 1.95,

//     calcBmi: function(height, mass){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// var john = {
//     name: 'John',
//     mass: 75,
//     height: 1.6,

//     calcBmi: function(height, mass){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// var markBmi = mark.calcBmi();
// var johnBmi = john.calcBmi();

// if(markBmi > johnBmi){
//     console.log(mark.name + ' has the highest BMI with ' + markBmi);
// } else if(johnBmi > markBmi){
//     console.log(john.name + ' has the highest BMI with ' + johnBmi);
// }else {
//     console.log(john.name + ' has a BMI of '+ johnBmi + ' which is the same as ' + mark.name + ' with a BMI of ' + markBmi);
// }

// Loops and Iteration

// for (var i = 1; i <= 10; i++){
//     console.log(i);
// }

// For loop
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++){
//     console.log(john[i]);
// }


// // while loop
// var i = 0;
// while(i < john.length){
//     console.log(john[i]);
//     i++;
// }

// continue and break statements

// continue starts the next iteration in the loop
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// // break exits the loop
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

//small chalange
// var john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = john.length -1; i >= 0; i--){
//     // if(typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

var john = {
    bill: [124, 48, 268, 180, 42],
    tip: [],
    total: [],
    calcTip: function (){
        for(var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 50){
                this.tip.push(this.bill[i] * 0.2)
                this.total.push(this.tip[i] + this.bill[i])
            }else if(this.bill[i] >= 50 && this.bill[i] < 200){
                this.tip.push(this.bill[i] * 0.15)
                this.total.push(this.tip[i] + this.bill[i])
            }else {
                this.tip.push(this.bill[i] * 0.1)
                this.total.push(this.tip[i] + this.bill[i])
            }
        }
    }
}

var mark = {
    bill: [77, 375, 110, 45],
    tip: [],
    total: [],
    calcTip: function (){
        for(var i = 0; i < this.bill.length; i++){
            if(this.bill[i] < 100){
                this.tip.push(this.bill[i] * 0.2)
                this.total.push(this.tip[i] + this.bill[i])
            }else if(this.bill[i] >= 100 && this.bill[i] <= 300){
                this.tip.push(this.bill[i] * 0.1)
                this.total.push(this.tip[i] + this.bill[i])
            }else {
                this.tip.push(this.bill[i] * 0.25)
                this.total.push(this.tip[i] + this.bill[i])
            }
        }
    }
}

function calcAvg(tip){
    var tipAvg = 0;
    for(var i = 0; i < tip.length; i++){
        tipAvg = tipAvg + tip[i];
    }
    tipAvg = tipAvg / tip.length;
    return tipAvg;
}



console.log(john, mark);

mark.calcTip();
john.calcTip();

console.log(john, mark);
console.log('Johns tips: \n' + john.tip + '\nMarks tips: \n' + mark.tip);
console.log('Johns total: \n' + john.total + '\nMarks total: \n' + mark.total);

var markAvg = calcAvg(mark.tip);
var johnAvg = calcAvg(john.tip);

if(markAvg > johnAvg){
    console.log('Mark has the higher avg with: ' + markAvg + ' while john has '+ johnAvg);
}else console.log('John has the higher avg with: ' + johnAvg + ' while mark has '+ markAvg);



