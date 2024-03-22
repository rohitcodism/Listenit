export const initialState = {
    user : null,
    playlist : [],
    playing : false,
    item : null,
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){

        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }

        default:
            console.log(action.type);
            return state;
    }
};

export default reducer;