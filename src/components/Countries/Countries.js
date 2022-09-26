import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(Response => Response.json())
        .then(data =>  setCountries(data))
    }, [])

    return (
        <div>
            <h1>hello from countries</h1>
            <p>Total country: {countries.length}</p>
            {
                countries.map(country => console.log(country))
            }
        </div>
    );
};



export default Countries;