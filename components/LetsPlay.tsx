import Image from 'next/image'
import styles from '../styles/Banners.module.css'

export default function LetsPlay(): JSX.Element {
  return (
    <div className={styles.playLikeKunSection}>
      <div className={styles.LetsPlayBanner}>
        <div className={styles.textContainer}>
          <h3 className={styles.playLikeKunTitle}>VAMOS A JUGAR!</h3>
          <p className={styles.playLikeKunText}>
            By minting Kun Agüero´s first NFT Avater Collection you will recieve:
            <ul className="list-disc ml-20 mt-10">
              <li>A one kind playable avatar to wear in The Sandbox </li>
              <li>
                VIP access to exclusive social media channels to interact directly with Kun Agüero.
              </li>
              <li>
                A chance to compete in exclusive challenges within the Kuniverse to win special
                rewards by playing in The Sandbox, iincluding NFT drops, merchandising and more.
              </li>
              <li>Entry to private events with Kun Agüero and other celebrities.</li>
            </ul>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt="Kun Entity 2"
            src="/images/entity-02.png"
            layout="fixed"
            quality={100}
            width={256}
            height={495}
          />
        </div>
      </div>
    </div>
  )
}
