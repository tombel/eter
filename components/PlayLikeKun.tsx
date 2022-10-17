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
          <div className="relative w-[270px] h-[250px] md:h-[400px]">
            <Image
              alt="Kun Entity 1"
              src="/images/Avatars/Ekun_Special.gif"
              className={styles.ekunImage2}
              quality={100}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-[241px] h-[250px] md:h-[400px]">
            <Image
              alt="Kun Entity 3"
              src="/images/Avatars/Ekun_Futbol.gif"
              className={styles.ekunImage}
              quality={100}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative w-[270px] h-[250px] md:h-[400px]">
            <Image
              alt="Kun Entity 1"
              src="/images/Avatars/Ekun_03.gif"
              className={styles.ekunImage2}
              quality={100}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
