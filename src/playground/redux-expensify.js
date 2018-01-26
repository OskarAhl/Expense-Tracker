import { createStore, combineReducers } from 'redux';

// expense state, add, remove, edit, filters
// sort by date
// --> break up application in many reducers
// 1. Expenses Reducer 2. Filters Reducer

const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
 switch(action.type) {
     default:
        return state;
 }
}

const filterDefaultState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};

const filterReducer = (state = filterDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};
// create store
const store = createStore(
    combineReducers({
        // set up expensesReducer for expenses
        expenses: expensesReducer,
        filter: filterReducer
    })
);

console.log(store.getState());
const demoState = {
    expenses: [{
        id: 'posjpei',
        description: 'January Rent',
        note: 'Final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}