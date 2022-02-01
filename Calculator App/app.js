let num1 = 10;
let num2 = 11;

document.querySelector("#span1").textContent = num1;
document.querySelector("#span2").textContent = num2;

function add() {
  let answer = num1 + num2;
  document.querySelector(".ans").textContent = answer;
}

function sub() {
  let answer = num1 - num2;
  document.querySelector(".ans").textContent = answer;
}

function mul() {
  let answer = num1 * num2;
  document.querySelector(".ans").textContent = answer;
}

function div() {
  let answer = num1 / num2;
  document.querySelector(".ans").textContent = answer;
}
