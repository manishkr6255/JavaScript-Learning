let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getwage(baseSalary, overtime, rate){
    return baseSalary + (overtime*rate);
}

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getwage: function(){
        return this.baseSalary+ (this.overtime*this.rate);
    }
};
employee.getwage();