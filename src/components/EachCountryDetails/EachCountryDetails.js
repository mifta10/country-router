import React from 'react';
import './EachCountryDetails.css'

const EachCountryDetails = (props) => {
  const {name, alpha3Code, area, capital, nativeName, population, region, timezones}  = props.country;
  console.log(props.country);
  return (
    <div className="nation__details">
      <h1>{name}</h1>
      <h4>Short Name: {alpha3Code}</h4>
      <p><small>Area: {area}</small></p>
      <p><small>Capital: {capital}</small></p>
      <p><small>Native Name : {nativeName}</small></p>
      <p><small>Population: {population}</small></p>
      <p><small>Region: {region}</small></p>
      <p><small>TimeZone: {timezones}</small></p>
    </div>
  );
};

export default EachCountryDetails;