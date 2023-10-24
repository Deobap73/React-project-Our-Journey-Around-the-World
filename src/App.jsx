import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import NavigationBar from "./Components/NavigationBar";
import Home from "./Pages/Home";
import { TheProject } from "./Pages/TheProject";
import { AboutUs } from "./Pages/AboutUs";
import { Locations } from "./Pages/Locations";
import { Gallery } from "./Pages/Gallery";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/project" element={<TheProject />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </>
  );
}

export default App;
