import './Countries.css'
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

function Countries() {
    const [countries, setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>All conuntries Data: </h1>
                <div className = "">
                    {
                        countries.map(country => <Country data={country}></Country>)
                    }
                </div>
        </div>
    );
}


export default Countries;