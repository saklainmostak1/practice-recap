import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, region, population, name} = props.country
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <h3>Population: {population}</h3>
            <h4>Area: {area}</h4>
            <h5>Region: {region}</h5>
        </div>
    );
};

export default Country;