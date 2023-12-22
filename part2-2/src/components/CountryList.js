import { useState } from "react";
import Country from "./Country";

const CountryList = ({ filteredCountries }) => {
  const [showDetails, setShowDetails] = useState(null)

  const handleToggleDetails = (countryName) => {
    setShowDetails(showDetails === countryName ? null : countryName);
  }

  return (
    <div>
      {filteredCountries.map((country, index) => (
        <Country
          key={index}
          country={country}
          showDetails={showDetails}
          onToggleDetails={handleToggleDetails}
        />
      ))}
    </div>
  )
}

export default CountryList