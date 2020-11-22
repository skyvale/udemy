
// === Variable Mutation & Type Coercion ===
/*
var firstName = 'John';
var lastName = 'Smith';
var age = 28;

// Type Coercion
// - changes data type to string in order to print to console
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + '. Is he married? ' + isMarried);


// Variable Mutation
// - variables can be redefined as different data types, 28 -> twenty eight
age = 'twenty eight';
job = 'driver';

*/
// -------------------------------------------------------------

// === Basic Operators === 
/*
var year, yearJohn, yearMark;
year = 2020;
yearJohn = year - 28;
yeahmark = year - 33;

// Math Operators
console.log(yearJohn);
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// Logical Operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); //false

// typeof Operator
console.log(typeof johnOlder) //boolean
console.log(typeof year) //number
*/
// -------------------------------------------------------------


// === Operator Precedence ===
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// - math operators have higher precedence over logical operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge); //true

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average); //32

// Assigning variables with precedence
var x, y;
x = y = (3 + 5) * 4 - 6; //26
console.log(x, y); // x = 26, y also = 26

// More Operators
x = x * 2;
x *= 2; // same as line above
console.log(x); //52

x += 10; //62, same as writing x = x + 10
x -= 10; //42, same as writing x = x - 10

x = x + 1;
x++; // 53, same as line above
*/
// -------------------------------------------------------------


// === CODING CHALLENGE 1 ===

/*
Mark and John are trying to compare their BMI, which is calculated using the formula: 
BMI = mass / height^2 . *Note, mass in kg and height in meter

1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIS
3. Create a boolean variable containing information about whether Mark has a higher BMI than John
4. Print a string to the console containing the variable from step 3: "Is Mark's BMI higher than John's? true"

Good luck.

*/
/*
// get mark info
var markWeight = prompt("How much does Mark weigh in kg?");
var markHeight = prompt("How tall is Mark in meters?");

// get john info
var johnWeight = prompt("How much does John weigh in kg?");
var johnHeight = prompt("How tall is John in meters?");

// calculate bmis
var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

// does mark have higher bmi?
var isMarkThicc = markBMI > johnBMI;

// print to console
console.log("Is Mark's BMI higher than John's? " + isMarkThicc);
*/


// -------------------------------------------------------------
/*

// === If/Else Statements ===

var firstName = 'John';
var civilStatus = 'single';

// is John married or not?
// if civilStatus = married then the value is true and the IF will run
// if civilStatus != married then the value is false and the ELSE will run
if (civilStatus === 'married') { 
    console.log(firstName + ' is married!');
} else { 
    console.log(firstName + ' is not married!'); 
}

// - remember, ifelse statements check if something is TRUE or FALSE
var isMarried = true;
if (isMarried) { // (isMarried) is the same as saying (isMarried === true)
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married!');
}


*/
// -------------------------------------------------------------


// === Boolean Logic ===

/*
    AND -> &&
    OR -> ||
    NOT -> !
*/
/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');

} else if (age >= 13 && age < 20) { //between 13 and 20
    console.log(firstName + ' is a teen.');

} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');

} else {
    console.log(firstName + ' is a human.');

}
*/

// -------------------------------------------------------------


// === Ternary Operator & Switch Statements ===
/*
var firstName = 'John';
var age = 16;

// Ternary Operator
// ? = IF, : = ELSE
age >= 21 ? console.log(firstName + 'drinks beer.') : console.log(firstName + ' drinks juice.')

// if the age is 21 or over, drink = beer
// if the age is under 21, drink = juice
var drink = age >= 21 ? 'beer' : 'juice';

// works the same as the ternary above
if (age >= 21) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch Statement
var job = 'teacher';

switch (job) {
    case 'teacher':
    case 'instructor': // you can add multiple cases to evaluate
        console.log(firstName + ' teaches kids how to code.');
        break; // make sure to include break or it will continue evaluating endlessly
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default: // works same as ELSE
        console.log(firstName + ' does something else.');
}   

// evaluate a switch for booleans
switch (true) {
    case age < 13:
        console.log(firstName + 'is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + 'is a teen.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + 'is a young man.');
        break;
    default:
        console.log(firstName + 'is a human.');
}
*/

// -------------------------------------------------------------


// === Truthy / Falsy Values & Equality Operators ===

/*

    Falsy Values: undefined, null, 0, '', NaN
    Truthy Values: NOT falsy values

*/
/*
var height;

if (height || height === 0) { // since height is undefined, it is FALSE
    console.log('Variable is defined.');
} else {
    console.log("Variable has NOT been defined.");
}

// Equality Operators

// == is not strict, so it doesn't care about datatypes
// === is strict, so if the datatypes aren't the same, even if the value is, it will return false

height = 23;
if (height == '23') {
    console.log('The == operator does type coercion!');
} else {
    console.log('=== is strict!');
}
*/


// -------------------------------------------------------------


// === CODING CHALLENGE 2 ===

/*

John and Mike both play basketball on different teams. In the latest 3 games, John's team scored 89,
120, and 103 points, while Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team.
2. Decide which teams wins in average (highest average score), and print the winner to the console.
   Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account that there might be a draw!

4. EXTRA: Mary also plays basketball, and her team scored 97, 134, and 105 points. Like before, log the average winner
   to the console. HINT: you will need the && operator to take the decision.
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

Good luck.

*/

/*
// calculate average scores for each team
var johnAvr = (89 + 120 + 103) / 3;
var mikeAvr = (116 + 94 + 123) / 3;
var maryAvr = (97 + 134 + 105) / 3;

// check the score values
console.log('john: ' + johnAvr);
console.log('mike: ' + mikeAvr);
console.log('mary: ' + maryAvr);

// determine which score is highest, or if there is a draw
switch (true) {
    // if johns score is highest
    case johnAvr > mikeAvr && johnAvr > maryAvr: 
        console.log('John\'s team wins with an average score of ' + johnAvr);
        break;
    // if mikes score is highest
    case mikeAvr > johnAvr && mikeAvr > maryAvr:
        console.log('Mike\'s team wins with an average score of ' + mikeAvr);
        break;
    // if marys score is highest   
    case maryAvr > johnAvr && maryAvr > mikeAvr:
        console.log('Mary\'s team wins with an average score of ' + maryAvr);
        break;
    // if there were any draws
    case johnAvr === mikeAvr || johnAvr === maryAvr:
    case mikeAvr === johnAvr || mikeAvr === maryAvr:
    case maryAvr === johnAvr || maryAvr === mikeAvr:
        console.log('It was a draw!');
        break;

}

*/



// -------------------------------------------------------------

// === Functions ===
/*
// DRY = Don't Repeat Yourself!
// if you have to write the same code more than once, utilise a function for it

// birthYear = ARGUMENT
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

// '1990' passed in for birthYear = PARAMETER
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969)

console.log(ageJohn, ageMike, ageJane);

// Functions with multiple arguments
function yearsUntilRetirement(year, firstName) {
    // functions CAN call other functions
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' has already retired.');
    }

}

yearsUntilRetirement(1998, 'Skylar');
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1930, 'Jane');


*/
// -------------------------------------------------------------

// === Functions Statements & Expressions ===
// writing functions in a slightly different way
/*
// Function Declaration
function declaration(job, firstName){}

// Function Expression = assigning functions to a variable, they will ALWAYS return a value of some type
var expression = function(job, firstName){

    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code'; // 'return' will work the same as 'break'
        case 'driver':
            return firstName + ' drives an uber in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' is retired';
    }
}

console.log(expression('teacher', 'John'));
console.log(expression('designer', 'Jane'));
console.log(expression('retired', 'Mark'));


// Function Statements = if/else, while loops, etc.
// - Statements don't produce immediate values 

*/



// -------------------------------------------------------------

// === Arrays ===
/*
// Declaring an array
var names = ['John', 'Mark', 'Jane']; // most commonly used
var years = new Array(1990, 1969, 1948);

// Accessing data in array
console.log(names[0]); // first element of array
console.log(names); // entire array
console.log(names.length); // length of array

// Mutate data in existing array
names[1] = 'Ben'; // change specified element in array
names[names.length] = 'Mary'; // adds new element to end of array

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

// Methods that can be applied to arrays
// ---
john.push('blue'); // adds new element to end of array
john.unshift('Mr.'); // adds element to front of array
john.pop(); // removes element from the end
john.shift(); // removes element from the front
john.indexOf(1990) // returns position of specified element, if element is not present it returns -1


var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John IS a designer';
console.log(isDesigner);
*/


// -------------------------------------------------------------

// === CODING CHALLENGE 3 ===

/*

    John and his family went on a holiday and went to 3 different restaurants. 
    The bills were $124, $48, and $268.
    
    To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
    He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is $50 to $200,
    and 10% if the bill is more than $200.

    In the end, John would like to have 2 arrays:
    1) Containing all three tips (one for each bill)
    2) Containing all three final paid amounts (bill + tip)

    (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

    Good luck.

*/
/*
var bills = [124, 48, 268];
var tips = [];
var totals = [];
var tip;
var total;

// function that will return the amount to tip
function tipCalculator(bill) {
    
    if (bill < 50) {
        tip = bill * 0.2;
    } else if (bill >= 50 && bill < 200) {
        tip = bill * 0.15;
    } else if (bill > 200) {
        tip = bill * 0.1;
    }

}

// function that will calculate the total amount to paid
function totalBill(bill, tip) {
    total = bill + tip;
}

// runs the functions for all 3 bills and creates the arrays
for (let i = 0; i < bills.length; i++) {

    // calculations
    tipCalculator(bills[i]);
    totalBill(bills[i], tip);

    // add to arrays
    tips.push(tip);
    totals.push(total);

}

console.log(tips);
console.log(totals);

*/



// -------------------------------------------------------------

// === Objects & Properties ===

// In arrays, order matters, but in objects, order does not matter at all
/*
// Create an object literal
var john = {
    firstName: 'John', // this is a key value pair
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

// You can also create an object using this syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

// Accessing properties of an object
console.log(john.firstName); // use dot notation
console.log(john['lastName']); // using brackets and key name

// Mutating data in an object
john.job = 'designer';
john['isMarried'] = true;

*/

// -------------------------------------------------------------

// === Objects and Methods ===
/*
// Methods are functions that are attached to objects
// Note that ARRAYS are also objects because they have methods (push, pop, etc.)

var john = {
    firstName: 'John', // this is a key value pair
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() { // Adding a method to an object
        this.age = 2018 - this.birthYear; // 'this' refers to the current object, so this.birthYear = john.birthYear
        // this.age will create the key 'age' within the current object and assign the new value to it
    }
};

// Calling a method of an object
john.calcAge();
console.log(john);

*/


// -------------------------------------------------------------

// === CODING CHALLENGE 4 ===

/* 

Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality using objects and methods.
1) For each of them, create an object with properties for their full name, mass, and height.
2) Then, add a method to each object to calculate the BMI. Save the BMI to the object and also
   return it from the method.
3) In the end, log to the console who has the highest BMI, together with the full name and the
   respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass/height^2
          Mass in kg and Height in meter

Good luck.

*/

/*
var mark = {
    name: 'Mark',
    mass: 80,
    height: 1.78,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var john = {
    name: 'John',
    mass: 85, 
    height: 1.89,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

// calculate the bmi using the object methods
var markBMI = mark.calcBMI();
var johnBMI = john.calcBMI();

// determine who has the higher bmi
if (markBMI > johnBMI) {
    console.log(mark.name + ' has higher BMI than John at ' + mark.bmi);
} else if (markBMI < johnBMI) {
    console.log(mark.name + ' has lower BMI than John at ' + mark.bmi);
} else if (markBMI === johnBMI) {
    console.log('They have the same BMI both being ' + mark.bmi);
}

*/



// -------------------------------------------------------------

// === Loops & Iteration ===
/*
// FOR loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/
/* i = 0 -> 0 < 10 = true -> log i to the console -> i++
   i = 1 -> 1 < 10 = true -> log i to the console -> i++
   ...
   i = 10 -> 10 < 10 = false -> exits loop
*/
/*
var john = ['John', 'Smith', 1990, 'teacher', false];

for (let i = 0; i < john.length; i++) {
    console.log(john[i]);
}


// WHILE loops
// make sure you define 'i' first
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}

// Continue & Break statements
for (let i = 0; i < john.length; i++) {

    // continue only if the element in the array is a string, 
    // if not it will skip the code following the 'continue', but it will continue the loop
    if (typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i]);

}

for (let i = 0; i < john.length; i++) {

    // if element is not a string, EXIT the loop completely 
    if (typeof john[i] !== 'string') break; // the if statement with 'continue' and 'break' can be made in one line
    console.log(john[i]);

}


// Looping BACKWARDS
for (let i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
// i = the length of the array - 1 because arrays start at 0
// so, if the array has 6 elements, it will have a length of 5

*/



// -------------------------------------------------------------


// === CODING CHALLENGE 5 ===

/*

Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180, and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and
10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1) Create an object with an array for the bill values.
2) Add a method to calculate the tip.
3) This method should include a loop to iterate over all the paid bills and do the tip calculations.
4) As an output, create 1. a new array containing all tips, and 2. an array containing final paid amounts (bill + tip).
   HINT: Start with two empty [] arrays as properties and then fill them up in the loop.

EXTRA AFTER FINISHING:

Mark's family also when on a holiday, going to 4 different restaurants.
The bills were $77, $375, $110, and $45.

Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and
25% if the bill is more than $300.

5) Implement the same functionality as before, this time using Mark's different tipping rules.
6) Create a function, not a method, to calculate the average of a given array of tips. 
   HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0).
   After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average).
7) Calculate the average tip for each family
8) Log to the console which family paid the highest tips on average.

Good luck.

*/

// object for john's bills
var johnsBills = {
    bills: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calcTip: function() {
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips.push(this.bills[i] * 0.20);
            } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
                this.tips.push(this.bills[i] * 0.15);
            } else {
                this.tips.push(this.bills[i] * 0.10);
            }
        }
    }
}

// calculate the tips for john
johnsBills.calcTip();

// calculate the totals for john
for (let i = 0; i < johnsBills.bills.length; i++) {
    johnsBills.totals.push(johnsBills.bills[i] + johnsBills.tips[i]);
}

console.log(johnsBills);


// object for mark's bills
var marksBills = {
    bills: [77, 475, 110, 45],
    tips: [],
    totals: [],
    calcTip: function() {
        for (let i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 100) {
                this.tips.push(this.bills[i] * 0.20);
            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                this.tips.push(this.bills[i] * 0.10);
            } else {
                this.tips.push(this.bills[i] * 0.25);
            }
        }
    }
}

// calculate mark's tips
marksBills.calcTip();
console.log(marksBills);

// function to find tip average given an array as an argument
function tipAverageCalc(tips) {

    let tipAvg = 0;
    for (let i = 0; i < tips.length; i++) {  
        tipAvg += tips[i];   // add the sum of all tips in the given array
    }
    tipAvg /= tips.length; // divide the sum by the length of the array to find the average

    return tipAvg; // return the average
}

// calculate the average tips for both families
let marksTipAvg = tipAverageCalc(marksBills.tips);
let johnsTipAvg = tipAverageCalc(johnsBills.tips);

// determine who tipped more on average and print to console
if (marksTipAvg > johnsTipAvg) {
    console.log('Mark tipped more than John at $' + marksTipAvg);
} else if (marksTipAvg < johnsTipAvg) {
    console.log('John tipped more than Mark at $' + johnsTipAvg);
} else {
    console.log('They both tied for tips.');
}