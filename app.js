    'use strict';

    console.log('user input values to prompts are listed below');


    var sushi = prompt('Do you like sushi?');
      if (sushi.trim().toLowerCase() === 'yes') {
        alert('You like sushi!');
      } else if (sushi.trim().toLowerCase() === 'no'){
        alert('You are a bum!');
      } else {
        alert('You failed to input a proper answer!')
      }
      console.log('user input to prompt sushi was ' + sushi);


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
