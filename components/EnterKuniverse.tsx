import { useIntl } from 'react-intl'
import styles from '../styles/Banners.module.css'

export default function EnterKuniverse(): JSX.Element {
  const intl = useIntl()

  return (
    <div className={styles.EnterKuniverseSection} id="kuniverse">
      <div className={styles.bannerContainer}>
        <div className={styles.videoContainer}>
          <iframe
            src="https://player.vimeo.com/video/756874501?h=576f8689c2&autoplay=1&loop=1&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className={styles.videoFrame}
          ></iframe>
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
