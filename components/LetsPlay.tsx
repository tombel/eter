import Image from 'next/image'
import React from 'react'
import { useIntl } from 'react-intl'

import styles from '../styles/Banners.module.css'

export default function LetsPlay(): JSX.Element {
  const intl = useIntl()

  return (
    <div className={styles.playLikeKunSection}>
      <div className={styles.LetsPlayBanner}>
        <div className={styles.textContainer}>
          <h3 className={styles.playLikeKunTitle}>
            {intl.formatMessage({ id: 'page.home.lets.play.title' })}
          </h3>
          <p className={styles.playLikeKunText}>
            {intl.formatMessage({ id: 'page.home.lets.play.description' })}
          </p>
          <ul className="list-disc ml-20 mt-10 font-base text-base text-white">
            <li>{intl.formatMessage({ id: 'page.home.lets.play.list.one' })}</li>
            <li>{intl.formatMessage({ id: 'page.home.lets.play.list.two' })}</li>
            <li>{intl.formatMessage({ id: 'page.home.lets.play.list.three' })}</li>
            <li>{intl.formatMessage({ id: 'page.home.lets.play.list.four' })}</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt="Kun Entity 2"
            src="/images/champion-monument.png"
            layout="fixed"
            quality={100}
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
