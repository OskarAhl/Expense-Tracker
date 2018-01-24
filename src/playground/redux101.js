import { createStore } from 'redux';

// set default state
const store = createStore((state = { count : 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            const incrementBy = action.incrementBy ? action.incrementBy : 0;
            return { count: state.count + incrementBy };
        case 'DECREMENT': 
            const decrementBy = action.decrementBy ? action.decrementBy : 1;
            return {count: state.count - decrementBy};
        case 'RESET': 
            return {count: 0};
        case 'SET':
            return { count: action.count};
        default:
            return state;
    }
});

const unsubscribe = store.subscribe(() => {
    console.log('subscribe: ', store.getState());
});

console.log(store.getState());
// actions - change redux store state - obj that gets sent to redux store 

// increment
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5,
});
// unsubscribe();
store.dispatch({type: 'DECREMENT', decrementBy: 10});
store.dispatch({type: 'DECREMENT'});


store.dispatch({
    type: 'SET',
    count: 101
});
// reset


