import { memo } from "react";
import styles from "./EssenceOfTravelingRight.module.css";

const EssenceOfTravelingRight = memo(() => {
  return (
    <div className={styles.right} data-scroll-to="rightContainer">
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.frame2}>
            <div className={styles.frameChild} />
            <div className={styles.aFeeling}>A feeling</div>
          </div>
          <div
            className={styles.theCulturalWealth}
          >{`The Cultural Wealth of Humanity `}</div>
        </div>
        <div className={styles.earthIsAContainer}>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>
            Earth is a mosaic of cultures, traditions and languages. Cultural
            diversity is one of our planet’s greatest assets. Each people and
            each community protected with its own history, art, music, cuisine
            and much more to the rich tapestry of human culture.
          </p>
          <p className={styles.blankLine}> </p>
          <p className={styles.blankLine}>
            Linguistic diversity is a testament to this, with thousands of
            languages spoken across the world. From Italian to Arabic, from
            Spanish to Portuguese, each language is a window into a unique view
            of the world.
          </p>
        </div>
      </div>
      <img className={styles.rightChild} alt="" src="/frame-42@2x.png" />
    </div>
  );
});

export default EssenceOfTravelingRight;
