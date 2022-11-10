// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let arr = [1, [2, [3, [4, 5, [6]]]]];

var sum = 0;

function findSum(arr) {
  arr.forEach((item, index, srcArr) => {
    if (typeof item === 'number') {
      sum += item;
    } else {
      findSum(item);
    }
  });
}

findSum(arr);
console.log(sum);
