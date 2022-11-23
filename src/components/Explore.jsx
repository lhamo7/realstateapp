import React from 'react'

import Rent from '../assets/images/rent.jpg'


import styles from './common/Common.module.css'
function Explore() {
  return (<>
    <div><h1>Explore</h1></div>
    <div style={{fontWeight:'bold'}}> Recommended </div>
    <div style={{fontWeight:'bold'}}> Catagories </div>

    <div className={styles.direction}>
      <div>Places for rent<br/>
     
         <img className= {styles.image} src={Rent} />
      </div>
      <div>Places for sale</div>

    </div>
  </>)
}

export default Explore