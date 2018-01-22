//  => vs. normal functions

// 1. Arguments object is no longer bound
const add = function (a, b) {
    console.log(arguments);
    return a + b;
}
const addTwo = (a, b) => {
    // not possible - arguments not defined
    // console.log(arguments);
    return a + b;
}

// 2. 'this' keyword no longer bound. --> this goes up to parent scope.
const user = {
    name: 'Oskar',
    cities: ['KL', 'SF', 'NY'],
    printPlaces: function () {
        // 'this' works here
        console.log(`${this.name} has lived in ${this.cities}`);

        // 'this' works here - goes to parent scope - i.e. user scope.
        this.cities.map((city) => {
            console.log(this.name + ' has lived in: ' + city);
        });

        // 'this' does not work here
        // this.cities.map(function (city) {
        //     console.log(this.name + ' has lived in: ' + city);
        // });
    },
    // 'this' does not work here - goes to parent scope - i.e. global scope
    arrowPrint: () => {
        console.log(`${this.name} has lived in ${this.cities}`);
    }
}

// Challenge
const multiplier = {
    numbers: [1, 2, 4, 8],
    multiplyBy: 4,
    multiply () {
        return this.numbers.map((num) => num * this.multiplyBy);
    },
}

const a = multiplier.multiply();
console.log(a);