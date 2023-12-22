import React from 'react'
import CountryWeather from './CountryWeather';

const Country = ({ country, showDetails, onToggleDetails }) => {
  const { name, capital, area, languages } = country;
  const flags = country.flags;
  const flagPicture = Object.values(flags)[0];
  const flagAlt = Object.values(flags)[2];

  return (
    <div>
      <span>{name.common}</span>
      <button onClick={() => onToggleDetails(name.common)}>
        {showDetails === name.common ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails === name.common && (
        <div>
          <h1>{name.common}</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>capital {capital}</span>
            <span>area {area}</span>
          </div>
          <p style={{ fontSize: "1rem", fontWeight: "700" }}>languages:</p>
          <ul>
            {Object.entries(languages).map(([languageCode, languageName], index) => (
              <li key={index}>{languageName}</li>
            ))}
          </ul>
          <div>
            <img className='flag' src={flagPicture} alt={flagAlt} />
          </div>
          <h2>Weather in {capital}</h2>
          <CountryWeather countryName={capital} /> {/* Render CountryWeather */}
        </div>
      )}
    </div>
  );
};

export default Country;