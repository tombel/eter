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
      <div className="flex flex-col items-center gap-24 pt-96 lg:pt-128 2xl:pt-168">
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
        <div className="relative w-full h-[5vh] 2xl:mt-20">
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

      <div className="container text-center pb-24 lg:pb-0 2xl:mt-50">
        <div className={styles.AvatarsSectionContent}>
          <AvatarItem
            avatarName="ROBOT"
            avatarRarity="15%"
            backgroundColor="bg-[#6b0c80]"
            videoSrc="/video/robot-01.webm"
            gifSrc="/images/avatars/eKun_01.gif"
          />
          <AvatarItem
            avatarName="E-KUN"
            avatarRarity="30%"
            backgroundColor="bg-[#A509A5]"
            videoSrc="/video/e-kun-01.webm"
            gifSrc="/images/eKun_02.gif"
          />
          <AvatarItem
            avatarName="SPECIAL"
            avatarRarity="1%"
            backgroundColor="bg-[#E76EFF]"
            videoSrc="/video/special-01.webm"
            gifSrc="/images/eKun_03.gif"
          />
          <AvatarItem
            avatarName="FOOTBALL"
            avatarRarity="35%"
            backgroundColor="bg-[#39B3FF]"
            videoSrc="/video/futbol-01.webm"
            gifSrc="/images/eKun_04.gif"
          />
          <AvatarItem
            avatarName="FUTURE"
            avatarRarity="19%"
            backgroundColor="bg-[#2463FF]"
            videoSrc="/video/future-01.webm"
            gifSrc="/images/eKun_05.gif"
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
        <CustomButton className="theme-secondary">
          <Link href="/mint-nft">{intl.formatMessage({ id: 'header.menu.buy.your.avatar' })}</Link>
        </CustomButton>
      </div>
    </div>
  )
}
