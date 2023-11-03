export interface VideoPlayerProps {
  videoSrc: string
}

export default function VideoPlayer({ videoSrc }: VideoPlayerProps): JSX.Element {
  return (
    <video
      // onMouseOut={stopVideo}
      // onMouseOver={playVideo}
      // onLoadedData={playVideo}
      // playsInline
      controls
      style={{ width: '100%', display: 'block' }}
    >
      <source src={videoSrc} type="video/mp4" />
    </video>
  )
}
