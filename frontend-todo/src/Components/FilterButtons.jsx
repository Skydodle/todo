import React from 'react';

const FilterButtons = ({ setFilter }) => {
  const filterNames = ['All', 'Active', 'Completed'];

  return (
    <div className="filters btn-group stack-exception">
      {filterNames.map((name) => (
        <button
          type="button"
          className="btn toggle-btn"
          key={name}
          name={name}
          onClick={() => setFilter(name)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
