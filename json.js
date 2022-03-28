var myJSON = '{"a":1, "b":2}'
let obj = JSON.parse(myJSON);
console.log(obj.a,obj.b);

let string1 = JSON.stringify(myJSON);
console.log("string is",string1);
