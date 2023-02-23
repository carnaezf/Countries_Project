import { GET_COUNTRIES } from './actions-types'


const initialState = {
    countries: []
}

function rootReducer (state=initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;








// function rootReducer (state=initialState, action) {
//     if (action.type === 'GET_COUNTRIES') {
//         return {
//             ...state,
//             countries: action.payload
//         }
//     }
//     return state;
// };

// export default rootReducer;