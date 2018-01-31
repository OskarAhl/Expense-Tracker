import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@init'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-123'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Food',
        note: '',
        amount: 100,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state[state.length -1]).toEqual(expense);
});

test('should edit an expense', () => {
    const updates = {
        description: 'Bacon',
        note: '',
        amount: 100,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        updates,
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({...updates, id: expect.any(String)});
});

test('should not edit if id not found', () => {
    const updates = {
        description: 'Bacon',
        note: '',
        amount: 100,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        updates,
        id: '1239aae3'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});



