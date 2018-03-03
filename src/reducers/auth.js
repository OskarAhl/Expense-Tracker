// use uid to keep track of if user is logged in or not
export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {
                uid: action.uid
            };
        case 'LOGOUT': 
            return {};
        default: 
            return state;
    }
}