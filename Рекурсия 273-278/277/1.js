"use strict";

// Найти сумму элементов обьекта произвольного уровня вложенности

let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function sumObject(obj) {
  let sum = 0;

  for (let elem of Object.values(obj)) {
    if (typeof elem == "object") {
      sum += sumObject(elem);
    } else {
      sum += elem;
    }
  }

  return sum;
}

console.log( sumObject(obj) );