export interface FramedAvatarProps {
  backgroundStyle?: string
  imgStyle?: string
  imgSrc?: string
}

export default function FramedAvatar({
  backgroundStyle,
  imgSrc,
  imgStyle,
}: FramedAvatarProps): JSX.Element {
  return (
    <div
      className={`relative flex justify-center bg-gradient-to-r from-white/40 via-white via-50% to-white/40 ${backgroundStyle}`}
    >
      <img src={imgSrc} className={`${imgStyle}`} />
    </div>
  )
}
