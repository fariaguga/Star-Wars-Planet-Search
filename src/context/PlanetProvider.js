import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchName, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparisson, setComparisson] = useState('maior que');
  const [value, setValue] = useState(0);
  const [button, setButton] = useState(false);
  const [options, setOptions] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  function deleteColumn(previousColumn) {
    const columnOptions = [...options];
    columnOptions.splice(columnOptions.indexOf(previousColumn), 1);
    setOptions(columnOptions);
  }

  const generalFilter = {
    filterByNumericValues: [
      {
        column,
        setColumn,
        comparisson,
        setComparisson,
        value,
        setValue,
        button,
        setButton,
      },
    ],
  };

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
    <PlanetContext.Provider
      value={ {
        data,
        filterByName,
        generalFilter,
        options,
        deleteColumn,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
