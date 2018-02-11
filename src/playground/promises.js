// promises usually from libraries - All we attach is handler
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name:'oskar',
        //     age: 27
        // });
        reject('something went wrong!');
    }, 1500);
});

console.log('before');

// register callback that will fire when promise is done
promise.then((data) => {
        console.log(data)
}).catch((err) => {
    console.log(err);
});
console.log('after');
