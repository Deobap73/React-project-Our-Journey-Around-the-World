
import styles from './WorldMap.module.css'; // Import your styles

function WorldMap({
  openCityContainer,
  openCityContainer1,
  openCityContainer2,
  openCityContainer3,
  openCityContainer4,
  openCityContainer5,
  openCityContainer6,
  openCityContainer7,
  openCityContainer8,
  openCityContainer9,
  openCityContainer10,
  openCityContainer11,
  openCityContainer12,
  openCityContainer13,
  openCityContainer14,
  openCityContainer15,
  openCityContainer16,
  openCityContainer17,
  openCityContainer18,
  openCityContainer19,
}) {
  return (
    <a className={styles.worldmap}>
      <div className={styles.planet}>
        <div className={styles.comeSeeThe}>Come see the world with us</div>
        <div className={styles.chooseALocation}>
          Choose a location and let us share our experience with you, and
          travel through the eyes of each of our personal experiences
        </div>
      </div>
      <div className={styles.pins}>
        <button className={styles.porto} onClick={openCityContainer}>
          <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
        </button>
        <button className={styles.madrid} onClick={openCityContainer1}>
          <img className={styles.vectorIcon} alt="" src="/vector1@2x.png" />
        </button>
        <button className={styles.london} onClick={openCityContainer2}>
          <img className={styles.vectorIcon} alt="" src="/vector2@2x.png" />
        </button>
        <button className={styles.pragh} onClick={openCityContainer3}>
          <img className={styles.vectorIcon} alt="" src="/vector3@2x.png" />
        </button>
        <button className={styles.sal} onClick={openCityContainer4}>
          <img className={styles.vectorIcon4} alt="" src="/vector4@2x.png" />
        </button>
        <button className={styles.venice} onClick={openCityContainer5}>
          <img className={styles.vectorIcon5} alt="" src="/vector5@2x.png" />
        </button>
        <button className={styles.newyork} onClick={openCityContainer6}>
          <img className={styles.vectorIcon} alt="" src="/vector6@2x.png" />
        </button>
        <button className={styles.dakhla} onClick={openCityContainer7}>
          <img className={styles.vectorIcon} alt="" src="/vector7@2x.png" />
        </button>
        <button className={styles.tallin} onClick={openCityContainer8}>
          <img className={styles.vectorIcon} alt="" src="/vector8@2x.png" />
        </button>
        <button className={styles.tarifa} onClick={openCityContainer9}>
          <img className={styles.vectorIcon9} alt="" src="/vector9@2x.png" />
        </button>
        <button className={styles.helgoland} onClick={openCityContainer10}>
          <img className={styles.vectorIcon10} alt="" src="/vector10@2x.png" />
        </button>
        <button className={styles.rome} onClick={openCityContainer11}>
          <img className={styles.vectorIcon11} alt="" src="/vector11@2x.png" />
        </button>
        <button className={styles.cuzco} onClick={openCityContainer12}>
          <img className={styles.vectorIcon} alt="" src="/vector12@2x.png" />
        </button>
        <button className={styles.quebec} onClick={openCityContainer13}>
          <img className={styles.vectorIcon13} alt="" src="/vector13@2x.png" />
        </button>
        <button className={styles.paris} onClick={openCityContainer14}>
          <img className={styles.vectorIcon14} alt="" src="/vector14@2x.png" />
        </button>
        <button className={styles.mexicocity} onClick={openCityContainer15}>
          <img className={styles.vectorIcon} alt="" src="/vector15@2x.png" />
        </button>
        <button className={styles.herat} onClick={openCityContainer16}>
          <img className={styles.vectorIcon16} alt="" src="/vector16@2x.png" />
        </button>
        <button className={styles.dubai} onClick={openCityContainer17}>
          <img className={styles.vectorIcon17} alt="" src="/vector17@2x.png" />
        </button>
        <button className={styles.amsterdam} onClick={openCityContainer18}>
          <img className={styles.vectorIcon18} alt="" src="/vector18@2x.png" />
        </button>
        <button className={styles.kotor} onClick={openCityContainer19}>
          <img className={styles.vectorIcon} alt="" src="/vector19@2x.png" />
        </button>
      </div>
    </a>
  );
}

export default WorldMap;