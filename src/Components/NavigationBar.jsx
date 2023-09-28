import { Link } from "react-router-dom"; 
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <ul className="navigationBar">
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/aboutUs">AboutUs</Link>
      </li>
      <li>
        {" "}
        <Link to="/project">TheProject</Link>
      </li>
      <li>
        {" "}
        <Link to="/locations">Locations</Link>
      </li>
      <li>
        {" "}
        <Link to="/gallery">Gallery</Link>
      </li>
      <li>
        {" "}
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default NavigationBar;

