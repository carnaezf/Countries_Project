import style from "./paged.module.css"
import React from "react";

export default function Paged({ countriesPerPage, allCountries, paged }) {
    const pageNumbers = [];
    
    for (let i = 1; i <= Math.ceil(allCountries/ countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    // Debug print.
    console.log(pageNumbers);
    return (
        <nav>
        <ul className={style.paged}>
            {pageNumbers &&
            pageNumbers.map((number) => (
                <li key={number}>
                    <a onClick={() => paged(number)} href="!#">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
        </nav>
    );
    }