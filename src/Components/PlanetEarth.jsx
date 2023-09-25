// src/Components/PlanetEarth.jsx


import styles from './PlanetEarth.module.css'; // Import your styles

function PlanetEarth({ onButtonClick }) {
  return (
    <section className={styles.planetearth}>
      <div className={styles.section}>
        <div className={styles.main}>
          <div className={styles.home}>Our Journey in the World</div>
          <div className={styles.frame}>
            <div className={styles.earthItsSomethingContainer}>
              <p className={styles.earthItsSomething}>
                Earth! It's something that never ceases to surprise us. With
                its stunning landscapes, vast oceans, towering mountains,
                and incredible diversity of life, Earth is truly a
                remarkable place. A planet full of life, which manifests
                itself in extraordinary ways in every corner of the globe.
              </p>
              <p className={styles.earthItsSomething}></p>
              <p className={styles.earthItsSomething}>
                This is a website where 4 people report in images their
                experience that enriches their lives, but also makes them
                aware of the importance of preserving this wonderful planet
                for future generations
              </p>
              <p className={styles.earthItsSomething}></p>
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.letsStart}>Let's Start</div>
            </button>
          </div>
        </div>
        <img className={styles.sectionChild} alt="" src="/frame-2@2x.png" />
      </div>
    </section>
  );
}

export default PlanetEarth;