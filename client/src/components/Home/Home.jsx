import style from './home.module.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, filterCountriesByContinent, filterByAct, getActivities } from '../../redux/actions'
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import Paged from '../Paged/Paged';

export default function Home() {

    const dispatch = useDispatch();
    const allCountries = useSelector(state => state.countries);
    console.log(allCountries);

    const activities = useSelector(state => state.allActivities);
    console.log(activities);


    const [currentPage, setCurentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paged = (pageNumber) => {
        setCurentPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getCountries())
        dispatch(getActivities())
    }, [dispatch])

    // Esto es un reseteo.
    function handleClick(event) {
        event.preventDefault();
        dispatch(getCountries())
    }

    // Esto es un filtro.
    function handleFilterbyContinent(event) {
        event.preventDefault();
        dispatch(filterCountriesByContinent(event.target.value))
    }

    function handleFilterByAct(event){
        event.preventDefault()
        event.target.value === "none" ? dispatch(getCountries()):
        dispatch(filterByAct(event.target.value))
        setCurentPage(1)
    }

    return (
        <div >
            <Link to='/activities'>Create Activity</Link>
            <h1>HOME COUNTRIES</h1>
            <button onClick={ event => handleClick(event)}>
                Reload all countries
            </button>
            <div className={style.filters}>
            </div>
                <div>
                    Alphabetically sort by name:
                    <select>
                        <option value="asc">Ascendant</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
                <div>
                    Search by continent: 
                    <select  onChange={ event => handleFilterbyContinent(event)}>
                        <option value="All">All</option>
                        <option value="Asia">Asia</option>
                        <option value="South America">South America</option>
                        <option value="North America">North America</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antarctica</option>
                        <option value="Africa">Africa</option>
                        <option value="Europe">Europe</option>
                    </select>
                </div>
                <div>
                    {/* Search by Activity:
                    {(activities?.length === 0)? <p>No activities have been created</p> :
                    <select onChange={e => handleFilterByAct(e)}>
                    <option value="none"></option>
                    {activities.map(e => (
                    <option value={e.name} key={e.id}>{e.name}</option>
                    ))}
                </select>
                } */}
                </div>
            <div>
                <Paged
                    countriesPerPage={ countriesPerPage }
                    allCountries={ allCountries.length }
                    paged={ paged }
                />
            {
                currentCountries?.map(country => {
                    return (
                        <div className='home'>
                            <Link to={`/home/${country.id}`} >
                                <Card
                                    key={country.id}
                                    id={country.id}
                                    name={country.name}
                                    continent={country.continent}
                                    flag={country.flag}
                                />
                            </Link>
                        </div>
                    )
                }
                )
            }
            </div>
        </div>
    )
}

// currentCountries.map