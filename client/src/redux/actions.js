import axios from 'axios';
import { 
        GET_COUNTRIES, 
        FILTER_COUNTRIES_BY_CONTINENT, 
        GET_TOURIST_ACTIVITIES, 
        FILTER_BY_ACTIVITIES, 
        ORDER_ALPHABETICALLY_BY_NAME,
        GET_COUNTRY_BY_NAME,
        GET_DETAIL,
        POST_ACTIVITY
        } from './actions-types'


export function getCountries() {
    return async function(dispatch) {
        const response = await axios.get('/countries/');
        return dispatch({
            type: GET_COUNTRIES,
            payload: response.data
        })
    }
};

// Si hay error revisar video jueves 11 min.
export function getCountryByName(name) {
    return async function(dispatch) {
        try {
            const response = await axios.get(`/countries?name=${name}`);
            return dispatch({
            type: GET_COUNTRY_BY_NAME,
            payload: response.data
        })
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function orderCountriesByName(payload) {
    console.log('payload', payload);
    return {
        type: ORDER_ALPHABETICALLY_BY_NAME,
        payload
    }
}

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
            .get('/activities/')
            .then((info) => {
                return dispatch({
                    type: GET_TOURIST_ACTIVITIES,
                    payload: info.data,
                });
            })
            .catch((err) => console.log(err));
        };
};


export function postCountrie(payload) {
    return async function(dispatch) {
        const response = axios.post('/activities/', payload);
        console.log('response', response);
        return (
            dispatch({
                type: POST_ACTIVITY,
                payload: response.data
            })
        )
    }
}

// export function postCountrie(payload) {
//     return async function(dispatch) {
//         const response = axios.post('http://localhost:3001/activities/', payload);
//         console.log('response', response);
//         return response;
//     }
// }










export function postActivity (payload){
    return async function(dispatch){
        const response = await axios.post('http://localhost:3001/activities/', payload)
        console.log(response)
        return (
            dispatch({
                type: POST_ACTIVITY,
                payload: response.data
            })
        )
    }
}


// export function postActivity (payload){
//     return async function(dispatch){
//         const response = await axios.post('http://localhost:3001/activities/', payload)
//         console.log(response)
//         return response
//     }
// }



export function getdetail(id) {
    return async function(dispatch) {
        const response = await axios.get(`http://localhost:3001/countries/${id}`);
        return dispatch({
            type: GET_DETAIL,
            payload: response.data
        })
    }
}


