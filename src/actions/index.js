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

export const changeCode = code => {
    return{
        type: 'changeCode',
        payload: code
    }
};