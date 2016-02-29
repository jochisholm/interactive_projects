//add
function add(num1, num2){
  //the goal of the function is to a string that says
  //num1 + num2 = result

  //make sure your numbers are numbers, no string
  var r = parseFloat(num1) + parseFloat(num2),
      string1 = num1 + '+' + num2 + '=' + r;

  return string1;
}

function subtract(num1, num2){
  var s = parseFloat(num1) - parseFloat(num2),
  string2 = num1 + '-' + num2 + '=' + s;
  return string2;// substract
}

function multiply(num1, num2){
  var t = parseFloat(num1) * parseFloat(num2),
  string3 = num1 + '*' + num2 + '=' + t;
  return string3;// substract
}// multiply

function divide(num1, num2){
  var u = parseFloat(num1) / parseFloat(num2),
  string4 = num1 + '/' + num2 + '=' + u;
  return string4;// substract
}// divide

// this function will grab the inputs, populate the result div
// and run an operation
function populatehtml(operation){
  var input1 = document.getElementById("first").value;
  var input2 = document.getElementById("second").value;
  var output = operation(input1, input2);
        document.getElementById('result').innerText += output;// hint: define three variables: input1, input2, and output
  // use output.innerText to set the text within it

  // if input1 or input2 is an empty string, output.innerText will be
  // set to a message that tells user they need to put in the numbers

  // remember the parameter operation is a function,
  // it needs its own arguments
}
document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('subtract').onclick = function(){populatehtml(subtract)};
document.getElementById('multiply').onclick = function(){populatehtml(multiply)};
document.getElementById('divide').onclick = function(){populatehtml(divide)};

// grab a button element
// to each button, attach a click event to which the appropriate operation is assigned
document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('substract').onclick = function(){populatehtml(substract)};
document.getElementById('multiply').onclick = function(){populatehtml(multiply)};
document.getElementById('divide').onclick = function(){populatehtml(divide)};