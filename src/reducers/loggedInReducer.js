const loggedInReducer = (state = false, action) => {
    switch (action.type) {
        case true:
            return false;
        case false:
            return true;
        default:
            return state;
    }
};

export default loggedInReducer;