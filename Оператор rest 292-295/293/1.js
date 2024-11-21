"use strict";

// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.

function average(...arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return Math.round( sum / arr.length );
}

console.log(average(2, 5));