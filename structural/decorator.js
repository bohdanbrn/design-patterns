class Car {
    constructor() {
        // price by default
        this.cost = function() {
            return 20000;
        };
    }
}
// function-decorator
function carWithAC(car) {
    car.hasAC = true;
    const prevCost = car.cost();
    car.cost = function() {
        return prevCost + 500;
    };
}
// function-decorator
function carWithAutoTransmission(car) {
    car.hasAutoTransmission = true;
    const prevCost = car.cost();
    car.cost = function() {
        return prevCost + 2000;
    };
}
// function-decorator
function carWithPowerLocks(car) {
    car.hasPowerLocks = true;
    const prevCost = car.cost();
    car.cost = function() {
        return prevCost + 500;
    };
}

const car = new Car();
console.log(car.cost());
carWithAC(car);
carWithAutoTransmission(car);
carWithPowerLocks(car);
console.log(car.cost());
