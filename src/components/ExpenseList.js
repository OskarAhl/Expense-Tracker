import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// when state changes component will be re-rendered with the new state
// export unconnected (from state) component for testing
export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        {
            props.expenses.length === 0 ? 
            ( 
                <div className="list-item list-item--message"> 
                    <span>No expenses</span> 
                </div>
            ) : 
            (
                props.expenses.map((expense) => (
                    <ExpenseListItem 
                        key={expense.id} 
                        {...expense}
                    />
                ))
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    // what information from store - component should be allowed to access
    return {
        expenses: selectExpenses(state.expenses, state.filters),
    };
}

export default connect(mapStateToProps)(ExpenseList);
