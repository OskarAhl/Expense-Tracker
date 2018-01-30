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
    const expenseData = {
        description: 'rent',
        amount: 1095,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Should setup add expense action object with no provided values', () => {
    const expenseData = {
        description: '', 
        note:'', 
        amount: 0, 
        createdAt: 0
    };
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});