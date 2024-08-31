import React, { useState, useEffect } from 'react';

function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,flags')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch countries');
        }
        return response.json();
      })
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="container mt-4">Loading...</div>;
  if (error) return <div className="container mt-4">Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2>Countries</h2>
      <div className="row">
        {countries.map(country => (
          <div key={country.name.common} className="col-md-4 mb-4">
            <div className="card">
              <img src={country.flags.png} alt={`Flag of ${country.name.common}`} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries;