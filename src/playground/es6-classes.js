class Person {
    // default value
    constructor(name = 'n/a', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age}`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.hasHome()) {
            return `${greeting} and home is ${this.homeLocation}`
        }
        return greeting;
    }
    hasHome() {
        return !!this.homeLocation;
    }
}

const me = new Traveler('Oskar', 28, 'MY');
console.log(me.getGreeting());