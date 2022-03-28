let a = [1,2,3,4,5];
let b = [6,7,8];

let c = [...a,...b,13,14];

b.push(12);
console.log("c is:",c,b);


// includes
let aa = [1,2,3,4];

console.log(aa.includes(3));

console.log(aa.includes(6));

if(aa.includes(1)){
    console.log("ele found");
    
}

