import { createStore, combineReducers } from 'redux';

// expense state, add, remove, edit, filters
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