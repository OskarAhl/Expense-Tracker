import React from 'react';

// use local state to check the form - when user submits change global state
export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '',
        amount: '',
    };
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    render() {
        return (
            <div>
                <form>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    /> 
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea 
                        onChange={this.onNoteChange}
                        value={this.state.note}
                        placeholder="Add a note for your expense (optional)">
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}