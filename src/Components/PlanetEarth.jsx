// src/Components/PlanetEarth.jsx
import React, { useState } from "react";
import planet from "../assets/ezgif.com-crop.mp4";
import "./PlanetEarth.scss"; // Import your styles

function PlanetEarth({}) {

  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    // Role a página para o componente EssenceOfTraveling
    const essenceOfTravelingElement = document.getElementById("essenceOfTraveling");
    if (essenceOfTravelingElement) {
      essenceOfTravelingElement.scrollIntoView({ behavior: "smooth" });
      setButtonClicked(true);
    }
  };

  return (
    <section className="planetEarthHome">
      {/* <div class="video-wrapper"> */}
      
      <video
  playsInline
  autoPlay
  muted
  loop
  src={planet}
  type="video/mp4"

  
/>
    
      <div className="sectionHome">
        <div className="mainHome">
          <div className="home">Our Journey in the World</div>
          <div className="frameHome">
            <div className="earthItsSomethingContainer">
              <p className="earthItsSomething">
                Earth! It's something that never ceases to surprise us. With its
                stunning landscapes, vast oceans, towering mountains, and
                incredible diversity of life, Earth is truly a remarkable place.
                A planet full of life, which manifests itself in extraordinary
                ways in every corner of the globe.
              </p>
              <p className="earthItsSomething"></p>
              <p className="earthItsSomething">
                This is a website where 4 people report in images their
                experience that enriches their lives, but also makes them aware
                of the importance of preserving this wonderful planet for future
                generations
              </p>
              <p className="earthItsSomething"></p>
            </div>
            <button className="button" onClick={handleButtonClick}>
              <div className="letsStart">Let's Start</div>
            </button>
          </div>
        </div>
        <img className="sectionChild" alt="" src="/frame-2@2x.png" />
      </div>
    </section>
  );
}

export default PlanetEarth;
