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

// Reducer function- how to change state based on action 
// 1. Pure functions ( - output (state) ONLY  determined by input (action) e.g. DON'T rely on variables outside the function)) 
// (- don't change anything OUTSIDE the function)
// 2. Never change state or action (don't mutate only read off)
const countReducer = ((state = { count : 0}, action) => {
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

const store = createStore();

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



