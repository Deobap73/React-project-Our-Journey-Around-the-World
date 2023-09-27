import React from "react";
import "./CityContainer.css";
import data from "../api/projectTravel.json";

function CityContainer({ onClose, city }) {
  const cityData = data.users.find((item) => item.city === city);

  return (
    <div className="CityContainer">
      <div className="CityContainer-content">
        <span className="CloseButton" onClick={onClose}>
          X
        </span>
        <div className="LetterContainer-box">
        <img src={cityData?.letterImage} alt={cityData.city} />
        </div>
        <h2>
          {cityData?.city}
          <span>{cityData?.country}</span>
        </h2>

        <ul>
          {cityData?.facts?.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
        <div className="CityContainer-photos">
          <img src={cityData?.images1} alt={cityData.city} />
          <img src={cityData?.images2} alt={cityData.city} />
          <img src={cityData?.images3} alt={cityData.city} />
        </div>
      </div>
    </div>
  );
}

export default CityContainer;