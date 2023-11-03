import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import styles from '../styles/VideoSection.module.css'
import CustomButton from './Button'
import VideoPlayer from './VideoPlayer'

export default function VideoSection(): JSX.Element {
  const intl = useIntl()

  return (
    <div className={styles.videoContainer} id="avatars">
      <div className={styles.titleVideo}>
        <h3>{intl.formatMessage({ id: 'page.home.video.title' })}</h3>
        {/* <h2>{intl.formatMessage({ id: 'page.home.video.avatars' })}</h2> */}
        <p>{intl.formatMessage({ id: 'page.home.video.messageone' })}</p>
        {/* <p>{intl.formatMessage({ id: 'page.home.video.messagetwo' })}</p> */}
        <CustomButton className="bg-[#80007C] text-white font-semibold py-6 px-24 rounded-full shadow uppercase md:text-xl md:py-16 md:px-24 md:mb-30 mt-30">
          <Link href="/mint-nft">{intl.formatMessage({ id: 'page.home.video.play.button' })}</Link>
        </CustomButton>
        <div className={styles.videoContent}>
          <VideoPlayer videoSrc="/video/kuniverse-video-trailer.mp4" />
          {/* <h3>{intl.formatMessage({ id: 'page.home.video.title' })}</h3> */}

          {/* <div className={styles.videoFrameContainer}>
            <iframe
              src="https://player.vimeo.com/video/756874804?h=726ab6e73c&title=0&byline=0&portrait=0"
              frameBorder="0"
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              className={styles.videoFrame}
            ></iframe>
          </div> */}
        </div>
      </div>
    </div>
  )
}
