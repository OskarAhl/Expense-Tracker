import { createStore } from 'redux';

// set default state
const store = createStore((state = { count : 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return { count: state.count + 1 };
        case 'DECREMENT': 
            return {count: state.count - 1};
        case 'RESET': 
            return {count: 0}
        default:
            return state;
    }
});

console.log(store.getState());
// actions - change redux store state - obj that gets sent to redux store 

// increment
store.dispatch({
    type: 'INCREMENT'
});
console.log(store.getState());

store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'DECREMENT'});
console.log(store.getState());


store.dispatch({type: 'RESET'});
console.log(store.getState());

// reset


