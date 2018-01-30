import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// call function and assert something about returned value

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    // toEqual for checking object equality
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});