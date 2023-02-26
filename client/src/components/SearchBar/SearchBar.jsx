import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountryByName } from '../../redux/actions'


export default function SearchBar() {
    
        const dispatch = useDispatch();
        const [name, setName] = useState('');

        function handleInputChange(event) {
            event.preventDefault();
            setName(event.target.value)
            console.log( name )
        }

        function handleSubmit(event) {
            event.preventDefault();
            dispatch(getCountryByName(name))
        }

        return (
            <div>
                <input 
                    type="text"
                    placeholder='Search...'
                    onChange={ event => handleInputChange(event)  }
            />
            <button type='submit' onClick={ event => handleSubmit(event) }>Search</button>

            </div>
        )
}