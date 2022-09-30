import Image from 'next/image'
import React from 'react'
import styles from '../styles/VideoSection.module.css'

export default function VideoSection(): JSX.Element {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (mounted) {
    return null
  }

  return (
    <div className={styles.videoContainer}>
      <div style={{ position: 'relative' }}>
        <Image
          alt="Video Background"
          src="/images/bg-video-section.png"
          layout="intrinsic"
          width="1910"
          height="815"
        />
      </div>

      <div className={styles.titleVideo}>
        <h1>KÜN AGUERO ENTERS THE METAVERSE</h1>
        <h2>9320 AVATARS</h2>
        <p>Kün Aguero enters The Sandbox to find the best players in the Metaverse.</p>
        <p>Mint your own avatar and become part of this team!</p>
        <button className="btn-primary mt-20">MINT NOW</button>
        <div className={styles.videoContent}>
          <h3>KÜN AGUERO ENTERS THE METAVERSE</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Uvufun6xer8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}
