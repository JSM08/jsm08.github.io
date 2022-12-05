const result = document.getElementById("answer");


function resultAssign() {
num = 5 + 6 + 71 + 330 + 87 + 2;
result.innerHTML = num;
console.log("Variable num represents the number: " + num);
}

resultAssign();

//  Function to Add two and two

function addTwoPlusTwo() {
 result.innerHTML = 2 + 2;
}

function addFourPlusFive() {
  result.innerHTML = 4 + 5;
 }
 
 function addNineMinusOne() {
  result.innerHTML = 9 - 1 ;
 }
 


addTwoPlusTwo()

addFourPlusFive()

addNineMinusOne()


// Multiplication
function multiply(n1,n2) {
  let multiplication = n1 * n2;
  result.innerHTML = multiplication;
}

function divide(n1,n2) {
  let divide = n1 / n2;
  result.innerHTML = divide;
}