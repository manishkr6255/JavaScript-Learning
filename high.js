const myFirstconstfunction(){
    console.log("foobar");
}
myFirstconstfunction();


function returnHello(){
    return "hello, ";

}
    

function greeting(hello,world){
    console.log(hello() + world);
    
}
 greeting(returnHello, "world");





 //higher funtion

 function sayHello() {
     return function();
     console.log("hello");
 }

 sayHello()();













     
 }
    


