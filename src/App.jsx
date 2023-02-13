import React, { useState, useEffect } from "react";
import "./App.css";
import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";

import { fetchByCountry } from "./services/services";

function App() {
  const [data, setData] = useState([]);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    fetchCountryData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchCountryData = async () => {
    try {
      const result = await fetchByCountry("peru");
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <SearchBar />
      {data ? (
        data.map((item) => {
          return (
            <CountryCard
              name={item.name.common}
              image={item.flags.png}
              key={item.ccn3}
            />
          );
        })
      ) : (
        <p>Data loading...</p>
      )}
    </div>
  );
}

export default App;
