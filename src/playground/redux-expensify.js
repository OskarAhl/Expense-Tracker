import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    // default assignments
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
// SET SORTBY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
// SET SORTBY DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});
// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

// timestamp - milliseconds (positive forward in time from Jan 1 1970 or negative integers after Jan 1 1970)
// e.g. 33400 -> 33400 ms after 1 Jan 1970
// -2500 -> 2500 ms before 1 Jan 1970

// Get visible expenses - destructure filter object
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // ignored if not number - i.e. not included in filtering
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate; 
        const textMatch = !text || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // b will come first if greater than a - 
            return a.createdAt < b.createdAt ? 1 : -1; 
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// --> complex objects break up application in many reducers
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
        case 'SORT_BY_AMOUNT':
            return { 
                ...state, 
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state, 
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
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
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description : 'Rent', amount: 1000, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description : 'Coffee', amount: 123, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 14}));

// store.dispatch(setTextFilter('ffe'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1000));

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
