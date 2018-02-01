import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import { getExpensesTotal, getCountTotal } from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpenseSummary = (props) => (
    <div> 
        <h4>
            Viewing { getCountTotal(props.expenses) + ' ' } 
            totalling { numeral(getExpensesTotal(props.expenses)).format('$0,0.00') } 
        </h4>
    </div>
);

const mapStateToProps = (state) => ({
        expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseSummary);