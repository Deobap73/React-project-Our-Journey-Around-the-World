import { memo } from "react";
import styles from "./EssenceOfTravelingLeft.module.css";

const EssenceOfTravelingLeft = memo(() => {
  return (
    <div className={styles.left}>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.text}>
        <div className={styles.frame}>
          <div className={styles.frameChild} />
          <div className={styles.senses}>Senses</div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.cultureAndFlavors}>Culture and Flavors</div>
          <div className={styles.theCuisineReflectsContainer}>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              The cuisine reflects cultural diversity in a delicious way. From
              sophisticated French cuisine to the spicy flavors of Thai, each
              culture has its own delicacies and food preparation methods. Meals
              are about much more than just nutrition; they are celebrations of
              identity and cultural tradition.
            </p>
            <p className={styles.blankLine}></p>
            <p className={styles.blankLine}>
              Art and music are profound expressions of the human soul. From
              Leonardo da Vinci's Renaissance paintings to ancient African
              sculptures, art connects us to the past and inspires us to create
              the future. Music transcends borders and languages, bringing joy
              and emotional expression to people of all backgrounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default EssenceOfTravelingLeft;
