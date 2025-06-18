import React from 'react'
import styles from './Dropdown.module.css'

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
    <button className={styles.dropbtn}>our projects</button>
    <div className={styles.dropdown_content}>
      <a href="#">Swarnim</a>
      <a href="#">swarnim 35</a>
    </div>
    </div>

  )
}

export default Dropdown