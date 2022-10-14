import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import styles from '../styles/VideoSection.module.css'

export default function VideoSection(): JSX.Element {
  const intl = useIntl()

  return (
    <div className={styles.videoContainer}>
      <div className={styles.titleVideo}>
        <h1>{intl.formatMessage({ id: 'page.home.video.title' })}</h1>
        <h2>{intl.formatMessage({ id: 'page.home.video.avatars' })}</h2>
        <p>{intl.formatMessage({ id: 'page.home.video.messageone' })}</p>
        <p>{intl.formatMessage({ id: 'page.home.video.messagetwo' })}</p>
        <button className="btn-primary mt-20">
          <Link href="/mint-nft">{intl.formatMessage({ id: 'page.home.video.mint.buttom' })}</Link>
        </button>
        <div className={styles.videoContent}>
          <h3>{intl.formatMessage({ id: 'page.home.video.title' })}</h3>

          <video width="560" height="315" controls>
            <source src="/video/kuniverse-video-trailer.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  )
}
