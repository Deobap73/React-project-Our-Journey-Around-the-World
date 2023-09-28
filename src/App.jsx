import "./App.css";
import WorldMap from "./Components/WorldMap";
import data from "./api/projectTravel.json";
import CityContainer from "./Components/CityContainer";
import { useState } from "react";
import Footer from "./Components/Footer";
import PlanetEarth from "./Components/PlanetEarth";
import EssenceOfTraveling from "./Components/EssenceOfTraveling/EssenceOfTraveling";

function App() {
  const [selectedPerson, setSelectedPerson] = useState({});
  const [popUp, setPopUp] = useState(false);
  const [city, setCity] = useState(null);
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleCloseCard = () => {
    setPopUp(!popUp);
  };

  const ShowPopUp = (city) => {
    setPopUp(!popUp);
    setCity(city);
  };

  return (
    <>
      <PlanetEarth />
      <WorldMap
        users={data.users}
        onPersonClick={handlePersonClick}
        onClick={ShowPopUp}
      />
      {popUp && (
        <CityContainer
          person={selectedPerson}
          onClose={handleCloseCard}
          popUp={popUp}
          city={city}
        />
      )}

      <EssenceOfTraveling />

      <Footer />
    </>
  );
}

export default App;
