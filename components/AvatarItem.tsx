import Image from 'next/image'
import styles from '../styles/AvatarsSection.module.css'
import classNames from 'classnames'

export interface AvatarItemProps {
  staticImage: string
  animatedImage: string
  avatarName: string
  avatarRarity: string
  imageWidth: string
  imageHeight: string
  theme: string
}

export default function AvatarItem({
  staticImage,
  animatedImage,
  avatarName,
  avatarRarity,
  imageWidth,
  imageHeight,
  theme,
}: AvatarItemProps): JSX.Element {
  return (
    <div className={styles.AvatarItem}>
      <div className={styles.Avatar}>
        <div className={classNames(styles.Avatar, styles[theme])}>
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
            className={styles.ImageGif}
            layout="fixed"
            quality={100}
            width={imageWidth}
            height={imageHeight}
          />
        </div>
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
