// NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = ({
  onAboutUsClick,
  onTheProjectClick,
  onLocationsClick,
  onGalleryClick,
  onContactsClick,
}) => {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.home}>Home</div>
        <Link className={styles.aboutus} to="/aboutus" onClick={onAboutUsClick}>
          AboutUs
        </Link>
        <Link className={styles.aboutus} to="/theproject" onClick={onTheProjectClick}>
          The Project
        </Link>
        <Link className={styles.aboutus} to="/locations" onClick={onLocationsClick}>
          Locations
        </Link>
        <Link className={styles.aboutus} to="/gallery" onClick={onGalleryClick}>
          Gallery
        </Link>
        <Link className={styles.aboutus} to="/contacts" onClick={onContactsClick}>
          Contacts
        </Link>
      </nav>
      <button className={styles.burgermenu} />
    </div>
  );
};

export default NavigationBar;