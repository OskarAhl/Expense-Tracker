// getExpensesTotal
export default (expenses) => {
    if (!expenses) {
        return 0;
    }
    // array
    if (Array.isArray(expenses)) {
        return expenses.reduce((a, b) => a + b.amount, 0);
    }
    // object
    return expenses.amount;
}