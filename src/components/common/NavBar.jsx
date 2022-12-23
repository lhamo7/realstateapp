import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ExploreIcon } from "../../assets/exploreIcon.svg";
import { ReactComponent as LocalOfferIcon } from "../../assets/localOfferIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/personOutlineIcon.svg";

import styles from "./NavBar.module.css";
function NavBar() {
  const navigate = useNavigate();
  return (
    <footer className={styles.footerNav}>
      <nav className={styles.navBar}>
        <ul className={styles.footerListItems}>
          <li className={styles.footerListItem} onClick={() => navigate("/")}>
            <ExploreIcon fill="#8f8f8f" />
            <p className={styles.footerName}>Explore</p>
          </li>
          <li
            className={styles.footerListItem}
            onClick={() => navigate("/offers")}
          >
            <LocalOfferIcon fill="#8f8f8f" />
            <p className={styles.footerName}>Offers</p>
          </li>
          <li
            className={styles.footerListItem}
            onClick={() => navigate("/sign-in")}
          >
            <ProfileIcon fill="#8f8f8f" />
            <p className={styles.footerName}>Profile</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default NavBar;
