import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
//可以省略"function關鍵字" "參數括號(只有一個參數時)" "return關鍵字和大括號(如果返回只有一個表達式)"
const newNumbers = numbers.map(function (x) {
  return x * 2;
}); //原版
const newNumbers = numbers.map((x) => x * 2); //箭頭省略後

//Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
const newNumbers = numbers.filter((num) => num < 10); //箭頭省略後

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
var newNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

//Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
const newNumber = numbers.find((num) => num > 10);

//FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
const newNumber = numbers.findIndex((num) => num > 10);
// })
