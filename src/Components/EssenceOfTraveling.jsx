
import './EssenceOfTraveling.css';
import EssenceOfTravelingLeft from "./EssenceOfTraveling/EssenceOfTravelingLeft";
import EssenceOfTravelingRight from "./EssenceOfTraveling/EssenceOfTravelingRight";
import data from "../api/projectTravel.json";

function EssenceOfTraveling() {
  return (
    <><div className="essenceoftraveling">
      {data.data.map((item) => (
        <div key={item.id}>
          {item.id.includes("Left") ? (
            <EssenceOfTravelingLeft
              image={item.Image}
              statement={item.Statement}
              title={item.Title}
              sentences={item.Sentences}
            />
          ) : (
            <EssenceOfTravelingRight
              image={item.Image}
              statement={item.Statement}
              title={item.Title}
              sentences={item.Sentences}
            />
          )}
        </div>
      ))}
    </div>
      <h2></h2>
    </>
    
  );
}

export default EssenceOfTraveling;