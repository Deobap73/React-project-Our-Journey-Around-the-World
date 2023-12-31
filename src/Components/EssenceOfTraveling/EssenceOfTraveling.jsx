// src/Components/EssenceOfTraveling.jsx
import './EssenceOfTraveling.scss';
import EssenceOfTravelingLeft from "./EssenceOfTravelingLeft";
import EssenceOfTravelingRight from "./EssenceOfTravelingRight";
import data from "../../api/projectTravel.json";

function EssenceOfTraveling() {
  let isLeft = true; // Variable to track the current type

 
  return (
    <div id="essenceOfTraveling" className="essenceoftraveling">
      {data.data.map((item) => {
        // Determine which component to render based on isLeft variable
        const ComponentToRender = isLeft
          ? EssenceOfTravelingLeft
          : EssenceOfTravelingRight;

        // Toggle the isLeft variable for the next iteration
        isLeft = !isLeft;

        return (
          <div className='Container' key={item.id}>
            <ComponentToRender
              image={item.Image}
              statement={item.Statement}
              title={item.Title}
              sentences={item.Sentences}
            />
          </div>
        );
      })}
    </div>
  );
}

export default EssenceOfTraveling;