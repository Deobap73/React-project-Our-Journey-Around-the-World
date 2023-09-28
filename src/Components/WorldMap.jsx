import "./WorldMap.scss";

function WorldMap({ onClick }) {
  return (
    <a className="worldmap">
      <img
        className="background-image"
        src="/worldmap@3x.png" // Defina a imagem de fundo aqui
        alt="World Map Background"
      />
      <div className="planet">
        <div className="comeSeeThe">Come see the world with us</div>
        <div className="chooseALocation">
          Choose a location and let us share our experience with you, and travel
          through the eyes of each of our personal experiences
        </div>
      </div>
      <div className="pins">
        <button className="porto" onClick={() => onClick("Porto")}>
          <img className="vectorIcon" alt="Porto" src="/vector@2x.png" />
        </button>
        <button className="madrid" onClick={() => onClick("Madrid")}>
          <img className="vectorIcon" alt="Madrid" src="/vector1@2x.png" />
        </button>
        <button className="london" onClick={() => onClick("London")}>
          <img className="vectorIcon" alt="London" src="/vector2@2x.png" />
        </button>
        <button className="pragh" onClick={() => onClick("Prague")}>
          <img className="vectorIcon" alt="Prague" src="/vector3@2x.png" />
        </button>
        <button className="salo" onClick={() => onClick("Salo")}>
          <img className="vectorIcon" alt="Salo" src="/vector4@2x.png" />
        </button>
        <button className="venice" onClick={() => onClick("Venice")}>
          <img className="vectorIcon" alt="Venice" src="/vector5@2x.png" />
        </button>
        <button className="newyork" onClick={() => onClick("New York")}>
          <img className="vectorIcon" alt="New York" src="/vector6@2x.png" />
        </button>
        <button className="dakhla" onClick={() => onClick("Dakhla")}>
          <img className="vectorIcon" alt="Dakhla" src="/vector7@2x.png" />
        </button>
        <button className="tallin" onClick={() => onClick("Tallin")}>
          <img className="vectorIcon" alt="Tallin" src="/vector8@2x.png" />
        </button>
        <button className="tarifa" onClick={() => onClick("Tarifa")}>
          <img className="vectorIcon" alt="Tarifa" src="/vector9@2x.png" />
        </button>
        <button className="helgoland" onClick={() => onClick("Helgoland")}>
          <img className="vectorIcon" alt="Helgoland" src="/vector10@2x.png" />
        </button>
        <button className="rome" onClick={() => onClick("Rome")}>
          <img className="vectorIcon" alt="Rome" src="/vector11@2x.png" />
        </button>
        <button className="cuzco" onClick={() => onClick("Cuzco")}>
          <img className="vectorIcon" alt="Cuzco" src="/vector12@2x.png" />
        </button>
        <button className="quebec" onClick={() => onClick("Quebec")}>
          <img className="vectorIcon" alt="Quebec" src="/vector13@2x.png" />
        </button>
        <button className="paris" onClick={() => onClick("Paris")}>
          <img className="vectorIcon" alt="Paris" src="/vector14@2x.png" />
        </button>
        <button className="mexicocity" onClick={() => onClick("Mexico-City")}>
          <img
            className="vectorIcon"
            alt="Mexico-City"
            src="/vector15@2x.png"
          />
        </button>
        <button className="herat" onClick={() => onClick("Herat")}>
          <img className="vectorIcon" alt="Herat" src="/vector16@2x.png" />
        </button>
        <button className="dubai" onClick={() => onClick("Dubai")}>
          <img className="vectorIcon" alt="Dubai" src="/vector17@2x.png" />
        </button>
        <button className="amsterdam" onClick={() => onClick("Amsterdam")}>
          <img className="vectorIcon" alt="Amsterdam" src="/vector18@2x.png" />
        </button>
        <button className="kotor" onClick={() => onClick("Kotor")}>
          <img className="vectorIcon" alt="Kotor" src="/vector19@2x.png" />
        </button>
      </div>
    </a>
  );
}

export default WorldMap;
