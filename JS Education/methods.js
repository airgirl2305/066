
//return arr.slice().filter() // возвращает измененную копию

let arr = ["один", "два"]

let l = arr.reduce((acc, el) => acc + el.length, 0) // .reduce(callback(accumulator, item, index, array) => callback, initial) 
console.log(l);
