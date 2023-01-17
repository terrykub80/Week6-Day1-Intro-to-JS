console.log("hello from the main.js file!");

// Basics of JavaScript
// = Comments //

/*
This 
is a
multiline comment in Javascript
*/

/* ------- Variable Declaration in JavaScript
Primitive Data Type: String, Number, Boolean, Undefined, Null
Object Types: Objects, Array, Function */


// Variable Declaration

var myName;

console.log(myName);

// String Declaration
var myName = 'Terry';

          // console.log() is equivalent to Python's print() function
console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``. 
//  The tick marks (``) have a special behavior to format the string
//      Tick Marks + ${} is equiv to f"{}" in Python

console.log("My name is ${myName}.");
console.log('My name is ${myName}.');
console.log(`My name is ${myName}.`);


//      Integers and Float both show as "number" data type in JS
// Integer
var myAge = 99;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14

console.log(pi);
console.log(typeof pi);




// Boolean
var boolTrue = true;

console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);

//  Undefined
var something;

console.log(something);
console.log(typeof something);

// Null
var someNull = null

console.log(someNull);
console.log(typeof someNull); // A Bug in the code!

//           Object Data Types

// Object
var myObject = {
    a: 123,
    test: 'Hello World'
};

console.log(myObject);
console.log(typeof myObject);


// Array
var myArr = ['Terry', 'Ryan', 'Pensacola'];

console.log(myArr);
console.log(typeof myArr);

// Function
function abc(){}; // This is creating a function with 'Pass'

console.log(abc);
console.log(typeof abc);


// Accessing properties from an object
let person ={
    first: 'Terry',
    last: 'Kubalewski',
    languages: ['Python', 'JavaScript']
};

console.log(person);

// Bracket Notation
console.log(`My first name is ${person['first']}`);

// Dot Notation
console.log(`My last name is ${person.last}`);

console.log(person.languages);

// Accessing properties (indicies) in an array
console.log(`My favorite langauge is ${person.languages[0]}`);

//
conlog = console.log;
conlog('Turned console.log into conlog');
//

// Arrays have a "length" property
var myNewArr = ['red', 'white', 'blue'];

conlog(myNewArr, myNewArr.length);


// Clear our console
console.clear();


// 'var' vs. 'let' vs. 'const'

// let - Allows us to declare a variable similar to var
// *let is block-scope, var is global scope*

let myCountry = 'United States';

if (true){
    var myState = 'Florida';
    let myCity = 'Milton';
    conlog(myCity, myState, myCountry)
};

conlog(myState);
// conlog(myCity) -   ReferenceError: myCity is not defined
//  doesn't work since "let" used in block so it does not show
//  outside of block. myState was used with "var" so it shows
conlog(myCountry);


// const - similar to 'let' (block-scoped)
// 2 Differences -
//      - 1. Needs a value when declared
//      - 2. Cannot be reassigned

{
    let myAge = 99;
    const myHeight = 69;
    conlog(myAge);
    myAge = 100;
    conlog(myAge);
    conlog(myHeight);
    // myHeight = 72  -  TypeError: Assignment to constant variable.
    //      - 'const' cannot be reassigned like 'let' can
};


// Be carefule when using const with an object
//   - can update individual values but not whole object

{
    const cities = ['Chicago', 'New Yourk', 'Boston', 'San Fran', 'Denver'];

    conlog(cities);

    cities[1] = 'San Diego';

    conlog(cities);

    // cities = ['Kansas City', 'Buffalo', 'Cleveland']  - TypeError: Assignment to constant variable.

}

console.clear();


// Basic Math Operations

// Addition
conlog(1+2);

let sum = 5 + 5;
conlog(sum);
sum += 5;
conlog(sum);
sum ++  // sum += 1
conlog(sum);
conlog('-------');

// Subtraction
conlog(5-2)

let diff = 20 - 5;
conlog(diff);
diff -= 2;
conlog(diff);
diff --  // diff -= 1
conlog(diff);
conlog('-------');

// Multiplication
conlog(2*4)

let prod = 8 * 5;
conlog(prod);
prod *= 5; // prod = prod * 5
conlog(prod);
conlog('-------');

// Division
conlog(8/2)

let quotient = 40 / 5
conlog(quotient);
quotient /= 2;
conlog(quotient)
conlog('-------');


// Exponents
conlog(4**2);
conlog(4**3);

let square = 5 ** 2;
conlog(square);
square **= 2; // square = square ** 2
conlog(square);
conlog('-------');

// Modula
conlog(16 % 2)
let remainder = 19 % 4;
conlog(remainder);
remainder %= 2; // remainder = rmeainder % 2
conlog(remainder);
conlog('-------');



let myString = 'My age is ';
let myNewAge = 547;

let addedString = myString + myNewAge;
conlog(addedString);
conlog(typeof addedString);


conlog(square);
let popQuiz = square + '4';
conlog(popQuiz);

let addSquare = square + Number('4');
conlog(addSquare);

conlog('-------');

console.clear();





// JS Comparisons

conlog(5 == 5);
conlog ( 5 == 5.0);
conlog( 5 == '5'); // Double equal doesn't worry about data type
conlog(5 === '5'); // Triple equal sign means equals everything including data type

conlog('-------');

conlog( 1 == true);

conlog('-------');

conlog('10' > 9);

conlog('100' > '9');
conlog('-------');



// When JS compares object, it looks for REFERENCE ONLY!!!

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 4];

conlog(arr1 == arr2);
conlog(arr1 === arr2);
conlog('-------');

let animals = ['penguin', 'wolf', 'kangaroo'];
let newAnimals = animals;

conlog(animals === newAnimals)
conlog('-------');



//  Greater Than (>), Greater Than or Equal (>=), Less Than (<), Less Than or Equal (<=)
//  Equal allow type conversion (==), Equal no type conversion (===), 
//  Not Equal yes conversion (!=), Not Eqaul no conversion (!==)

conlog(5 != '5')
conlog(5 !== '5')
conlog('-------');

console.clear()


//  Control Flow

// If Condition

// Syntax: if (condition expression){code to execute if true}



conlog('BEGIN')
let randomDigit = 14
if (randomDigit > 20){
    conlog("The condition was true");
    conlog("still in {}");
};
conlog("Hey what is going on");
conlog('END');
conlog('-------');

// If, Else If, Else
conlog("BEGIN");
let randomInt = 75;
if (randomInt % 100 === 0){
    conlog("The number is divisible by 100")
} else if (randomInt % 10 === 0){
    conlog("The number is divisible by 10")
} else {
    conlog("The number is not divisible by 100 or 10")
};
conlog('-------');

// And Or
// && - and
// || - or

// T && T = T
// T && F = F
// F && T = F
// F && F = F
//  T || T = T
// T || F = T
// F || T = T
// F || F = F

let personAge = 77

if (personAge > 18 && personAge < 40){
    conlog('Young Adult')
};

if (personAge < 18 || personAge > 65){
    conlog("You get a discount!")
};

conlog('-------');



//  JS Loops
// for, for....in, for....of, while, do while

// Standard for loop
// Syntax: for (counter; expression/condition; increment/decrement for counter){
    // code to execust each loop }

conlog("Loop has started");

for (let i = 0; i <= 20; i++){
    conlog(i);
};

conlog("Loop has ended");
conlog('-------');

let colors = ['orange', 'green', 'pink', 'yellow', 'black']
for (let i=0; i < colors.length; i++){
    conlog(i, colors[i])
};
conlog('-------');


// for....in - used to loop over properties of an object

let chiTeams = {
    mlb: "Cubs", 
    nba: 'Bulls',
    nfl: 'Bears',
    nhl: 'Blackhawks'
};

// Syntax - for (let variableName in object){ code to execute for each property }

for (let team in chiTeams){
    conlog(team);
    conlog(chiTeams[team]);
    conlog('-------');
}

conlog('-------');


let planets = ['Mercury', 'Mars', 'Earth', 'Saturn', 'Uranus', 'Jupiter'];

for (let p in planets){
    conlog(p)
};
conlog('-------');

// for....of - used to loop over the elements in an iterable (Array, String, etc.)
for (let p of planets){
    conlog(p);
};
conlog('-------');

let someString = 'Hello World'

for (let letter of someString){
    conlog(letter)
};

// While Loop - loop while a condition is true
// Syntax: while (condition){ code to execute while condition is true}

conlog("WHILE LOOP");
let startingNumber = 0;

conlog("Before:", startingNumber);

while (startingNumber < 500){
    conlog(startingNumber);
    startingNumber += Math.floor(Math.random() *100);
    
};
conlog("After:", startingNumber);

conlog('-------');

// Do While Loop - DO the first part AT LEAST ONCE
//   if the condition is still true, continue the while loop

// Syntax do { code to execute } while (condition)

let x;

conlog('DO WHILE');

do {
    x = Math.floor(Math.random() * 100)
    conlog(x)
} while (x < 50);

conlog("DO WHILE OVER - x is", x)











