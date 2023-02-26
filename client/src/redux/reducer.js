import { 
        GET_COUNTRIES, 
        FILTER_COUNTRIES_BY_CONTINENT,
        ORDER_ALPHABETICALLY_BY_NAME,
        GET_TOURIST_ACTIVITIES,
        GET_COUNTRY_BY_NAME
        } from './actions-types'


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
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: action.payload
            }
            
        case FILTER_COUNTRIES_BY_CONTINENT:
            const allCountries = state.allCountries;
            const continentFiltered = action.payload === 'All' ? allCountries : allCountries.filter(country => country.continent === action.payload);
            return {
                ...state,
                countries: continentFiltered
            }
        case GET_TOURIST_ACTIVITIES:
            return{
                ...state,
                allActivities: action.payload
            }
        case ORDER_ALPHABETICALLY_BY_NAME:
            let sortedArray = action.payload === 'asc'?
            state.countries.sort((a,b) => {
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                return 0;
            })
            : 
            state.countries.sort((a,b) => {
                if(a.name > b.name){
                    return -1;
                }
                if(a.name < b.name){
                    return 1;
                }
                return 0;
            })
            return{
                ...state,
                countries: sortedArray
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