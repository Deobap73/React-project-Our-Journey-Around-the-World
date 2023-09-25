// \src\App.jsx

import './App.css'
import EssenceOfTraveling from './Components/EssenceOfTraveling'
import NavigationBar from './Components/NavigationBar'
import PlanetEarth from "./Components/PlanetEarth"
import WorldMap from './Components/WorldMap'



function App() {
 

  return (
    <>
    {/* <NavigationBar/> */}
     <PlanetEarth/>
     <WorldMap/>
     <EssenceOfTraveling/>
     
    </>
  )
}

export default App
