import { useIntl } from 'react-intl'
import FramedVideoPlayer from './FramedVideoPlayer'
import TextModule from './TextModule'

export default function SandboxMetaverseSection(): JSX.Element {
  const intl = useIntl()

  return (
    <div className="bg-[#2a0029] flex flex-wrap justify-center items-center py-80">
      <div className="w-4/5 lg:w-1/3 lg:px-60">
        <TextModule
          title={intl.formatMessage({ id: 'page.home.sandbox.metaverse.title' })}
          description={intl.formatMessage({ id: 'page.home.sandbox.metaverse.text' })}
        />
      </div>
      <div className="w-4/5 lg:w-1/3 lg:px-60">
        <FramedVideoPlayer videoSrc="/video/kuniverse-video-trailer.mp4" />
      </div>
    </div>
  )
}
