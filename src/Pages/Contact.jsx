import "./Pages.css"; // Import your styles
import planet from "../assets/ezgif.com-crop.mp4";

export const Contact = () => {
  const team = [
    {
      Name: "Deolindo Baptista",
      Email: "deo.baptista73@gmail.com",
      Github: "https://github.com/Deobap73",
    },
    {
      Name: "Barbara Papa",
      Email: "barbara.papa.d@gmail.com ",
      Github: "barbara-papa-30980a106/",
    },
    {
      Name: "Diego LLerena",
      Email: "diegollerena77@gmail.com ",
      Github: "https://github.com/LLDieg",
    },
    {
      Name: "Masouma Rasouli",
      Email: "masouma.rasouli@yahoo.com ",
      Github: "https://github.com/Masouma-Rasouli",
    },
  ];

  return (
    <section className="planetEarth">
      {/* <div class="video-wrapper"> */}

      <video playsInline autoPlay muted loop src={planet} type="video/mp4" />

      <div className="section">
        <div className="main">
          <div className="home">Contacts</div>
          <div className="frame">
            <div className="contactcontainer">
              <div>
                <div className="contactinfo">
                  {team.map((el, index) => (
                    <div key={index}>
                      <h2> {el.Name}</h2>
                      <p className="emailinfo">Email: {el.Email}</p>
                      <p className="githubinfo">Github: {el.Github}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="sectionChild" alt="" src="/frame-2@2x.png" />
      </div>
    </section>
  );
};
