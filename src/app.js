import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
// normalize => reset browser default css
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// gives access to store.dispatch, store.subcscribe etc
const store = configureStore();

store.dispatch(addExpense({description : 'Water', amount: 10, createdAt: 5}));
store.dispatch(addExpense({description : 'Rent', amount: 1800, createdAt: 10}));
store.dispatch(addExpense({description : 'Mobile', amount: 60, createdAt: 15}));
store.dispatch(addExpense({description : 'Gas', amount: 5, createdAt: 20}));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters); 
console.log(visibleExpenses);

const jsx = (
    // all components can have access to the store
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));