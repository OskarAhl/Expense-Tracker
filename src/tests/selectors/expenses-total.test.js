import { getExpensesTotal } from '../../selectors/expenses-total';
import { getCountTotal } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

let totalSum = 0;
beforeEach(() => {
    expenses.map((expense) => totalSum += expense.amount);
});

test('should return sum of expenses array', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(totalSum);
});

test('should equal single expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toEqual(expenses[0].amount);
})

test('should return 0 if empty array', () => {
    const result = getExpensesTotal([]);
    expect(result).toEqual(0);
});

test('should return 0 if no arguments', () => {
    const result = getExpensesTotal();
    expect(result).toEqual(0);
});

test('should return count + plural string', () => {
    const result = getCountTotal(expenses);
    expect(result).toEqual(expenses.length + ' expenses');
});

test('should return count + singular string', () => {
    const result = getCountTotal([expenses[0]]);
    expect(result).toEqual('1 expense');
});

test('should return 0 expenses if empty array', () => {
    const result = getCountTotal([]);
    expect(result).toEqual('0 expenses');
});