export const initialState = {
    user : null,
    playlist : [],
    playing : false,
    item : null,
    token : "BQBPpqr_k7_eGYzFL04w3r1n5MgSQyBWc5oVo_Smjab4IyFiLRuTtC-KUXqtnV-SzugZsTge_YZNc8D08iObpvXRPJBDmDbyNNzu6eyo-IWQvzd0T4Y_Hv9nhJt9YufZ3YMxoyc7xTmkZPTqGd5GsddbVVqrUkRODXeCOV8ED8LetyC6BzAE9KT5HsJaKwczvvPy7o7G9qURIQy4",
    //TODO : Remove the access token after development.
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){

        case 'SET_USER': // listener
            return{
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }

        default:
            console.log(action.type);
            return state;
    }
};

export default reducer;