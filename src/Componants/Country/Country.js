import './Country.css';
import React from 'react';


function Country(props) {
    const {name, flag, population} = props.data;
    console.log(name, flag, population);
    return (
        <div>
            <img className= "country-img" src={flag} alt=""></img>
            <h3>Name: {name}</h3>
            <h5>Population: {population}</h5>
        </div>
    );
}

export default Country;