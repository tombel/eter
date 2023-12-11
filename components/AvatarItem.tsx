import { useEffect, useState } from 'react'
import styles from '../styles/AvatarsSection.module.css'
import AvatarVideo from './AvatarVideo'

export interface AvatarItemProps {
  avatarName: string
  avatarRarity: string
  description: string
  backgroundColor: string
  videoSrc: string
  gifSrc: string
}

export default function AvatarItem({
  avatarName,
  avatarRarity,
  description,
  backgroundColor,
  videoSrc,
  gifSrc,
}: AvatarItemProps): JSX.Element {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count + 1) % 3)
    }, 2000)

    return () => clearTimeout(timer)
  })

  return (
    <div className="flex flex-col items-center group 2xl:w-[250px] lg:w-[180px] overflow-x-hidden">
      <div className="2xl:h-[300px] md:h-[240px] flex justify-center">
        <AvatarVideo videoSrc={videoSrc} gifSrc={gifSrc} />
      </div>
      <div className={styles.AvatarDescription}>
        <div
          className={`absolute left-0 right-0 bottom-full p-8 pb-20 text-white rounded-t-2xl duration-250 transition-all opacity-0 translate-y-16 group-hover:translate-y-16 group-hover:opacity-100 ${backgroundColor} bg-opacity-60`}
        >
          <span className="text-sm pointer-events-none">{description}</span>
        </div>
        <h3 className={`relative text-white w-full rounded-2xl py-2 z-10 ${backgroundColor}`}>
          {avatarName}
        </h3>
        <p className={styles.RarityBackdrop}>RARITY {avatarRarity}</p>
      </div>
    </div>
  )
}
