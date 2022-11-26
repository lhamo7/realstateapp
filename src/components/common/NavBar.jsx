import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ExploreIcon } from "../../assets/exploreIcon.svg";
import { ReactComponent as LocalOfferIcon } from "../../assets/localOfferIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/personOutlineIcon.svg";

import styles from "./NavBar.module.css";
function NavBar() {
  const navigate = useNavigate()
  return (
    <footer className={styles.footerNav}>
      <nav className={styles.navBar}>
        <ul className={styles.footerListItems}>
          <li onClick= {()=>navigate('/')} className={styles.footerListItem}>
            <ExploreIcon fill="#2c2c2c" />
            <p>Explore</p>
          </li>
          <li onClick={()=>navigate('/offers' )} className={styles.footerListItem}>
            <LocalOfferIcon />
            <p>Offers</p>
          </li>
          <li onClick={()=>navigate('/profile')} className={styles.footerListItem}>
            <ProfileIcon />
            <p>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default NavBar;
