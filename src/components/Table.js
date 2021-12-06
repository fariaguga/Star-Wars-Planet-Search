import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data } = useContext(PlanetContext);
  // console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravite</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
      <tbody>
        { data.map((elemento) => (
          <tr key={ elemento.name }>
            <td>{ elemento.name }</td>
            <td>{ elemento.rotation_period }</td>
            <td>{ elemento.orbital_period }</td>
            <td>{ elemento.diameter }</td>
            <td>{ elemento.climate }</td>
            <td>{ elemento.gravity }</td>
            <td>{ elemento.terrain }</td>
            <td>{ elemento.surface_water }</td>
            <td>{ elemento.population }</td>
            <td>{ elemento.films }</td>
            <td>{ elemento.created }</td>
            <td>{ elemento.edited }</td>
            <td>{ elemento.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
