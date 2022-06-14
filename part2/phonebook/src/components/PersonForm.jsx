import React from "react";

const PersonForm = ({ handleName, newName, handleNumber, newNumber }) => {
  return (
    <div>
      <div>
        name: <input type="text" onChange={handleName} value={newName} name="name" />
      </div>
      <div>
        number: <input type="number" onChange={handleNumber} value={newNumber} name="number" />
      </div>
    </div>
  );
};

export default PersonForm;
