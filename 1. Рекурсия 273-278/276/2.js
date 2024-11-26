"use strict";

// Дан многомерный массив произвольного уровня вложенности, развернуть многомерный массив в одномерный
// Не совсем ясно, нужно изменять или в другой массив преобразовать

let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let newArr = [];

function transformArray(arr, newArr) {
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      transformArray(elem, newArr);
    } else {
      newArr.push(elem);
    }
  }
}

transformArray(arr, newArr);

console.log(newArr);