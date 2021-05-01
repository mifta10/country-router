import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import EachCountryDetails from '../EachCountryDetails/EachCountryDetails';

const ShowDetail = () => {
  const {nationId} = useParams();
  const [nation,setNation] = useState([]);

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/name/${nationId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setNation(data))
  }, [])
  //console.log(nation);
  return (
    <div>
       {
        nation.map(country => <EachCountryDetails key={country.name} country={country}></EachCountryDetails>)
       }
    </div>
  );
};

export default ShowDetail;