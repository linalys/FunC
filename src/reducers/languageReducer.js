const languageReducer = (state = 'en', action) => {
    switch (action.payload) {
        case "en":
            state = "en";
            return state;
        case "gr":
            state = "gr";
            return "gr";
        default:
            return state;
    }
};

export default languageReducer;