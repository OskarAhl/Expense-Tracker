import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    return (
        // to populate expenseForm we need to pass down props.expense 
        <div>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => { 
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
            <button onClick={ () => {
                props.dispatch(removeExpense({id: props.expense.id}))
                props.history.push('/');
            }}>
            Remove</button>
        </div>
    );
}

// HCO
const mapStateToProps = (state, props) => {
    // find expense that matches params id - and 'add to props', i.e. accessible in EditExpensePage
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    }
};

export default connect(mapStateToProps)(EditExpensePage);