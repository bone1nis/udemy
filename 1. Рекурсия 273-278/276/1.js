"use strict";

// Дан многомерный объект произвольного уровня вложенности, вывести все примитивные элементы в консоль

let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function getPrimitive(obj) {

  for (let elem of Object.values(obj)) {
    if (typeof elem == "object") {
      getPrimitive(elem);
    } else {
      console.log(elem);
    }
  }
}

getPrimitive(obj);