const person = {
    name: 'Oskar',
    age: 28,
    location: {
        city: 'KL',
        temp: 101,
        lala: 32
    }
};

// const name = person.name;
// const age = person.age;
// instead destructurig

const {name, age } = person;

console.log(`${name} is ${age}`);

const {city, temp: temperature, lala = 55} = person.location;
if (city && temperature) {
    console.log(`it's ${temperature} in ${city} lala is ${lala}`);
}

const Book = {
    name: 'Lolita',
    author: 'Nabokov',
    publisher: {
        name: ''
    }
};

const {name: publisherName = 'Self' } = Book.publisher;
console.log(publisherName)