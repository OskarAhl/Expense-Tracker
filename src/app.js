import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses';
// normalize => reset browser default css
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

import {firebase} from './firebase/firebase';

// gives access to store.dispatch, store.subcscribe etc
const store = configureStore();

const jsx = (
    // all components can have access to the store
    <Provider store={store}> 
        <AppRouter />
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));  
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// Auth state changed --> user login, logout callback
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('log in');
        store.dispatch(startSetExpenses()).then((data) => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    } else {
        console.log('log out');
        renderApp();
        history.push('/');
    }
});
