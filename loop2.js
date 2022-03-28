
//for of loop
for(let i = 1; i<11; i++){
console.log(i);
}

const arr = [1,2,3,4];
const arb = ["ab", "vs","ye"];

for(const i of arr){
console.log(i);
for(const i of arb){
    console.log(i);
}
}

// for in loop

const obj1 = {
    nasme:"manish",
    lasst:"kumar",
    Ttst:"singh"
}


const obj2 = {
    name:"manishdd",
    last:":kumarffffggg",
    Ttt:"singhgggg"
}

for(const aa in obj2){
    console.log(aa, "",obj2[aa]);
}
//while loop

var i = 1;

while(i<19){
    console.log(i);
    i++;
}
console.log("after loop");

var manish = 12;

while(manish<=25){
    console.log(manish);
    manish++;
}

console.log("hey manish");

//do while loop
var i = 1;

do{
    console.log(i);
    i = i+3;
}
while(i<17);

