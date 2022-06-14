import React from "react";

const Filter = ({ handleFilter, search }) => {
  return (
    <div>
      <h1>Filter by name:</h1>
      <input
        name="search"
        value={search}
        onChange={(e) => {
          handleFilter(e);
        }}
      />
    </div>
  );
};

export default Filter;
