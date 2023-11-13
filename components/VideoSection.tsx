import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import styles from '../styles/VideoSection.module.css'
import CustomButton from './Button'
import FramedVideoPlayer from './FramedVideoPlayer'

export default function VideoSection(): JSX.Element {
  const intl = useIntl()

  return (
    <div className={styles.videoContainer} id="avatars">
      <div className={styles.titleVideo}>
        <h3>{intl.formatMessage({ id: 'page.home.video.title' })}</h3>
        <p>{intl.formatMessage({ id: 'page.home.video.messageone' })}</p>
        <CustomButton className="bg-[#80007C] text-white font-semibold py-6 px-24 rounded-full shadow uppercase md:text-xl md:py-16 md:px-24 md:mb-30 mt-30">
          <Link href="/mint-nft">{intl.formatMessage({ id: 'page.home.video.play.button' })}</Link>
        </CustomButton>
      </div>
      <div className="font-base inset-0 flex flex-col items-center pb-80 md:py-80 md:px-0;">
        <h2 className="font-base font-bold text-2xl xl:text-3xl uppercase text-primary-color-500 text-center">
          {intl.formatMessage({ id: 'page.home.video.game' })}
        </h2>
      </div>
      <div
        className="w-4/5 bg-no-repeat bg-top flex justify-center"
        style={{ backgroundImage: 'url(/images/bg_stadium.png)' }}
      >
        <div className="mb-300">
          <FramedVideoPlayer videoSrc="/video/kuniverse-video-trailer.mp4" />
        </div>
      </div>
    </div>
  )
}
