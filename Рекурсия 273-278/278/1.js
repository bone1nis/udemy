"use strict";

// Дан многомерный массив произвольного уровня вложенности, нужно возвести все элементы числа в квадрат

let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];


// 1 Вариант с использованием map, т.к. в этом массиве нет примитивов кроме чисел, то нет смысла делать проверку на число, достаточно одной на массив

function arrNumbersInSquare(arr) {
  return arr.map(item => Array.isArray(item) ? arrNumbersInSquare(item) : item ** 2);
}

arr = arrNumbersInSquare(arr);

// 2 Вариант с циклом

function arrNumbersInSquare(arr) {
  for (let i = 0; i < arr.length; i++) {
    if ( Array.isArray(arr[i]) ) {
      arrNumbersInSquare(arr[i]);
    } else {
      arr[i] = arr[i] ** 2;
    }
  }
}

arrNumbersInSquare(arr);



