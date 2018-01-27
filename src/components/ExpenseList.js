import React from 'react';
import { connect } from 'react-redux';

// when state changes component will be re-rendered with the new state
const ExpenseList = (props) => (
    <div>
        <h1>ExpenseList</h1>
        {props.filters.text}
        {props.expenses.length}
    </div>
);

const mapStateToProps = (state) => {
    // what information from store component should be allowed to access
    return {
        expenses: state.expenses,
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpenseList);
