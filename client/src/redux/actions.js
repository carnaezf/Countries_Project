import axios from 'axios';
import { GET_COUNTRIES, FILTER_COUNTRIES_BY_CONTINENT } from './actions-types'


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

