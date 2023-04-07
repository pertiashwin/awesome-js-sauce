import React, { useState } from 'react';
import './app.css';
import Table from './table';

function App() {
  const [details, setDetails] = useState([]);

  const handleGetDetails = async (value) => {
    const response = await fetch(`https://api.conceptnet.io/c/en/${value}`);
    const data = await response.json();
    setDetails(data.edges);
    console.log("data--", data)
  };

  const uniqueRelLabels = new Set(details.map((edge) => edge.rel.label));

  return (
    <div className="display-details">
      <form onSubmit={(event) => {
        event.preventDefault();
        handleGetDetails(event.target.elements.input.value);
      }}>
        <label>
          Input:
          <input type="text" name="input" className="input-field" />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <h2>Details:</h2>
      {details.length > 0 && (
        <div className="details-section">

          {/* {Array.from(uniqueRelLabels).map((relLabel) => (
            <div key={relLabel} className="rel-label-section">
              <h3>{relLabel}</h3>
              {details.map((edge) => {
                if (edge.rel.label === relLabel) {
                  return <p key={edge.start.label}>{edge.start.label}</p>;
                }
                return null;
              })}
            </div>
          ))} */}
          <Table details={details} uniqueRelLabels={uniqueRelLabels} />
        </div>
      )}
    </div>
  );
}

export default App;