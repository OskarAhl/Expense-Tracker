const expensesDefaultState = [];

export default (state = expensesDefaultState, action) => {
 switch(action.type) {
     case 'ADD_EXPENSE':
        // push changes original array - concat returns new array (i.e. doesn't change state);
        // spread operator similar to concat
        return [...state, action.expense];
    case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id  !== action.id );
    case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if (expense.id === action.id) {
                return {
                    // grab all existing properties from expense - spread out to new object
                    ...expense,
                    // override any that was passed down
                    ...action.updates
                };
            } else {
                // no change
                return expense;
            }
        });
     default:
        return state;
 }
};

