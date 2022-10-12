import styles from '../styles/AvatarsSection.module.css'
import AvatarItem from './AvatarItem'
import Image from 'next/image'

export default function AvatarsSection(): JSX.Element {
  return (
    <div className={styles.AvatarsSection}>
      <div className={styles.logo}>
        <Image
          alt="Kuniverse Logo"
          src="/images/kuniverse-logo-black.png"
          layout="fixed"
          quality={100}
          width={300}
          height={166}
        />
        <Image
          alt="Sandbox Logo"
          src="/images/sandbox-logo-white.svg"
          layout="fixed"
          quality={100}
          width={147}
          height={44}
        />
      </div>

      <div className="container text-center">
        <div className={styles.AvatarsSectionContent}>
          <AvatarItem
            staticImage="/images/Avatars/Ekun_01.png"
            animatedImage="/images/Avatars/Ekun_01.gif"
            avatarName="E-KUN"
            avatarRarity="35%"
          />
          <AvatarItem
            staticImage="/images/Avatars/Ekun_02.png"
            animatedImage="/images/Avatars/Ekun_02.gif"
            avatarName="FOOTBALL KUN"
            avatarRarity="30%"
          />
          <AvatarItem
            staticImage="/images/Avatars/Ekun_03.png"
            animatedImage="/images/Avatars/Ekun_03.gif"
            avatarName="FUTURE KUN"
            avatarRarity="19%"
          />
          <AvatarItem
            staticImage="/images/Avatars/Ekun_04.png"
            animatedImage="/images/Avatars/Ekun_04.gif"
            avatarName="ROBOT KUN"
            avatarRarity="15%"
          />
          <AvatarItem
            staticImage="/images/Avatars/Ekun_05.png"
            animatedImage="/images/Avatars/Ekun_05.gif"
            avatarName="SPECIAL KUN"
            avatarRarity="1%"
          />
        </div>
      </div>
    </div>
  )
}
