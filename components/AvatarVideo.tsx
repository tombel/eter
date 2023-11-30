import { isSafari } from 'react-device-detect'

export interface AvatarVideoProps {
  gifSrc: string[]
  videoSrc: string[]
  count: number
}

export default function AvatarVideo({ videoSrc, gifSrc, count }: AvatarVideoProps): JSX.Element {
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
            style={{ width: '100%', display: count == 0 ? 'block' : 'none' }}
          >
            <source src={videoSrc[0]} type="video/webm" />
          </video>
          <video
            // onMouseOut={stopVideo}
            // onMouseOver={playVideo}
            // onLoadedData={playVideo}
            loop
            autoPlay
            muted
            playsInline
            style={{ width: '100%', display: count == 1 ? 'block' : 'none' }}
          >
            <source src={videoSrc[1]} type="video/webm" />
          </video>
          <video
            // onMouseOut={stopVideo}
            // onMouseOver={playVideo}
            // onLoadedData={playVideo}
            loop
            autoPlay
            muted
            playsInline
            style={{ width: '100%', display: count == 2 ? 'block' : 'none' }}
          >
            <source src={videoSrc[2]} type="video/webm" />
          </video>
        </>
      ) : (
        <>
          <img
            src={gifSrc[0]}
            className="h-[35vh]"
            style={{ display: count == 0 ? 'block' : 'none' }}
          />
          <img
            src={gifSrc[1]}
            className="h-[35vh]"
            style={{ display: count == 1 ? 'block' : 'none' }}
          />
          <img
            src={gifSrc[2]}
            className="h-[35vh]"
            style={{ display: count == 2 ? 'block' : 'none' }}
          />
        </>
      )}
    </>
  )
}
