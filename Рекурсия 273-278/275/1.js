"use strict";

// Нужно найти сумму квадратов элемента массива с помощью рекурсии
let arr = [1, 2, 3, 4, 5];
// 1 Вариант решения в примерах метод shift, но т.к. он изменяет массив, как мне кажется, лучше использовать глобальные переменные
let sum = 0;
let i = 0;

function getSumSquare(arr) {

  if (i !== arr.length) {
    sum += (arr[i] ** 2);
    i++;

    getSumSquare(arr);
  }

  return sum;
}

// Вариант решения с shift
function getSumSquare(arr) {
  let sum = arr.shift() ** 2;

  if (arr.length !== 0) {
    sum += getSumSquare(arr);
  }

  return sum;
}




alert( getSumSquare(arr) );