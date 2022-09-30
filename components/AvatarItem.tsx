import Image from 'next/image'
import styles from '../styles/AvatarsSection.module.css'

export interface AvatarItemProps {
  staticImage: string
  animatedImage: string
  avatarName: string
  avatarRarity: string
}

export default function AvatarItem({
  staticImage,
  animatedImage,
  avatarName,
  avatarRarity,
}: AvatarItemProps): JSX.Element {
  return (
    <div className={styles.AvatarItem}>
      <div
        className={styles.Avatar}
        style={{ position: 'relative', width: '475px', height: '475px' }}
      >
        <Image
          alt="Discord Logo"
          src={staticImage}
          className={styles.ImageStatic}
          layout="fill"
          quality={100}
          objectFit="cover"
        />
        <Image
          alt="Discord Logo"
          src={animatedImage}
          layout="fill"
          className={styles.ImageGif}
          quality={100}
          objectFit="cover"
        />
      </div>
      <div className={styles.AvatarDescription}>
        <h3>{avatarName}</h3>
        <p>
          RARITY <strong>{avatarRarity}</strong>
        </p>
      </div>
    </div>
  )
}
