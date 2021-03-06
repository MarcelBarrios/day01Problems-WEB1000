//1) Can you restate the conditional more simply?
if ((isMichaelPhelps || isMerman) && (isMichaelPhelps || hasGills))
  winGoldMedals();


if (isMichaelPhelps && (isMerman || hasGills))
  winGoldMedals();
// ==========================================================================================

// 2) Can you restate the conditional to use only one negation?

let rich
let happy

const killSelf = function() {
  console.log("shot your self");
}

const liveOn = function() {
  console.log("don't worry be happy");

}

if (!(rich || happy)) {
  killSelf();
} else {
  liveOn();
};
// ==========================================================================================

// 3) Camn you restate the condition to use two negations and be more legible?

if (!(urgent && important))
  usePostOfice();
else
  useFedex();


if (!urgent || !important)
  usePostOfice();
else
  useFedex();
// ==========================================================================================

// 4) Under which circumstances will doSomething run?
if (x > 5 && x <= -5)
  doSomething();
// nunca, porque nunca puede ser mayor que cinco y menor o igual que menos cinco.
// ==========================================================================================

// 4b) Under which circumstances will doSomething run?
if (x > 5 || x <= -5)
  doSomething();
// va a correr cuando sea mayor que cinco o menor o igual que menos cinco
// ==========================================================================================

// 5) Can you restate the conditional to use no negations?
if (!(x > 10 && y < 15))
  alert("You got it!");
else
  prompt("What you need?");

if (x >= 10 || y = < 15)
  alert("You got it!");
else
  prompt("What you need?");
// ==========================================================================================

// 6) Can you restate the conditional to use only one negation?
let x = 2;
let y = 1;
let z = 4;

if (!(x < 10) || y <= 10 || z <= 25 || !dead) {
  console.log("You know your DeMorgan's Laws");
}

if (x >= 10 && !(y > 10 && z > 25 && dead)) {
  console.log("You know your DeMorgan's Laws");
}


if (x >= 10 && y > 10 && z > 25 && !dead)) {
  console.log("You know your DeMorgan's Laws");
}
// ==========================================================================================

// 7) Can you distribute the negation across the expression in parens?

if (!(!alive || distance > 1000 || trapped || enemies < 0)) {
  alert("game goes on");
}

if (alive && !(distance <= 1000) && !trapped && !(enemies >= 0)) {
  alert("game goes on");
}
// ==========================================================================================

// 8) Can you distribute the negation across the expression in parens?

if (!(dead && level < 99 && world == "Earth")) {
  alert("Life goes on");
}

if (dead || level >= 99 || world !== "Earth") {
  alert("Life goes on");
}

//9) Generate a random number between 0 and 1 in Javascript

Math.random();

//10) Generate a random number between 0 and 10 in Javascript

Math.random() * 10;

//11) Generate a random integer between 0 and 10 (inclusive)

Math.ceil(Math.random() * 10)

//12) Generate a random number between 5 and 10

Math.random() * 5 + 5

//12b) Generate a random integer between 5 and 10

Math.floor(Math.random() * 6 + 5)

//13) Generate a random integer between -10 and 30

Math.floor(Math.random() * 41 - 10)


//14) Write a coin flip function. It should return the string "heads" half
//the time and the string "butts" the other half

function coinFlip() {
  if (Math.floor(Math.random() * 2) === 0) {
    return "heads"
  }
  return "tails"
};

// 15) Write a card picking function that outputs
// cards from a standard deck: ex 'Ace of Clubs', 'Queen of Hearts',
// '10 of Diamonds', '8 of Spades'
// There are 4 suits: Hearts, Diamonds, Clubs, Spades
// There are 13 cards for each suit: Ace, 2-10, Jack, King, Queen

// steps:
// generate a random number between 1-4 for suit
// set the value of a string variable depending on that 1-4 number
// generate a random number between 1-13 for the card's number
// put the number and the suit string together and return it
function pickCard() {
  var suit = Math.round(Math.random() * 3);
  if (suit === 0) suit = "Hearts";
  else if (suit === 1) suit = "Diamonds";
  else if (suit === 2) suit = "Clubs";
  else suit = "Spades";

  var num = Math.round(Math.random() * 12 + 1)
  var card;
  if (num === 10) card = "J";
  else if (num === 11) card = "Q";
  else if (num === 12) card = "K";
  else if (num === 13) card = "A";
  else if (num < 10) card = num;

  return card + " of " + suit;

}

//16) In programming, what is the opposite of black?

no black

//17) In programming, what is the opposite of x > y ?

x <= y

//18) Given an array of numbers, add up all the elements
var arr = [5, 6, 7, 5433, 543, 53, 535, 53, 543, 543, 23, 412, 34, 45];

function arraySum(arr, res = 0) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = arraySum(arr[i], res);
    } else if (typeof arr[i] === "number") {
      res += arr[i];
    }
  }
  return res;
};

//19) Write a function has1337s which takes an array and
//returns true if the array contains the number 1337

function has1337s(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1337) return true;
  }
  return false;
}

/*20) Write a function that receives an array and another parameter.
It will return true if one of the elements of the array is
equal to the other param. It should return false otherwise */

function containsThing(arr, theThing) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == theThing) return true;
  }
  return false;
}

/* 21) Write a function that receives an array and another parameter.
It will return true if NONE of the elements of the array is
equal to the other param. It should return false otherwise */
function doesntContain(arr, theThing) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == theThing) return false;
  }
  return true;
}


/* 22) Write a function that receives an array of numbers and returns
the average of those numbers*/
function getAvg(arr, res = 0) {
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = arraySum(arr[i], res);
    } else if (typeof arr[i] === "number") {
      res += arr[i];
    }
  }
  return res / arr.length;
};



// 23) Write a function which draws a star triangle based
//on an input number
// starz(2) =
// **
// *
//starz(4) =
// ****
// ***
// **
// *

// =====================
  // pendiente de hacer
// =====================
function starz(a=4, res=[]) {

  var counter = a;
  if (counter !== 0) {
    res.concat("*");
    if (counter === a) {
        res.concat("\r");
        counter--;
    }
  }
  return res;
};



/* 24) Write a function which receives a parameter n and returns the
sum of its half plus half of that, plus half of that, until You
reach a number lower than 2.
n = 100, result = 50+25+12.5+6.25+3.125+1.5625
n = 64, result = 32+16+8+4+2+1
*/

function sumHalves(n) {
  var a = n/2;
  var b = n/2/2;
  var c = n/2/2/2;
  var d = n/2/2/2/2;
  var e = n/2/2/2/2/2;
  var f = n/2/2/2/2/2/2;

  console.log(a, b, c, d, e, f);
  return a + b + c + d + e + f;
}
