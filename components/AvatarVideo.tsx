export interface AvatarVideoProps {
  videoSrc: string
}

export default function AvatarVideo({ videoSrc }: AvatarVideoProps): JSX.Element {
  return (
    <video
      // onMouseOut={stopVideo}
      // onMouseOver={playVideo}
      // onLoadedData={playVideo}
      loop
      autoPlay
      muted
      playsInline
      style={{ width: '100%', display: 'block' }}
    >
      <source src={videoSrc} type="video/webm" />
    </video>
  )
}
