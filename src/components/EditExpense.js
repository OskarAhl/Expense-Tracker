import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id});
        this.props.history.push('/');
    }
    render() {
        return (
            // to populate expenseForm we need to pass down props.expense 
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>
                    Remove Expense</button>
                </div>

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
        startRemoveExpense: (data) =>  dispatch(startRemoveExpense(data)),
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);