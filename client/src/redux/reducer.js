import { GET_COUNTRIES, FILTER_COUNTRIES_BY_CONTINENT } from './actions-types'


const initialState = {
    countries: [],
    allCountries: []
}

function rootReducer (state=initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case FILTER_COUNTRIES_BY_CONTINENT:
            const allCountries = state.allCountries;
            const continentFiltered = action.payload === 'All' ? allCountries : allCountries.filter(country => country.continent === action.payload);
            return {
                ...state,
                countries: continentFiltered
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