export interface VideoPlayerProps {
  videoSrc: string
  posterSrc?: string
}

export default function VideoPlayer({ videoSrc, posterSrc }: VideoPlayerProps): JSX.Element {
  return (
    <video
      // onMouseOut={stopVideo}
      // onMouseOver={playVideo}
      // onLoadedData={playVideo}
      // playsInline
      controls
      style={{ width: '100%', display: 'block' }}
      className="z-10"
      poster={posterSrc}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  )
}
