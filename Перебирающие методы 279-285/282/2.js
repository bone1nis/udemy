"use strict";


// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30. 

let arr = [3, 22, 1, 1];

console.log( arr.every( (item, index) => (item * index) < 30 ? true : false) );