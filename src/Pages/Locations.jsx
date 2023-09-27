import "./Locations.scss"; // Import your styles

export const Locations = () => {
  return (
    <section className="planetearth">
      {/* <div class="video-wrapper"> */}

      <video playsinline autoPlay muted loop src={planet} type="video/mp4" />

      <div className="section">
        <div className="main">
          <div className="home">LOCATION</div>
          <div className="frame">
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
          </div>
        </div>
        <img className="sectionChild" alt="" src="/frame-2@2x.png" />
      </div>
    </section>
  );
};
