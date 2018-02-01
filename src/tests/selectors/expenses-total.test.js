import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

let totalSum = 0;
beforeEach(() => {
    expenses.map((expense) => totalSum += expense.amount);
});

test('should return sum of expenses array', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toEqual(totalSum);
});

test('should equal single expense', () => {
    const result = selectExpensesTotal([expenses[0]]);
    expect(result).toEqual(expenses[0].amount);
})

test('should return 0 if empty array', () => {
    const result = selectExpensesTotal([]);
    expect(result).toEqual(0);
});

test('should return 0 if no arguments', () => {
    const result = selectExpensesTotal();
    expect(result).toEqual(0);
});