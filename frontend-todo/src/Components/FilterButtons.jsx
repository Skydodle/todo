import React from 'react';
import { FILTER_NAMES } from '../utils/filterMap';

const FilterButtons = ({ setFilter }) => {
  return (
    <div className="filters btn-group stack-exception">
      {FILTER_NAMES.map((name) => (
        <button type="button" className="btn toggle-btn" key={name} name={name}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
