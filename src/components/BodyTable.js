import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function BodyTable() {
  const { data } = useContext(PlanetContext);
  const { filterByName: { searchName } } = useContext(PlanetContext);
  const { generalFilter: { filterByNumericValues } } = useContext(PlanetContext);
  const {
    column,
    comparisson,
    value,
    button,
  } = filterByNumericValues[0];
  // console.log(searchName);
  return (
    <tbody>
      {
        button === false
          ? data.filter((e) => (e.name).toLowerCase().includes(searchName.toLowerCase()))
            .map((item) => (
              <tr key={ item.name }>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.surface_water}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
              </tr>
            ))
          : data.filter((elemento) => {
            let filterElement = [];
            if (comparisson === 'maior que') {
              filterElement = Number(elemento[column]) > Number(value);
            } else if (comparisson === 'menor que') {
              filterElement = Number(elemento[column]) < Number(value);
            } else if (comparisson === 'igual a') {
              filterElement = Number(elemento[column]) === Number(value);
            } return filterElement;
          }).filter((i) => (i.name).toLowerCase().includes(searchName.toLowerCase()))
            .map((iten) => (
              <tr key={ iten.name }>
                <td>{iten.name}</td>
                <td>{iten.rotation_period}</td>
                <td>{iten.orbital_period}</td>
                <td>{iten.diameter}</td>
                <td>{iten.climate}</td>
                <td>{iten.gravity}</td>
                <td>{iten.terrain}</td>
                <td>{iten.surface_water}</td>
                <td>{iten.population}</td>
                <td>{iten.films}</td>
                <td>{iten.created}</td>
                <td>{iten.edited}</td>
                <td>{iten.url}</td>
              </tr>
            ))
      }
    </tbody>
  );
}

export default BodyTable;
