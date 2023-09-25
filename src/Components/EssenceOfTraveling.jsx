import styles from './EssenceOfTraveling.module.css'; // Import your styles
import EssenceOfTravelingLeft from "./EssenceOfTraveling/EssenceOfTravelingLeft";
import EssenceOfTravelingRight from "./EssenceOfTraveling/EssenceOfTravelingRight";

function EssenceOfTraveling() {
  return (
    <div className={styles.essenceoftraveling}>
      <EssenceOfTravelingLeft />
      <EssenceOfTravelingRight />
      
    </div>
  );
}

export default EssenceOfTraveling;