import React from 'react';
import style from './card.module.css';

export default function Card( { flag, name, continent, id } ) {
    return (
        <div className={style.card} >
            <h5>{ id }</h5>
            <img src={ flag } alt="flag" />
            <h5>{ continent }</h5>
            <h1>{ name }</h1>
        </div>
    )
}