import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { filterByName: { searchName, setName } } = useContext(PlanetContext);
  const { generalFilter: { filterByNumericValues } } = useContext(PlanetContext);
  const {
    column,
    setColumn,
    comparisson,
    setComparisson,
    value,
    setValue,
    button,
    setButton,
  } = filterByNumericValues[0];
  // console.log(column);

  return (
    <header>
      <h1>Hello, Jedi! 🖐️</h1>
      <label htmlFor="searchPlanet">
        Search Planet
        <input
          type="text"
          id="searchPlanet"
          data-testid="name-filter"
          onChange={ (event) => setName(event.target.value) }
          value={ searchName }
        />
      </label>
      <select
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
        value={ column }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (event) => setComparisson(event.target.value) }
        value={ comparisson }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label htmlFor="searchValue">
        <input
          type="number"
          id="searchValue"
          data-testid="value-filter"
          placeholder="Value"
          onChange={ (event) => setValue(event.target.value) }
          value={ value }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => (setButton(!button)) }
      >
        Filtrar 🎣
      </button>
    </header>
  );
}

export default Header;
