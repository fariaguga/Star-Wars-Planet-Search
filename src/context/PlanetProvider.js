import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchName, setName] = useState('');

  const filterByName = {
    searchName,
    setName,
  };

  useEffect(() => {
    async function getDataFromApi() {
      const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const response = await planets.json();
      setData(response.results);
    }
    getDataFromApi();
  }, []);
  // console.log(data);

  return (
    <PlanetContext.Provider value={ { data, filterByName } }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
