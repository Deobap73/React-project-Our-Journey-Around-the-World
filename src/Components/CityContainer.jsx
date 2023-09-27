import React from "react";
import "./CityContainer.css";
import data from "../api/projectTravel.json";

function CityContainer({ onClose, city }) {
  const cityData = data.users.find((item) => item.city === city);

  return (
    <div className="CityContainer">
      <main className="CityContainer-content">
        <span className="CloseButton" onClick={onClose}>
          X
        </span>
        <header>
          <div className="LetterContainer-box">
            <img src={cityData?.letterImage} alt={cityData.city} />
          </div>
          <div>
            <h2>{cityData?.userName}'s journey</h2>
            <div className="City-title">
              <h1>{cityData?.city}</h1>
              <span>{cityData?.country}</span>
            </div>
          </div>
        </header>
        <ul>
          {cityData?.facts?.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
        <section className="CityContainer-photos">
          <img src={cityData?.images1} alt={cityData.city} />
          <img src={cityData?.images2} alt={cityData.city} />
          <img src={cityData?.images3} alt={cityData.city} />
        </section>
      </main>
    </div>
  );
}

export default CityContainer;
