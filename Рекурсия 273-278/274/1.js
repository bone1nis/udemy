"use strict";

// Нужно вывести элементы массива в консоль с помощью рекурсии, в примерах идет удаление элементов через shift, но т.к. он изменяет массив, мне кажется нецелесообразно его использовать
let arr = [1, 2, 3, 4, 5];
let i = 0;

function outpurArr(arr) {

  if (i !== arr.length) {
    console.log( arr[i] );
    i++;
    outpurArr(arr);
  }
}

outpurArr(arr);