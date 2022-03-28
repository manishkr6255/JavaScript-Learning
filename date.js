
//date object
const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(1027, 4, 11, 9);

now.getFullYear(2017);
console.log(date1)


// showAddress object

const address = {
    street:'a',
    city:'b',
    zipCode:'c',
};
function showAddress(address){
    for(let key in address)
    console.log(key, address[key]);
}

showAddress(address);

// basic func

function add(a,b){
    console.log("hey manish",a+b);

}
add(2,6)