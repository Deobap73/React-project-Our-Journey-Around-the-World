import { Link } from "react-router-dom"; 
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <ul className="container">
      <li>
        {" "}
        <Link to="/">HOME</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/about">ABOUT US</Link>
      </li>
      <li>
        {" "}
        <Link to="/project">THE PROJECT</Link>
      </li>
      <li>
        {" "}
        <Link to="/location">LOCATIONS</Link>
      </li>
      <li>
        {" "}
        <Link to="/gallery">GALLERY</Link>
      </li>
      <li>
        {" "}
        <Link to="/contact">CONTACT</Link>
      </li>
    </ul>
  );
}

export default NavigationBar;

