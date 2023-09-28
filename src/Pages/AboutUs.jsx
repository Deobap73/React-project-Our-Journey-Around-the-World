import "./Pages.css"; // Import your styles
import planet from "../assets/ezgif.com-crop.mp4";

export const AboutUs = () => {
  return (
    <section className="planetEarth">
      {/* <div class="video-wrapper"> */}

      <video playsInline autoPlay muted loop src={planet} type="video/mp4" />

      <div className="section">
        <div className="main">
          <div className="home">About Us</div>
          <div className="frame">
            <div className="earthItsSomethingContainer">
              <p className="earthItsSomething">
                <strong>Masouma Rasouli:</strong> I embark on journeys to
                discover myself and ascertain my position in this vast world.
              </p>
              <p className="earthItsSomething"></p>
              <p className="earthItsSomething">
                <strong> Deolingo Baptista: </strong> I like traveling because
                each road hides a story and each destination reveals a piece of
                me.
              </p>
              <p className="earthItsSomething">
                <strong> Barbara Papa: </strong> Traveling has always been in my
                DNA, being curious to discover the world is a necessity
              </p>
              <p className="earthItsSomething">
                <strong>Diego LLerena: </strong> I love to travel to make the
                haters jealous.
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
