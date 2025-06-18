import Dropdown from "./Dropdown/Dropdown"
import styles from "./Navbar.module.css"


const Navigation = () => {
  return (
    <div >
     
         <nav className={`${styles.navigation} `}>
         <div>
            <img src="/download.svg" alt="logo" />
            </div>
    
          <ul>
            <li><a href="#">overview</a></li>
            <li><a href="#"><Dropdown/></a></li>
            <li><a href="#">location</a></li>
            <li><a href="#">amenities</a></li>
            <li><a href="#">floor plans</a></li>
            <li><a href="#">download brochure</a></li>
          </ul>
          <button className={styles.active}>Enqiure now</button>
        </nav>
    </div>
  )
}

export default Navigation