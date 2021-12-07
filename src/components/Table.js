import React from 'react';
import BodyTable from './BodyTable';
import Header from './Header';

function Table() {
  return (
    <div>
      <Header />
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
        <BodyTable />
      </table>
    </div>

  );
}

export default Table;
