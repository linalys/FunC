const loggedInReducer = (state = false, action) => {
    switch (action.payload) {
        case true:
            return true;
        case false:
            return false;
        default:
            return state;
    }
};

export default loggedInReducer;