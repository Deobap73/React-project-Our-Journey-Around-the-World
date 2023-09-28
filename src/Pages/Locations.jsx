import "./Pages.css"; // Import your styles
import planet from "../assets/ezgif.com-crop.mp4";


export const Locations = () => {
  
  return (
    <section className="planetEarth">
      {/* <div class="video-wrapper"> */}

      <video playsInline autoPlay muted loop src={planet} type="video/mp4" />

      <div className="section">
        <div className="main">
          <div className="home">Locations</div>
          <div className="frame">
            <div className="earthItsSomethingContainer">
            <div style={{marginLeft:"10rem"}} className="City-title">
           <ul >
            <li>Spain, Mardid</li>
            <li>Afghanistan, Herat</li>
            <li>Italy, Rome</li>
            <li>Italy, Venice</li>
            <li>Mexico City, Mexico</li>
            <li>United Arab Emirates, Dubai</li>
            <li>Kotor, Montonegro</li>
            <li>Italy, Salo</li>
            <li>Czech Republic, Prague </li>
            <li>France, Paris</li>
            <li>Tallin, Estonia</li>
            <li>Germany, Helgoland</li>
            <li>United Kingdom, London</li>
            <li>Netherlands, Amsterdam</li>
            <li>Peru, Cuzco</li>
            <li>Portugal, Porto</li>
            <li>Spain, Tarifa</li>
            <li>Marocco, Dakhla</li>
            <li>Canada, Quebec</li>
            <li>USA, New York</li>
           </ul>
            </div>
            </div>
          </div>
        </div>
        <img className="sectionChild" alt="" src="/frame-2@2x.png" />
      </div>
    </section>
  );
};
