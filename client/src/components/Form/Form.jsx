import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, postActivity } from '../../redux/actions';
import { Link } from 'react-router-dom';
import style from './form.module.css';
import validation from './validation';


export default function Form() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const listCountries = useSelector((state) => state.countries);

    const [ errors, setErrors ] = useState({});
    const [ input, setInput ] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        idCountry: []
    });

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
        setErrors(validation({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    //"handleSelect" guarda en un [] todo lo que seleccione
    function handleSelect(e) {
        setInput({
            ...input,
            idCountry: [...input.idCountry, e.target.value]
        });
    }

    //"handleSubmit" --> para manejar el envío del formulario.
//Valida la información de "input" y, si es válida, envía una acción de "postActivities" al almacenamiento de Redux y navega a la página principal
    function handleSubmit(e) {
        e.preventDefault();
        setErrors(validation(input));
        dispatch(postActivity(input));
        alert('Activity created successfully');
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            idCountry: []
        });
    }

    //"handleDelete" --> para borrar los paises(id) q haya seleccionado en el form, va a crear un nuevo array con
// todos los que no sean el elemento que le hice click
    function handleDelete(e) {
        setInput({
            ...input,
            idCountry: input.idCountry.filter((id) => id !== e.target.value)
        });
    }   

    return(
        <div className={style.container}>
            <h1>Create a tourist activity</h1>

            <div className={style.form}>
                <form onSubmit={ (e) => handleSubmit(e)}>   
                    <div> 
                        <label className={style.labels}>Name </label>
                        <input className={style.inputs}
                            type="text"
                            name="name"
                            placeholder='Activity name...'
                            value={input.name}
                            onChange={(e) => {
                            handleChange(e);
                            }}/>
                    {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
                    </div>
                    <div>
                        <label className={style.labels}>Difficulty: </label>
                        <select className={style.selectInputs} name="difficulty" id="difficulty"  onChange={(e) => {
                        handleChange(e);
                        }}>
                            <option value="">Select Difficulty</option>
                            <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                            <option value="2">⭐⭐ ☆ ☆ ☆</option>
                            <option value="3">⭐⭐⭐ ☆ ☆</option>
                            <option value="4">⭐⭐⭐⭐ ☆</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                        {errors.difficulty && (<p style={{color: 'red'}}>{errors.difficulty}</p>)}
                    </div>
                    <div>
                        <label className={style.labels}>Season: </label>
                        <select className={style.selectInputs} name="season" id="season"  onChange={(e) => {
                        handleChange(e);
                        }} >
                            <option value=''>Select Season</option>
                            <option value="Summer">Summer</option>
                            <option value="Fall">Fall</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>                
                        {errors.season && <p style={{color: 'red'}}>{errors.season}</p>}
                    </div>

                        <p >Countries: </p>
                        <select onChange={(e) => handleSelect(e)} className={style.selectInputs}>
                        {listCountries?.map((t) => {
                            return <option value={t.id}> {t.name} </option>;
                        })}
                        </select>
                        <button type="submit" className={style.btnCreate}>
                            {" "}
                            Create Activity
                        </button>
                </form>
                <div>
                {input.idCountry.map((e) => {
                return (
                    <div className={style.containerID}>
                        <h5 className={style.pais}>{e}</h5>
                        <button className={style.cruz} onClick={() => handleDelete(e)}>
                            X
                    </button>
                    </div>
                    );
                })}
                </div> 
            </div>
        </div>
    )
}


