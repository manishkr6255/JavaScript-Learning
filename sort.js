var chars = ["c","e","a","j"];
chars.sort();
console.log(chars);

const nos = [1,2,3,4,57,7,87,8,8,9];
console.log(nos.sort());

var aa = [8,9,20,4,5,3,1];

aa.sort(function(a,b){
    return a-b;
}
)
console.log(aa.sort());

const mm = [2,3,4,5,6,7];

aa.sort((a,b)=> a-b); //arrow function
console.log("sorted is",aa);