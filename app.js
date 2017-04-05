    'use strict';

    console.log('user input values to prompts are listed below');


    var aliens = prompt('Do you like aliens?');
      if (aliens.trim().toLowerCase() === 'yes') {
        alert('You weirdo!');
      } else if (aliens.trim().toLowerCase() === 'no') {
        alert("You are heartless!");
      } else {
        alert('You failed to input a proper answer!')
      }
      console.log('user input to prompt aliens was ' + aliens);


    var banana = prompt('Are you a banana?');
      if (banana.trim().toLowerCase() === 'no') {
        alert('You are in denial!');
      } else if (banana.trim().toLowerCase() === 'yes') {
        alert('Hurray! You are a banana!');
      } else {
        alert('Not a valid answer!');
      }
      console.log('user input to prompt banana was ' + banana);

    var turtle = prompt('Are you a turtle?');
      if (turtle.trim().toLowerCase() === 'yes') {
    var clarify = confirm('Are you sure?');
        if (clarify === true) {
          alert('You are a weird turtle!');
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

    var name = prompt('Is your name Weirdo Turtle Alien?');
      if (name.trim().toLowerCase() === 'yes') {
        alert("Bwahahaha!!! That's hilarious!");
      } else if (name.trim().toLowerCase() === 'no') {
    var clarifyAgain = prompt('Are you sure that your name is Weirdo Turtle Alien?');
      if (clarifyAgain.trim().toLowerCase() === 'no') {
        alert("There is nothing you can do to change the name I've given you!")
      } else {
        alert('I knew it!');
      }
      console.log('user input to prompt name was ' + name);
      console.log('user input to prompt clarifyAgain was ' + clarifyAgain);
      }
    var feedback = prompt('Did you like this short but invasive personal test?');
      if (feedback.trim().toLowerCase() === 'yes') {
    var clarity = confirm('Are you sure?');
              if (clarify === true) {
                alert('You are amazing! ...Mostly!');
              } else {
                alert("No takebacks!");
              }
            } else if (turtle.trim().toLowerCase() === 'no') {
              alert ('You know you actually liked it! :3');
            } else {
              alert("These are simple yes or no questions! Get it right!")
            }
      console.log('user input to prompt feedback was ' + feedback);
      console.log('user input to confirm clarity was ' + clarity);
