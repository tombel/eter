import Image from 'next/image'
import styles from '../styles/Banners.module.css'

export default function PlayLikeKun(): JSX.Element {
  return (
    <div className={styles.playLikeKunSection}>
      <div className={styles.bannerContainer}>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.playLikeKunTitle}>PLAY LIKE KUN</h3>
          <p className={styles.playLikeKunText}>
            The Kuniverse Avatars are a collection of 9320 unique and randomly generated metaverse
            avatars for the Sandbox. Each one will beplayable avatar inside The Sandbox unlocking
            unique functionalities and giving owners the possibility to win special prizes and
            experiencies alongside Kun Aguero
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt="Kun Entity 3"
            src="/images/entity-03.png"
            layout="fixed"
            quality={100}
            width={240}
            height={400}
          />
          <Image
            alt="Kun Entity 1"
            src="/images/entity-01.png"
            layout="fixed"
            quality={100}
            width={207}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
