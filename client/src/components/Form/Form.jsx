import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { postCountrie, getActivities } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';


function validate(input){
    let errors = {}
    let dif = Number(input.difficulty)
    let dur = Number(input.duration)

    if(!input.name) errors.name = "Campo Necesario"
    else if (/[^A-Za-z0-9 ]+/g.test(input.name)) errors.name = 'Nombre no puede tener caracteres especiales o tildes'
        
    if(!input.difficulty) errors.difficulty = "Campo Necesario"
    else if (dif <= 0 || dif > 5) errors.difficulty = "Debe ser entre 1 y 5"
    
    if(!input.duration) errors.duration = "Campo Necesario"    
    else if (dur <= 0 || dur > 24) errors.duration = "Debe ser entre 1 y 24"
        
    if(!input.season || input.season === "vacio") errors.season = "Campo Necesario"
    
    if(!input.countries || input.countries.length === 0) errors.countries = "Campo Necesario"

    return errors;
}


export default function Form() {
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities);
    const history = useHistory();
    const countries = useSelector((state) => state.countries)
    const [errors, setErrors] = useState({})


    const [input, setInput] = useState({
        "name": "",
        "difficulty": "",
        "duration": "",
        "season": "",
        "countries": []
    });


    // // Revisar discrepancia.
    useEffect(() => {
        dispatch(getActivities())
    }, [])

    
    function handleChange(event){
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        console.log(input);
        // setErrors(validate({
        //     ...input,
        //     [event.target.name] : event.target.value
        // }))
    }


    const handleSelect = (event) => {
        setInput((state) => {
            if(event.target.name === "countries") {
                return {
                    ...state,
                    countries: [...state.countries, event.target.value]
                }
            } else {
                return {
                    ...state,
                    [event.target.name]: event.target.value
                }
            }
    })}


    // useEffect(() => {
    //     dispatch(getCountries())
    // }, [])









    return(
        <div>
            <Link to={'/home'}>
                <button>Home</button>
            </Link>
            <h1>Enter your activity</h1>
            <form action="">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        value={input.name}
                        name="name" 
                        id="name" 
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select onChange={handleChange} name="difficulty" id="difficulty">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="duration">Duration:</label>
                    <select onChange={handleChange} name="duration" id="duration">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>

                    </select>

                </div>
                <div>
                    <label htmlFor="season">Season:</label>
                    <select onChange={handleChange} name="season" id="season">
                        <option value="Summer">Summer</option>
                        <option value="Fall">Autumn</option>
                        <option value="Winter">Winter</option>
                        <option value="Spring">Spring</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="countries">Choose the country for your activity:</label>
                    <select 
                        name="countries" 
                        id="countries"
                        onChange={event => handleSelect(event)}
                        >
                        <option></option>
                        {countries.map((country) => (
                            <option value={country.id}>{country.name}</option>
                        ) ) }
                    </select>
                    {console.log(countries)}
                </div>
                
            </form>
        </div>
    )
}





