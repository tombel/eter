import Image from 'next/image'
import { useIntl } from 'react-intl'
import styles from '../styles/Banners.module.css'

export default function EnterKuniverse(): JSX.Element {
  const intl = useIntl()

  return (
    <div className={styles.EnterKuniverseSection} id="kuniverse">
      <div className={styles.bannerContainer}>
        <div className={styles.imageContainer}>
          <Image
            alt="Exterior"
            src="/images/exterior-01.png"
            layout="fixed"
            quality={100}
            width={579}
            height={326}
          />
        </div>
        <div className={styles.description}>
          <h3 className={styles.EnterKuniverseTitle}>
            {intl.formatMessage({ id: 'page.home.enter.universe.title' })}
          </h3>
          <p className={styles.EnterKuniverseText}>
            {intl.formatMessage({ id: 'page.home.enter.universe.text' })}
          </p>
        </div>
      </div>
    </div>
  )
}
