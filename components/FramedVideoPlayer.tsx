import VideoPlayer from './VideoPlayer'

export interface FramedVideoPlayerProps {
  videoSrc: string
}

export default function FramedVideoPlayer({ videoSrc }: FramedVideoPlayerProps): JSX.Element {
  return (
    <div className="relative flex md:w-full lg:max-w-[650px]">
      <img src="/images/video_player_left_border.png" className="translate-x-1/2 left-0 -top-25" />
      <VideoPlayer videoSrc={videoSrc} />
      <img
        src="/images/video_player_right_border.png"
        className="translate-y-2 -translate-x-1/2 right-0 -top-25"
      />
    </div>
  )
}
