import { createStore } from 'redux';

// set default state
const store = createStore((state = { count : 0}) => {
    return state;
});

console.log(store.getState());