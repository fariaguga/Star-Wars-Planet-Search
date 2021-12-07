import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Header() {
  const { filterByName: { searchName, setName } } = useContext(PlanetContext);
  // console.log(data, searchName);
  return (
    <header>
      <h1>Hello, Jedi!</h1>
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
    </header>
  );
}

export default Header;
