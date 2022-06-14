import { useState, useEffect } from "react";
import numberService from "./services/numberService";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    // { name: "Arto Hellas", number: "040-123456", id: 1 },
    // { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    // { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    // { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

  useEffect(() => {
    numberService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  })

  const [newName, setNewName] = useState("");
  const [newNumber, setNumber] = useState();
  const [search, setSearch] = useState();

  const people = persons.filter((person) => {
    return person.name?.toLowerCase().includes(search?.toLowerCase());
  });

  const isFound = persons.some((persons) => {
    if (persons.name === newName) return true;
  });

  const handleName = (e) => {
    setNewName(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFound) {
      setPersons([
        ...persons,
        {
          name: newName,
          number: newNumber,
        },
      ]);
      setNewName("");
    } else {
      window.confirm(
        `${newName} is already added, do you want to replace the old number with a new one?`
      );
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <Filter handleFilter={handleFilter} search={search} />
        <PersonForm
          handleName={handleName}
          handleNumber={handleNumber}
          newName={newName}
          newNumber={newNumber}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons ? <Persons persons={persons} people={people} /> : <h3>...Please wait</h3>}
      
    </div>
  );
};

export default App;
