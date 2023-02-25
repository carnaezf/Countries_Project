import axios from 'axios';
import { GET_COUNTRIES, FILTER_COUNTRIES_BY_CONTINENT, GET_TOURIST_ACTIVITIES, FILTER_BY_ACTIVITIES} from './actions-types'


export function getCountries() {
    return async function(dispatch) {
        const response = await axios.get('http://localhost:3001/countries/');
        return dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        })
    }
};

export function filterCountriesByContinent(payload) {
    console.log('payload', payload);
    return {
        type: FILTER_COUNTRIES_BY_CONTINENT,
        payload
    }
}

export function filterByAct(activity) {
    return {
        type: FILTER_BY_ACTIVITIES,
        payload: activity
    }
}

export function getActivities(){
    return (dispatch) => {
        axios
            .get('http://localhost:3001/activities/')
            .then((info) => {
                return dispatch({
                    type: GET_TOURIST_ACTIVITIES,
                    payload: info.data,
                });
            })
            .catch((err) => console.log(err));
        };
};

