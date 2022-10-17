import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import styles from '../styles/VideoSection.module.css'

export default function VideoSection(): JSX.Element {
  const intl = useIntl()

  return (
    <div className={styles.videoContainer} id="avatars">
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

          <div className={styles.videoFrameContainer}>
            <iframe
              src="https://player.vimeo.com/video/756874804?h=726ab6e73c&autoplay=1&loop=1&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className={styles.videoFrame}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
