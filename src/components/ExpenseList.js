import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// when state changes component will be re-rendered with the new state
const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {
            props.expenses.map((expense) => (
                <ExpenseListItem 
                    key={expense.id} 
                    {...expense}
                />
            ))
        }
    </div>
);

const mapStateToProps = (state) => {
    // what information from store component should be allowed to access
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
}

export default connect(mapStateToProps)(ExpenseList);