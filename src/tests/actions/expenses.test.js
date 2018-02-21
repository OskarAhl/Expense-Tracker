import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    // toEqual for checking object equality
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'new note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note value'
        }
    });
});

test('Should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
});

test('should add expense to db and store', (done) => {
    // check if database was updated
    // check if add expense action was dispatch
    const store = createMockStore({});
    const expenseData = {
        description: 'keyboard',
        amount: 50,
        note:'cooler',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        expect(1).toBe(2);
        // force jest to wait until this point
        done();
    });
});

test('Should setup add expense action object with no provided values', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {}
    });
});