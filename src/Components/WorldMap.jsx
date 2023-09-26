
import styles from './WorldMap.module.css';

function WorldMap({ onClick }) {
  

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
        <button className={styles.porto} onClick={()=>onClick('Porto')} >
          <img className={styles.vectorIcon} alt="" src="/vector@2x.png" />
        </button>
        <button className={styles.madrid} onClick={()=>onClick('Madrid')} >
          <img className={styles.vectorIcon} alt="" src="/vector1@2x.png" />
        </button>
        <button className={styles.london} onClick={()=>onClick('London')} >
          <img className={styles.vectorIcon} alt="" src="/vector2@2x.png" />
        </button>
        <button className={styles.pragh} onClick={()=>onClick('Prague')}>
          <img className={styles.vectorIcon} alt="" src="/vector3@2x.png" />
        </button>

        {/* !!!!!!! */}
        {/* <button className={styles.salo} onClick={openCityContainer4}>
          <img className={styles.vectorIcon} alt="" src="/vector4@2x.png" />
        </button>
        <button className={styles.venice} onClick={openCityContainer5}>
          <img className={styles.vectorIcon} alt="" src="/vector5@2x.png" />
        </button> */}
        <button className={styles.newyork} onClick={()=>onClick('New York')} >
          <img className={styles.vectorIcon} alt="" src="/vector6@2x.png" />
        </button>
        <button className={styles.dakhla} onClick={()=>onClick('Dakhla')} >
          <img className={styles.vectorIcon} alt="" src="/vector7@2x.png" />
        </button>
        <button className={styles.tallin} onClick={()=>onClick('Tallin')}>
          <img className={styles.vectorIcon} alt="" src="/vector8@2x.png" />
        </button>
        <button className={styles.tarifa} onClick={()=>onClick('Tarifa')} >
          <img className={styles.vectorIcon9} alt="" src="/vector9@2x.png" />
        </button>
        <button className={styles.helgoland} onClick={()=>onClick('Helgoland')} >
          <img className={styles.vectorIcon10} alt="" src="/vector10@2x.png" />
        </button>
        <button className={styles.rome} onClick={()=>onClick('Rome')}>
          <img className={styles.vectorIcon11} alt="" src="/vector11@2x.png" />
        </button>
        <button className={styles.cuzco} onClick={()=>onClick('Cuzco')}>
          <img className={styles.vectorIcon} alt="" src="/vector12@2x.png" />
        </button>
        <button className={styles.quebec} onClick={()=>onClick('Quebec')} >
          <img className={styles.vectorIcon13} alt="" src="/vector13@2x.png" />
        </button>
        <button className={styles.paris} onClick={()=>onClick('Paris')} >
          <img className={styles.vectorIcon14} alt="" src="/vector14@2x.png" />
        </button>
        <button className={styles.mexicocity} onClick={()=>onClick('Mexico-City')}>
          <img className={styles.vectorIcon} alt="" src="/vector15@2x.png" />
        </button>
        <button className={styles.herat} onClick={()=>onClick('Herat')}>
          <img className={styles.vectorIcon16} alt="" src="/vector16@2x.png" />
        </button>
        <button className={styles.dubai} onClick={()=>onClick('Dubai')}>
          <img className={styles.vectorIcon17} alt="" src="/vector17@2x.png" />
        </button>
        <button className={styles.amsterdam} onClick={()=>onClick('Amsterdam')}>
          <img className={styles.vectorIcon18} alt="" src="/vector18@2x.png" />
        </button>
        <button className={styles.kotor} onClick={()=>onClick('Kotor')}>
          <img className={styles.vectorIcon} alt="" src="/vector19@2x.png" />
        </button>
      </div>
    </a>
  );
}

export default WorldMap;