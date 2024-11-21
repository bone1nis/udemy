"use strict";

// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.

let arr = [3, 5, 1, 1];

console.log( arr.some(item => item > 0 ? true : false) );