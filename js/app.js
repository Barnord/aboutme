'use strict'

let correct = 0;
let myName = 'Is my name Ben?';
let myLocation = 'Do I live in Everett?';
let age = 'Am I 32 years old?';
let school = 'Did I go to Bothell High School?';
let potato = 'Have I spent three years in Nicaragua farming potatoes?';
let score = 0;

function askYes(question) {
  let answer=prompt(question);
  if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    score++
    // console.log('That is correct!');
    alert('That is correct!');
  } else if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    // console.log('Incorrect!');
    alert('Incorrect!');
  }
}

function askNo(question) {
  let answer=prompt(question);
  if (answer.toLowerCase() === 'no' || answer.toLowerCase() === 'n') {
    score++
    // console.log('That is correct!');
    alert('That is correct!');
  } else if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
    // console.log('Incorrect!');
    alert('Incorrect!');
  }
}

let userName = prompt('What is your name?')
// console.log('Hello, ' + userName + '. Welcome to my about me site, lets play a game!')
alert('Hello, ' + userName + '. Welcome to my about me site, lets play a game!')

// console.log('I\'m going to ask you five questions, please answer them with a simple yes or no')
alert('I\'m going to ask you five questions, please answer them with a simple yes or no')

askYes(myName);
askNo(myLocation);
askNo(age);
askYes(school);
askNo(potato);

if (score === 5) {
  alert('Congratulations ' + userName + '!! you\'ve answered all five of my questions correctly!');
} else {
    alert('Thanks for playing ' + userName + ', you answered ' + score + ' out of 5 questions correctly.');
}


// FIVE YES OR NO QUESTIONS

// Is my Name Ben? Y
// Do I live in Everett? N
// Am I 32 years old? N
// Did I go to Bothell High School? Y
// Have I spent three years in Nicaragua farming potatoes? Y
