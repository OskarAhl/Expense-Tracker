import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
// REMOVE_EXPENSE 
const removeExpense = ({id} = {}) => (
        {
            type: 'REMOVE_EXPENSE',
            expense: {
                id
            }
        }
);
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
// ADD_FILTER_TEXT
const setTextFilter = (text = '') => ({
    type:'ADD_FILTER_TEXT',
    text
});
// --> break up application in many reducers
// 1. Expenses Reducer 2. Filters Reducer

const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
 switch(action.type) {
     case 'ADD_EXPENSE':
        // push changes original array - concat returns new array (i.e. doesn't change state);
        // spread operator similar to concat
        return [...state, action.expense];
    case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id  !== action.expense.id );
    case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if (expense.id === action.id) {
                return {
                    // grab all existing properties from expense - spread out to new object
                    ...expense,
                    // override any that was passed down
                    ...action.updates
                };
            } else {
                // no change
                return expense;
            }
        });
     default:
        return state;
 }
}

const filterDefaultState = {text: '', sortBy: 'date', startDate: undefined, endDate: undefined};

const filterReducer = (state = filterDefaultState, action) => {
    switch(action.type) {
        case 'ADD_FILTER_TEXT': 
            return { 
                ...state, 
                text: action.text 
            }
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

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description : 'Rent', amount: 50}));
const expenseTwo = store.dispatch(addExpense({description : 'Coffee', amount: 123}));

store.dispatch(removeExpense({id: expenseOne.expense.id}));
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 14}));

store.dispatch(setTextFilter('rent'));

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
