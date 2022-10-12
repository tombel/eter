import Image from 'next/image'
import styles from '../styles/Banners.module.css'

export default function EnterKuniverse(): JSX.Element {
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
          <h3 className={styles.EnterKuniverseTitle}>ENTER THE</h3>
          <h3 className={styles.EnterKuniverseTitle}>KUNIVERSE</h3>
          <p className={styles.EnterKuniverseText}>
            Each avatar will be playable inside the Sandbox Metaverse, starting with the upcoming
            Kuniverse Opening. Jump into the game and score a goal with your avatar..
          </p>
        </div>
      </div>
    </div>
  )
}
