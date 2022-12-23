import React from 'react'

import styles from "./Offers.module.css";
import BedImage from "../assets/bedIcon.svg";
import BathTubImage from "../assets/bathtubIcon.svg";
import Houseone from "../assets/images/houseone.jpg";
import Housetwo from "../assets/images/housetwo.jpg";
import Housethree from "../assets/images/housethree.jpg";
function Offers() {
  return (
    <ul className={styles.listmain}>
      <h1>Offers</h1>

      <li className={styles.listitem}>
        <img src={Houseone} className={styles.pic} />
        <div className={styles.description}>
          <p style={{}}>10 rue jean moulin, 33000 Bordeaux</p>
          <h2 style={{ text: "Bold" }}>Belle villa</h2>
          <p style={{ color: "#0c6" }}>$100/Month</p>
          <p>
            <img src={BedImage} /> &nbsp; 1 Bedroom &nbsp;
            <img src={BathTubImage} />
            &nbsp;&nbsp; 1 Bathroom
          </p>
        </div>
      </li>
      <li className={styles.listitem}>
        <img src={Housetwo} className={styles.pic} />
        <div className={styles.description}>
          <p style={{}}>Entoto Polytechnic College, Addis Ababa</p>
          <h2 style={{ text: "Bold" }}>reportname2</h2>
          <p style={{ color: "#0c6" }}>$100/Month</p>
          <p>
            <img src={BedImage} /> &nbsp; Bedroom &nbsp;
            <img src={BathTubImage} />
            &nbsp;&nbsp; 3 Bathroom
          </p>
        </div>
      </li>
      <li className={styles.listitem}>
        <img src={Housethree} className={styles.pic} />
        <div className={styles.description}>
          <p style={{}}>1359 Kramer Boulevard</p>
          <h2 style={{ text: "Bold" }}>1 Bedroom Apartment</h2>
          <p style={{ color: "#0c6" }}>$100/Month</p>
          <p>
            <img src={BedImage} /> &nbsp; 3 Bedroom &nbsp;
            <img src={BathTubImage} />
            &nbsp;&nbsp; 1 Bathroom
          </p>
        </div>
      </li>
    </ul>
  );
}

export default Offers