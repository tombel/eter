import { isSafari } from 'react-device-detect'

export interface AvatarVideoProps {
  gifSrc: string
  videoSrc: string
}

export default function AvatarVideo({ videoSrc, gifSrc }: AvatarVideoProps): JSX.Element {
  return (
    <>
      {!isSafari ? (
        <>
          <video
            // onMouseOut={stopVideo}
            // onMouseOver={playVideo}
            // onLoadedData={playVideo}
            loop
            autoPlay
            muted
            playsInline
            className="max-w-none"
          >
            <source src={videoSrc} type="video/webm" />
          </video>
        </>
      ) : (
        <>
          <img src={gifSrc} className="h-[30vh]" />
        </>
      )}
    </>
  )
}
