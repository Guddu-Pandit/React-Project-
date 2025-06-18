import React from 'react'
import styles from './landingpage.module.css'

const Landingpage = () => {
  return (
<div className={styles.landing_container}>
<video
        autoPlay
        loop
        muted
        playsInline
        className={styles.landing_video}
      >
        <source src="/mobvideo.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay_text}>
        <p>Swarnim - A project by Tathastu</p>
      </div>
</div>
  )
}

export default Landingpage