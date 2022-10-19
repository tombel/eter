import AvatarItem from './AvatarItem'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/AvatarsSection.module.css'

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
        <Link href="https://www.sandbox.game/en/">
          <a target="_blank" className="cursor-pointer">
            <Image
              alt="Sandbox Logo"
              src="/images/sandbox-logo-white.svg"
              layout="fixed"
              quality={100}
              width={147}
              height={44}
            />
          </a>
        </Link>
      </div>

      <div className="container text-center pb-24 lg:pb-0">
        <div className={styles.AvatarsSectionContent}>
          <AvatarItem
            staticImage="/images/Avatars/Ekun_01_static.gif"
            animatedImage="/images/Avatars/Ekun_01.gif"
            avatarName="FOOTBALL KUN"
            avatarRarity="35%"
            imageWidth="353"
            imageHeight="500"
            theme="ekun-01"
          />
          <AvatarItem
            staticImage="/images/Avatars/Ekun_02_static.gif"
            animatedImage="/images/Avatars/Ekun_02.gif"
            avatarName="E-KUN"
            avatarRarity="30%"
            imageWidth="334"
            imageHeight="475"
            theme="ekun-02"
          />
          <AvatarItem
            staticImage="/images/Avatars/Ekun_03_static.gif"
            animatedImage="/images/Avatars/Ekun_03.gif"
            avatarName="FUTURE KUN"
            avatarRarity="19%"
            imageWidth="321"
            imageHeight="475"
            theme="ekun-03"
          />
          <AvatarItem
            staticImage="/images/Avatars/Ekun_04_static.gif"
            animatedImage="/images/Avatars/Ekun_04.gif"
            avatarName="ROBOT KUN"
            avatarRarity="15%"
            imageWidth="244"
            imageHeight="475"
            theme="ekun-04"
          />
          <AvatarItem
            staticImage="/images/Avatars/Ekun_05_static.gif"
            animatedImage="/images/Avatars/Ekun_05.gif"
            avatarName="SPECIAL KUN"
            avatarRarity="1%"
            imageWidth="257"
            imageHeight="475"
            theme="ekun-05"
          />
        </div>
        <div className="flex relative items-center justify-center mx-auto mt-24 max-w-[650px] min-h-[250px] md:min-h-[437px] lg:hidden">
          <Image
            alt="Sandbox Logo"
            src="/images/avatars-group-responsive.png"
            quality={100}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  )
}
