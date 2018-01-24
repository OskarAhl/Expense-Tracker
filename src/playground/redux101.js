import { createStore } from 'redux';

// Action generators - functions that return action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy,
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({setCount = 101 } = {}) => ({
    type: 'SET',
    setCount
});

const resetCount = ({} = {}) => ({
    type: 'RESET'
});
// set default state
const store = createStore((state = { count : 0}, action) => {
    switch (action.type) {
        case 'INCREMENT': 
            return { count: state.count + action.incrementBy };
        case 'DECREMENT': 
            return {count: state.count - action.decrementBy};
        case 'RESET': 
            return {count: 0};
        case 'SET':
            return { count: action.setCount};
        case 'RESET': 
            return {count: 0}
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
store.dispatch(incrementCount());
store.dispatch(incrementCount({ incrementBy: 5 }));
// unsubscribe();
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 100 }));

store.dispatch(setCount());
// reset
store.dispatch(resetCount({ta: 12233}));



