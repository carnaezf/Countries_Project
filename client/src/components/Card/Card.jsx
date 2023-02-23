import React from 'react';
import style from './card.module.css';

export default function Card( { flag, name, continent, id } ) {
    return (
        <div className={style.card} >
            <h1>{ name }</h1>
            <h5>{ id }</h5>
            <h5>{ continent }</h5>
            <img src={ flag } alt="flag" />
        </div>
    )
}