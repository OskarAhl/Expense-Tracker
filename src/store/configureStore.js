import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    // create store
    const store = createStore(
        combineReducers({
            // set up expensesReducer for expenses
            expenses: expensesReducer,
            filters: filterReducer
        }),
        // thunk is middleware - 
        // allows action creators that returns a function instead of action
        // Why ? delay dispatch of action or only dispatch action if criteria is met
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};