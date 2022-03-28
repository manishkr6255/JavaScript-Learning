

 function sayHello() {
    return function();
    console.log("hello");
}

sayHello()();


const sayHello = function(){
    return function();
    console.log("hello");
}