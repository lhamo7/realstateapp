import React from "react";

import Rent from "../assets/images/rent.jpg";
import Forsale from "../assets/images/forsale.jpg";
import styles from "./common/Common.module.css";
function Explore() {
  return (
    <>
      <div>
        <h1>Explore</h1>
      </div>
      <div className={styles.mainTitle}> Recommended </div>
      <div className={styles.mainTitle}> Catagories </div>

      <div className={styles.direction}>
        <div>
          <img src={Rent} className={styles.image} /> Places for rent
        </div>
        <div>
          <img src={Forsale} className={styles.image} /> Places for sale
        </div>
      </div>
    </>
  );
}

export default Explore;
