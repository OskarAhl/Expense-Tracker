import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import { getExpensesTotal, getCountTotal } from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => {
    const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
    return (
        <div className="page-header"> 
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span> { props.expenses.length } </span> {  expenseWord + ' ' }
                    totalling <span> { numeral(getExpensesTotal(props.expenses)).format('$0,0.00') } </span>
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create"> Add Expense </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
        expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseSummary);