import VideoPlayer from './VideoPlayer'

export interface FramedVideoPlayerProps {
  videoSrc: string
  posterSrc?: string
}

export default function FramedVideoPlayer({
  videoSrc,
  posterSrc,
}: FramedVideoPlayerProps): JSX.Element {
  return (
    <div className="relative flex w-full xl:w-[600px] lg:max-w-[650px]">
      <img
        src="/images/video_player_left_border.png"
        className="absolute max-h-full -translate-x-1/2 left-0 -top-4 z-20"
      />
      <VideoPlayer videoSrc={videoSrc} posterSrc={posterSrc} />
      <img
        src="/images/video_player_right_border.png"
        className="absolute max-h-full translate-y-2 translate-x-1/2 right-0 -top-6 z-20"
      />
    </div>
  )
}
