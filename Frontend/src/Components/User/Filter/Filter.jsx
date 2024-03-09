import React from 'react'

function Filter({ searchText, onSearchChange}) {
  return (
    <div>
        <label>Search by Name:</label>
        <input type="text" value={searchText} onChange={onSearchChange}/>
        </div>
  );
};

export default Filter;