import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);

  const countryList = countries.filter((country) => {
    return country.name.common
      ?.toLowerCase()
      .includes(searchTerm?.toLowerCase());
  });

  const toggle = () => {
    setShow(!show)
  }
  const getCountries = () => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
      console.log(response.data);
    });
  };

  useEffect(getCountries, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Search countries={countries} handleSearch={handleSearch} />
      <div>
        <h3>Countries</h3>

        {countryList.length > 10 && (
          <h3>Please add more characters to your search</h3>
        )}
        {countryList.length < 10 &&
          countryList.map((country) => (
            <Country country={country} toggle={toggle} show={show} />
            // <div>
            //   <h4 key={country.id}>
            //     {country.name.common}{" "}
            //     <button onClick={() => setShow(!show)}>Show</button>
            //   </h4>{" "}
            // </div>
          ))}
      </div>
    </div>
  );
}

export default App;
