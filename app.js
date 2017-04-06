    'use strict';

    console.log('user input values to prompts are listed below');
alert('running the script now')
// //    TODO: I want to prompt the user to guess the number 12 and they get 4 chances.
//

    var answersRight = 0;

//Question 1
    var aliens = prompt('Do you like aliens?');
      if (aliens.trim().toLowerCase() === 'yes') {
        alert('You weirdo!');
        answersRight++;
      } else if (aliens.trim().toLowerCase() === 'no') {
        alert("You're heartless!");
      } else {
        alert('You failed to input a proper answer!')
      }
      console.log('user input to prompt aliens was ' + aliens);

//Question 2
    var banana = prompt('Are you a banana?');
      if (banana.trim().toLowerCase() === 'no') {
        alert('You are in denial!');
      } else if (banana.trim().toLowerCase() === 'yes') {
        alert('Hurray! You are a banana!');
        answersRight++;
      } else {
        alert('Not a valid answer!');
      }
      console.log('user input to prompt banana was ' + banana);

//Question 3
    var turtle = prompt('Are you a turtle?');
      if (turtle.trim().toLowerCase() === 'yes') {
    var clarify = confirm('Are you sure?');
        if (clarify === true) {
          alert('You are a weird turtle!');
          answersRight++;
        } else {
          alert("I dont't believe you!");
        }
      } else if (turtle.trim().toLowerCase() === 'no') {
        alert ('ok...I was just checking...');
      } else {
        alert("What's with you and making up dumb answers??")
      }
      console.log('user input to prompt turtle was ' + turtle);
      console.log('user input to prompt clarify was ' + clarify);

//Question 4
    var name = prompt('Is your name Weirdo Turtle Alien?');
      if (name.trim().toLowerCase() === 'yes') {
        alert("Bwahahaha!!! That's hilarious!");
        answersRight++;
      } else if (name.trim().toLowerCase() === 'no') {
        var clarifyAgain = prompt('Are you sure that your name is Weirdo Turtle Alien?');
        if (clarifyAgain.trim().toLowerCase() === 'no') {
          alert("There is nothing you can do to change the name I've given you!");
        } else {
          alert('I knew it!');
          answerRight++;
        }
      console.log('user input to prompt name was ' + name);
      console.log('user input to prompt clarifyAgain was ' + clarifyAgain);
    }
    //
//Final Review Question
    var feedback = prompt('Did you like this short but invasive personal test?');
      if (feedback.trim().toLowerCase() === 'yes') {
        var clarity = confirm('Are you sure?');
        if (clarity === true) {
          alert('You are amazing! ...Mostly!');
          answersRight++;
        } else {
          alert("No takebacks!");
        }
      } else if (feedback.trim().toLowerCase() === 'no') {
        alert ('You know you actually liked it! :3');
      } else {
        alert("These are simple yes or no questions! Get it right!");
      }
      console.log('user input to prompt feedback was ' + feedback);
      console.log('user input to confirm clarity was ' + clarity);



    var correctNumber = 12;
    var notDone = true;
    var guess;

      for (var guessesLeft = 4; guessesLeft > 0  && notDone; guessesLeft--) {
        guess = prompt('What is my favorite number?');//gets user input
        guess = parseInt(guess);//converts user input to a number
      if (guess === correctNumber) {
        notDone = false;
          alert('You got it right!');
          answersRight++;
      } else if (guessesLeft === 0) {
          alert('you are out of answers');
        } else {
          alert('guess again');
        }
      }


    var state = ['montana', 'oregon', 'florida', 'arizona'];
    var notDone = true;
    var guess;

      for (var guessesLeft = 6; guessesLeft > 0  && notDone; guessesLeft--) {
        guess = prompt('What is a state have I been to other than Washington state?');
      if (state.indexOf(guess.trim().toLowerCase()) >= 0 ) {
        notDone = false;
          alert('You got it right!');
          answersRight++;
      } else if (guessesLeft === 0) {
          alert('you are out of guesses!');
        } else {
          alert('guess again!');
        }
      }
          alert('All the correct answers are ' + state.toString());



       var count = alert('You got ' + answersRight.toString() + ' answers out of 7 questions correct!');

//
// CLASS-003 CODE DEMO
//
// DATE TYPES in JS
// Object
// Function
// Array
//
// //Primitives
// Number
// String
// Boolean
// null
// undefined
// Fun Fact
// 0x23 is a Number
// 0xff is also a Number
// 23.3 + 120202 is also a Number
//
// var slug = (23.3 + 120);
//
// slug * 4;
// slug / 3;
// slug + 120;
// slug - 120;
// slug % 4;   //Modulo - means that you are diving a number by 4 and then giving you a remainder number
//
//
// slug = slug + 100;
// slug += 100;
// slug -= 100;
// slug *= 2;
// slug /= 4;
// slug %= 12;
//
// More operations on numbers
//
// slug = Math.pow(slug, 4); //slug equals slug to the power of 4
//
// slug = Math.floor(234 ,34);
//
// slug = Math.ceil(234, 34);
//
// slug = Math.round(234, 34);
//
//
//
//
// BOOLEANS - Operations that only have true and false
//
// var happy = true;
//
// happy = !happy; //The symbol ! means bang which makes the true statement above no longer true    ie.  happy now equals false
//
//
// null // means nothing
// undefined // Literally means that nothing has been defined yet
//
//
//
//
// STRINGS - messages in quotes; simple or double queotes
//
// var message = 'got to the store';
//
// message = "open the magic lantern";
//
// \n // Return (new line character)
// \t // Tab
// \\ // Actual /
// \" // Actual double quote
// \' // Actual single quote
//
// var message = 'got to the store \n\tand get some food'
//
// message = message + '\ngo to the market';
// console.log(message);
//
// message += '\n\t get some milk';
// console.log(message);
//
//
//
//
// if / else if STATEMENTS
//
// if (condition) {
//   run this chunk of code;
// } else if (another condition) {
//   run this chunk of code instead;
// } else {
//   run this final chunk of code instead of the above two;
// }
//
//
//
//
// LOOPS
//
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
//
// // VS.
// //a for loop
// for(setup; condition; end of loop code) {
//   doo stuff
// }
//
// //ex:
// for(var i = 0; i <= 100; i++) {
//   console.log('i is now ' + i);
// }
// the result will be the console.log will print out 'i is now ' + whatever i equals at that time when the loop is run + 1
// for makes up the loop
// var declares a variable
// the rest within the () define paramter for the equation to run on until the parameter is met and the equation that the loop has to follow until that end point
//
//
//
//
// ARRAYS
//
// cool = [2, 3, true , 'banana'];
//
// There are 4 elements in this array, therefore the .length of the array is 4
// Arrays can hold numbers, booleans, and strings
//
// Ex:
// var peopleInThisRoom = ['name', 'anotherName2', 'anotherName3', 'anotherName4'];
//
// peopleInThisRoom[0]
// the result will be 'name'
// peopleInThisRoom[3]
// the result will be 'anotherName4'
// peopleInThisRoom[4]
// the result will be undefined
//
// peopleInThisRoom.length
// the result will be 4 because there are 4 elements in the array
//
// for (var i = 0; i < peopleInThisRoom.length; i++) {
// console.log('i is ', i , 'name is ', peopleInThisRoom[i]);
// }
// the result will be that the for loop will print out he same message but change the i value and peopleInThisRoom[i] value each time it runs through the loop until it runs through all the elements in that array
//
// End of Ex:
//
//
