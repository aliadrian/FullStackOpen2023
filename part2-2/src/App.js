import { useState, useEffect } from "react";
import Filter from './components/Filter';
import "./index.css"
import countriesService from "./services/countries";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([])
  const [showFilter, setshowFilter] = useState('');

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      })
  }, [])

  const handleCountryNameChange = (e) => {
    setshowFilter(e.target.value)
  }

  const filteredCountries = countries.filter(country => {
    return country.name.common.toLowerCase().includes(showFilter.toLowerCase())
  })

  return (
    <div className="App">
      <div style={{ display: "flex", alignItems: "center", height: "2rem" }}>
        <p>find countries</p>
        <Filter handleCountryNameChange={handleCountryNameChange} />
      </div>
      {showFilter && (
        <div>
          {filteredCountries.length >= 10 ? (
            <span>Too many matches, specify another filter</span>
          ) : (
            <CountryList filteredCountries={filteredCountries} countries={countries} />
          )}
        </div>
      )}
    </div>

  );
}

export default App;
