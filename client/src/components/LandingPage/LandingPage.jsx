import './landing-page.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className='landing-page'>
            <h1>Welcome</h1>
            <Link to="/home">
                <button> Enter </button>
            </Link>
        </div>
    );
}
