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
import './firebase/firebase';

// gives access to store.dispatch, store.subcscribe etc
const store = configureStore();

const jsx = (
    // all components can have access to the store
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));