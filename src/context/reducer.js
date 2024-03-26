import { StateProviderValue } from "./StateProvider";

export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    token : null,
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
            console.log("Token set done !!")
            return{
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            }

        default:
            console.log(action.type);
            return state;
    }
};

export default reducer;


{/* "BQBPpqr_k7_eGYzFL04w3r1n5MgSQyBWc5oVo_Smjab4IyFiLRuTtC-KUXqtnV-SzugZsTge_YZNc8D08iObpvXRPJBDmDbyNNzu6eyo-IWQvzd0T4Y_Hv9nhJt9YufZ3YMxoyc7xTmkZPTqGd5GsddbVVqrUkRODXeCOV8ED8LetyC6BzAE9KT5HsJaKwczvvPy7o7G9qURIQy4", */}