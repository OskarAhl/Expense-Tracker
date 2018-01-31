import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    }
    render() {
        return (
            // to populate expenseForm we need to pass down props.expense 
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>
                Remove</button>
            </div>
        );
    }
}

// HCO
const mapStateToProps = (state, props) => {
    // find expense that matches params id - and 'add to props', i.e. accessible in EditExpensePage
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id),
    }
};

const mapDispatchToProps = (dispatch, props) => ({
        removeExpense: (data) =>  dispatch(removeExpense(data)),
        editExpense: (id, expense) => dispatch(editExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);