import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function BodyTable() {
  const { data } = useContext(PlanetContext);
  const { filterByName: { searchName } } = useContext(PlanetContext);
  console.log(searchName);
  return (
    <tbody>
      {data.filter((e) => (e.name).toLowerCase().includes(searchName.toLowerCase()))
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
        ))}
    </tbody>
  );
}

export default BodyTable;
