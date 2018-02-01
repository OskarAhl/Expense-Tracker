// getExpensesTotal
const getExpensesTotal = (expenses) => {
    if (!expenses) {
        return 0;
    }
    // array
    if (Array.isArray(expenses)) {
        return expenses.reduce((a, b) => a + b.amount, 0);
    }
    // object
    return expenses.amount;
};
const getCountTotal = (expenses) => {
    return expenses ? 
        expenses.length > 1 || expenses.length === 0 ? 
        expenses.length + ' expenses': expenses.length + ' expense'
    : '0 expenses';
};
export { getExpensesTotal, getCountTotal };