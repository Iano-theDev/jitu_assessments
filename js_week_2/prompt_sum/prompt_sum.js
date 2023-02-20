let input = prompt("Enter two numbers separated by a comma:");
let sum = numbers.reduce(function(a, b) {
  return parseInt(a) + parseInt(b);
});
console.log("The sum of the numbers is: " + sum);
let result = document.getElementById('text');
result.innerText = `${numbers[0]} + ${numbers[1]} = ${sum}`;
