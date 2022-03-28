//adding element

const numbers = [5,6];
//end
numbers.push(7,8);
//beginning
numbers.unshift(3,4);
//middle
numbers.splice(2,0, 'a', 'b');
console.log(numbers);

//finding element(primitive)

const number = [1, 2, 3, 1, 4];

console.log(number.indexOf(1, 2));
console.log(number.lastIndexOf(1));
console.log(number.indexOf(1) !== -1);
console.log(number.includes(2));

// emptying an array

let numberss = [1, 2, 3, 4, 5];
numberss = [];

console.log(numberss);

//combinig and slicing array

const first = [1,2,3,4];
const second = [3,4,5,6];

const combined = first.concat(second);
const slice = combined.slice(3);

console.log(combined);
console.log(slice);

//joining array
const numberr = [1,2,3,4];
const joined = numberr.join(',');
console.log(joined);

const message = 'this is my rule';
const parts = message.split(' ');
console.log(parts);

const combinedd = parts.join('-');
console.log(combinedd);

// filter the element of the array
// const numberrr = [1,-2,3,4];

const numberrr = [1,2,3,4];
const filtered = numberrr.filter(function(value){
    return value >=0;
});

console.log(filtered);

//reducing of an array
// take initial value 5.
let arr = [1,2,3,4,5];

let sum = arr.reduce((accum, curr) =>
{
return accum + curr;
}, 5)
console.log(sum);

