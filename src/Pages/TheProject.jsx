import "./Pages.css"; // Import your styles
import planet from "../assets/ezgif.com-crop.mp4";

export const TheProject = () => {
  return (
    <section className="planetEarth">
      {/* <div class="video-wrapper"> */}

      <video playsInline autoPlay muted loop src={planet} type="video/mp4" />

      <div className="section">
        <div className="mainProject">
          <div className="home">THe Project</div>
          <div className="frameProject">
            <div className="projectContainer">
              <p className="projectDescription">
                In the developing of our project, we used a variety of powerful
                tools to ensure the end result was an attractive and functional
                experience.
              </p>
              <p className="projectDescription">
                <span>Figma:</span> Figma played a crucial role in the early
                phase of the project, allowing us to create wireframes and
                interactive prototypes. With this web-based UI design tool, we
                were able to visualize the project structure before writing a
                single line of code.{" "}
              </p>
              <p className="projectDescription">
                <span>Photoshop:</span> Photoshop was a valuable tool for manipulating images
                and graphics. It allowed us to create and edit custom visual
                elements, such as image manipulation, as well as adjust the
                overall aesthetic of the project.
              </p>
              <p className="projectDescription">
              <span>Visual Studio Code:</span> Visual Studio Code (VS Code) is a highly
                popular integrated development environment (IDE) for coding in
                JavaScript and React.{" "}
              </p>
              <p className="projectDescription">
              <span>SCSS:</span> SCSS (Sass) This made project styling more efficient and
                organized, ensuring a consistent look throughout the
                application.
              </p>
              <p className="projectDescription">
              <span>React Vite:</span> React Vite is a rapid development environment for
                React projects. Its optimized configuration and fast reloading
                made development agile and effective. Additionally, the React
                framework made it easy to create reusable components and manage
                application state.
              </p>
            </div>
          </div>
        </div>
        <img className="sectionChild" alt="" src="/frame-2@2x.png" />
      </div>
    </section>
  );
};
