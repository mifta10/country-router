import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './CountryDetail.css'

const CountryDetail = (props) => {
  const history = useHistory();
  const handleClick= (name) => {
    const url= `country/${name}`;
    history.push(url);
  }
  const {name,flag} = props.country;
  return (
    <div className="country__details">
      <img src={flag} alt=""/>
      <h3>{name}</h3>
      <button className="main__btn" type="button" onClick={() => handleClick(name)}>
      Show Details
    </button> 
    </div>
  );
};

export default CountryDetail;