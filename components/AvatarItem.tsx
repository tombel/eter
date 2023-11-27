import styles from '../styles/AvatarsSection.module.css'
import AvatarVideo from './AvatarVideo'
import { isSafari } from 'react-device-detect'

export interface AvatarItemProps {
  avatarName: string
  avatarRarity: string
  backgroundColor: string
  videoSrc: string
  gifSrc: string
}

export default function AvatarItem({
  avatarName,
  avatarRarity,
  backgroundColor,
  videoSrc,
  gifSrc,
}: AvatarItemProps): JSX.Element {
  return (
    <div className="flex flex-col items-center lg:w-[180px] 2xl:w-[200px] group">
      <div className="2xl:w-[380px] md:w-[300px] flex justify-center">
        {/* <div className={classNames(styles.Avatar, styles[theme])}> */}
        {/* <Image
            alt="Discord Logo"
            src={staticImage}
            className={styles.ImageStatic}
            layout="fill"
            quality={100}
            objectFit="cover"
          /> */}
        {/* <Image
            alt="Discord Logo"
            src={animatedImage}
            className={styles.ImageGif}
            layout="fixed"
            quality={100}
            width={imageWidth}
            height={imageHeight}
          /> */}
        {!isSafari ? (
          <AvatarVideo videoSrc={videoSrc} />
        ) : (
          <img src={gifSrc} className="h-[35vh]" />
        )}
        {/* </div> */}
      </div>
      <div className={styles.AvatarDescription}>
        <div
          className={`absolute left-0 right-0 bottom-full p-8 pb-20 text-white rounded-t-2xl duration-250 transition-all opacity-0 translate-y-16 group-hover:translate-y-16 group-hover:opacity-100 ${backgroundColor} bg-opacity-60`}
        >
          <span className="text-sm pointer-events-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </span>
        </div>
        <h3 className={`relative text-white w-full rounded-2xl py-2 z-10 ${backgroundColor}`}>
          {avatarName}
        </h3>
        <p>RARITY {avatarRarity}</p>
      </div>
    </div>
  )
}
