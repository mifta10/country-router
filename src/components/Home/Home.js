import React from 'react';
import { useEffect, useState } from 'react';
import CountryDetail from '../CountryDetail/CountryDetail';

const Home = () => {
  const [country,setCountry] = useState([]);

  useEffect(()=>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])
  console.log(country)
  return (
    <div>
      {
        country.map(country => <CountryDetail country={country}></CountryDetail>)
      }
    </div>
  );
};

export default Home;