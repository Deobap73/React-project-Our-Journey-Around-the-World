// \src\App.jsx


import Footer from "./Components/Footer"
import './App.css'
import EssenceOfTraveling from './Components/EssenceOfTraveling'
import NavigationBar from './Components/NavigationBar'
import PlanetEarth from "./Components/PlanetEarth"
import WorldMap from './Components/WorldMap'


function App() {
 
  return (
    <>
     <h1>React-project-Our-Journey-Around-the-World</h1>
     <NavigationBar/>
     <PlanetEarth/>
     <WorldMap/>
     <EssenceOfTraveling/>
     <Footer/>
    </>
  )
}

export default App
