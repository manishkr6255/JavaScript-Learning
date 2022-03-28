for(let i = 0; i < 7; i++){

    console.log("the no is:",i);

}
for(let i = 8; i>0; i--){
    console.log("i vale is:",i);
}
console.log("after for loop");

// for of loop use 
//& for in loop use

var name1 = ["web application","mobile app","television tars"];
var image = ["url1", "url2", "url3"];

for(let i in name1){
   console.log("array",i);
}


for(let i of name1){
    console.log("value of the i:",name1);
} 

//function use
function manish(){
 console.log("manish kr");
 console.log("manish kr");

 console.log("manish kr");

 console.log("manish kr");

 console.log("manish kr");

}
manish();

function add(a,b){
    console.log("adding both:",a+b);

}
add(12,34);