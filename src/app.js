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

// gives access to store.dispatch, store.subcscribe etc
const store = configureStore();

store.dispatch(addExpense({description : 'Water', amount: 1000, createdAt: 1000}));
store.dispatch(addExpense({description : 'Gas', amount: 1000, createdAt: 1000}));
store.dispatch(setTextFilter('Gas'));
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