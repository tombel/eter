import { useIntl } from 'react-intl'
import { v4 as uuidv4 } from 'uuid'
import FramedVideoPlayer from './FramedVideoPlayer'
import dynamic from 'next/dynamic'

const VideoCarousel = dynamic(() => import('./VideoCarousel'), {
  ssr: false,
})

export default function NewUserSection(): JSX.Element {
  const intl = useIntl()
  const slides = [
    {
      key: uuidv4(),
      content: (
        <FramedVideoPlayer videoSrc="/video/kuniverse-video-trailer.mp4" />
        // <img src="/images/kun_arms_crossed.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <FramedVideoPlayer videoSrc="/video/kuniverse-video-trailer.mp4" />
        // <img src="/images/kun_arms_crossed.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <FramedVideoPlayer videoSrc="/video/kuniverse-video-trailer.mp4" />
        // <img src="/images/kun_arms_crossed.png" />
      ),
    },
  ]

  return (
    <div className="bg-gradient-to-b from-[#003787] from-90% to-[#0049A0] w-full flex flex-wrap justify-center items-center">
      <h3 className="w-full font-base font-bold italic text-2xl md:text-4xl text-center uppercase text-[#80CFFF] py-30">
        {intl.formatMessage({ id: 'page.home.new.user.title' })}
      </h3>
      <p className="w-1/2 font-base font-semibold text-xl text-[#80CFFF] text-center text-justify mb-60">
        {intl.formatMessage({ id: 'page.home.new.user.text' })}
      </p>
      <div className="w-full">
        <VideoCarousel
          slides={slides}
          height="600px"
          width="80%"
          margin="0 auto"
          offset={2}
          showControls={true}
        />
      </div>
    </div>
  )
}
