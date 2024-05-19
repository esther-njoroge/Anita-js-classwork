let fruits = ['Mango', 'Banana', 'Orange'];

let arr = new Array(20,30);

console.log({fruits});
console.log({arr});

console.log('fruit', fruits[1]);

fruits[2] = 'kiwi';
console.log({fruits});

// finding the last item
console.log('last item',fruits[fruits.length - 1]);

// slice
let sliceFruit = fruits.slice(-1);
console.log({sliceFruit});

// Adding items at the end
let addEnd = fruits.push('pawpaw');
console.log({fruits});

// Adding at the start
let addStart = fruits.unshift('pineapple');
console.log({fruits});

// Removing at the end
let removeEnd = fruits.pop();
console.log({fruits});

// Remove at the start
let removeStart = fruits.shift();
console.log({fruits});

// Given an array of numbers find the sum of all items in the array
let items = [20, 30, 40, 50, 60];
let add = items.reduce ((acc, curr)=> acc + curr);
console.log({add});

//  Given an array of numbers multiply each by 2of all items in the array
let multiply = items.map(item => item*2);
console.log({multiply});

// Given an array of numbers  get the square of each and return them in an array
// let square = items.forEach (item =>item * item);     (undefined)
// console.log({square});

let square = []
items.forEach(item =>{
    const multiply = item * item;
    console.log({multiply});
    square.push(multiply)
});
console.log({square});





function getMultiples(arr1,arr2){
    let newArray = []
    array.forEach(item = >{
        
    })
}