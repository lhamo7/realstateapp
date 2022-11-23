import React from 'react'
import {ReactComponent as ExploreIcon} from '../../assets/exploreIcon.svg'
import {ReactComponent as LocalOfferIcon} from '../../assets/localOfferIcon.svg'
import {ReactComponent as ProfileIcon} from '../../assets/personOutlineIcon.svg'

import styles from './NavBar.module.css'
function NavBar() {
  return (<footer className= {styles.footerstyle}>
    <nav >
      <ul className={styles.direction}>
        <li className = {styles.li}  ><ExploreIcon fill = '#2c2c2c'/>
        <p>Explore</p>
        </li>
        <li><LocalOfferIcon/>
        <p>Offers</p>
        </li>
        <li>  <ProfileIcon/>

        <p>Profile</p>
        </li>
      </ul>
    </nav>
  </footer>)
}

export default NavBar