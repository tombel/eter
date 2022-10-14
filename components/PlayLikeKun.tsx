import Image from 'next/image'
import { useIntl } from 'react-intl'
import styles from '../styles/Banners.module.css'

export default function PlayLikeKun(): JSX.Element {
  const intl = useIntl()

  return (
    <div className={styles.playLikeKunSection}>
      <div className={styles.bannerContainer}>
        <div className={styles.descriptionContainer}>
          <h3 className={styles.playLikeKunTitle}>
            {intl.formatMessage({ id: 'page.home.play.like.a.kun.title' })}
          </h3>
          <p className={styles.playLikeKunText}>
            {intl.formatMessage({ id: 'page.home.play.like.a.kun.text' })}
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt="Kun Entity 3"
            src="/images/Avatars/Ekun_Futbol.gif"
            layout="fixed"
            quality={100}
            width={241}
            height={400}
          />
          <Image
            alt="Kun Entity 1"
            src="/images/Avatars/Ekun_Special.gif"
            layout="fixed"
            quality={100}
            width={270}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
