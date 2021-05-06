'use strict'

let score = 0;

let userName = prompt('What is your name?')
// console.log('Hello, ' + userName + '. Welcome to my about me site, lets play a game!')
alert('Hello, ' + userName + '. Welcome to my about me site, lets play a game!')

// console.log('I\'m going to ask you five questions, please answer them with a simple yes or no')
alert('I\'m going to ask you seven questions, please answer them with a simple yes or no')

let myName=prompt('Is my name Ben?');
if (myName.toLowerCase() === 'yes' || myName.toLowerCase() === 'y') {
  score++
  // console.log('That is correct!');
  alert('That is correct!');
} else if (myName.toLowerCase() === 'no' || myName.toLowerCase() === 'n') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

let myLocation=prompt('Do I live in Everett?');
if (myLocation.toLowerCase() === 'no' || myLocation.toLowerCase() === 'n') {
  score++
  // console.log('That is correct!');
  alert('That is correct!');
} else if (myLocation.toLowerCase() === 'yes' || myLocation.toLowerCase() === 'y') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

let age=prompt('Am I 32 years old?');
if (age.toLowerCase() === 'no' || age.toLowerCase() === 'n') {
  score++
  // console.log('That is correct!');
  alert('That is correct!');
} else if (age.toLowerCase() === 'yes' || age.toLowerCase() === 'y') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

let school=prompt('Did I go to Bothell High School?');
if (school.toLowerCase() === 'yes' || school.toLowerCase() === 'y') {
  score++
  // console.log('That is correct!');
  alert('That is correct!');
} else if (school.toLowerCase() === 'no' || school.toLowerCase() === 'n') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

let potato=prompt('Have I spent three years in Nicaragua farming potatoes?');
if (potato.toLowerCase() === 'no' || potato.toLowerCase() === 'n') {
  score++
  // console.log('That is correct!');
  alert('That is correct!');
} else if (potato.toLowerCase() === 'yes' || potato.toLowerCase() === 'y') {
  // console.log('Incorrect!');
  alert('Incorrect!');
}

//guess my number
let numberGameValue = Math.floor(Math.random() * 50);
let guesses = 0;
let userNumber;
while ((guesses < 4) && (userNumber != numberGameValue)) {
  userNumber = prompt('Guess a number between 1 and 50');
  console.log(guesses)
  guesses++;
  if (userNumber == numberGameValue) {
    alert('THAT IS CORRECT!!');
    score++;
  } else if (userNumber > numberGameValue) {
    alert('Too high!');
  } else if (userNumber < numberGameValue) {
    alert('Too low!');
  }
  if ((guesses == 4) && (userNumber != numberGameValue)) {
    alert('The number was ' + numberGameValue + ', better luck next time!')
  }
}

// pick which fits
guesses = 0
let rivers = ['john day', 'grand ronde', 'stillaguamish', 'stilly', 'snoqualmie', 'owyhee', 'skykomish', 'john day River', 'grand ronde river', 'stillaguamish river', 'stilly river', 'snoqualmie river', 'owyhee river', 'skykomish river']
let river = '';
while (!rivers.includes(river.toLowerCase()) && guesses < 6) {
  river = prompt('Can you name one river I\'ve kayaked? (hint! They\'re all in Washington and Oregon!)');
  guesses++;
  if (rivers.includes(river.toLowerCase())) {
    alert('That is correct!');
    score++;
}   else if (!rivers.includes(river.toLowerCase()) && guesses === 6) {
    alert('Nope, sorry! You\'re out of guesses.')
}   else {
    alert('Incorrect!');
}}
alert('The rivers I have kayaked are: The John Day, Grand Ronde, Stillaguamish, Snoqualmie, Owyhee, and the Skykomish.')

if (score === 7) {
  alert('Congratulations ' + userName + '!! you\'ve answered all seven of my questions correctly!');
} else {
    alert('Thanks for playing ' + userName + ', you answered ' + score + ' out of 7 questions correctly.');
}