"use strict";

let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

// Дан многомерный массив произвольного уровня вложенности, содержащий строки, с помощью рекурсии слить элементы массива в одну строку

function sumStr(arr) {
  let sum = "";

  for (let elem of arr) {
    if ( Array.isArray(elem) ) {
      sum += sumStr(elem);
    } else {
      sum += elem;
    }
  }
  return sum;
}

console.log( sumStr(arr) );