import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { filterByName: { searchName, setName } } = useContext(PlanetContext);
  const { generalFilter: { filterByNumericValues } } = useContext(PlanetContext);
  const { options, deleteColumn } = useContext(PlanetContext);
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

  function handleClick() {
    setButton(!button);
    deleteColumn(column);
  }

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
        {options.map((e) => (
          <option key={ e }>
            {e}
          </option>
        ))}
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
        onClick={ () => handleClick() }
      >
        Filtrar 🎣
      </button>
    </header>
  );
}

export default Header;
