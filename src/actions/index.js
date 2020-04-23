export const changeLanguage = lang => {
    return{
        type: 'changeLanguage',
        payload: lang
    }
};

export const changeLoggedIn = loggedIn => {
    return{
        type: 'changeLoggedIn',
        payload: loggedIn
    }
};