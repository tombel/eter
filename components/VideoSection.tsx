import React from 'react'
import Link from 'next/link'
import styles from '../styles/VideoSection.module.css'

export default function VideoSection(): JSX.Element {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className={styles.videoContainer}>
      <div className={styles.titleVideo}>
        <h1>KUN AGÜERO ENTERS THE METAVERSE</h1>
        <h2>9320 AVATARS</h2>
        <p>Kun Agüero enters The Sandbox to find the best players in the Metaverse.</p>
        <p>Mint your own avatar and become part of this team!</p>
        <button className="btn-primary mt-20">
          <Link href="/mint-nft">MINT NOW</Link>
        </button>
        <div className={styles.videoContent}>
          <h3>KUN AGÜERO ENTERS THE METAVERSE</h3>

          <video width="560" height="315" controls>
            <source src="/video/kuniverse-video-trailer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
