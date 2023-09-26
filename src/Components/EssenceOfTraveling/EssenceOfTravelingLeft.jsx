import { memo } from "react";
import styles from "./EssenceOfTravelingLeft.module.css";

const EssenceOfTravelingLeft = memo(({ image, statement, title, sentences }) => {
  return (
    <div className={styles.left}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.text}>
        <div className={styles.frame}>
          <div className={styles.frameChild} />
          <div className={styles.senses}>{statement}</div>
        </div>
        <div className={styles.frame1}>
          <div className={styles.cultureAndFlavors}>{title}</div>
          <div className={styles.theCuisineReflectsContainer}>
            {sentences.map((sentence, index) => (
              <p className={styles.blankLine} key={index}>
                {sentence}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default EssenceOfTravelingLeft;
