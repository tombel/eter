import AvatarItem from './AvatarItem'
import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './Button'
import { useIntl } from 'react-intl'
import styles from '../styles/AvatarsSection.module.css'

export default function AvatarsSection(): JSX.Element {
  const intl = useIntl()
  return (
    <div className={styles.AvatarsSection}>
      <div className={styles.logo}>
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
        <div style={{ width: '100%', height: '5vh', position: 'relative' }}>
          <Image
            alt="Kuniverse Logo"
            src="/images/logo.png"
            // layout="fixed"
            quality={100}
            // width={491}
            // height={40}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      <div className="container text-center pb-24 lg:pb-0">
        <div className={styles.AvatarsSectionContent}>
          <AvatarItem
            avatarName="ROBOT"
            avatarRarity="15%"
            backgroundColor="bg-[#6b0c80]"
            videoSrc="/video/robot-01.webm"
          />
          <AvatarItem
            avatarName="E-KUN"
            avatarRarity="30%"
            backgroundColor="bg-[#A509A5]"
            videoSrc="/video/e-kun-01.webm"
          />
          <AvatarItem
            avatarName="SPECIAL"
            avatarRarity="1%"
            backgroundColor="bg-[#E76EFF]"
            videoSrc="/video/special-01.webm"
          />
          <AvatarItem
            avatarName="FOOTBALL"
            avatarRarity="35%"
            backgroundColor="bg-[#39B3FF]"
            videoSrc="/video/futbol-01.webm"
          />
          <AvatarItem
            avatarName="FUTURE"
            avatarRarity="19%"
            backgroundColor="bg-[#2463FF]"
            videoSrc="/video/future-01.webm"
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
        <CustomButton className="theme-secondary-lg">
          <Link href="/mint-nft">{intl.formatMessage({ id: 'header.menu.buy.your.avatar' })}</Link>
        </CustomButton>
      </div>
    </div>
  )
}
