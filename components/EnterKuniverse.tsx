import { useIntl } from 'react-intl'
import FramedVideoPlayer from './FramedVideoPlayer'
import TextModule from './TextModule'
import FramedAvatar from './FramedAvatar'

export default function EnterKuniverse(): JSX.Element {
  const intl = useIntl()

  return (
    <div
      className="flex justify-center flex-wrap bg-cover w-full -mt-60"
      style={{ backgroundImage: 'url(/images/bg_enter_kuniverse.png)' }}
      id="kuniverse"
    >
      <div className="flex justify-center pt-60">
        <div className="relative">
          <div className="flex w-4/5 mt-24 md:w-full lg:max-w-[760px]">
            <FramedVideoPlayer videoSrc="/video/kuniverse-video-trailer.mp4" />
          </div>
          <img
            src="/images/Ekun_04.gif"
            className="hidden md:block h-400 absolute -bottom-20 -right-256"
          />
          <img
            src="/images/kun_hand_up.png"
            className="hidden md:block h-355 absolute -bottom-0 -left-300"
          />
        </div>
      </div>
      <div className="w-5/6 flex items-center justify-between mt-80">
        <div className="w-[45%] px-100">
          <TextModule
            title={intl.formatMessage({ id: 'page.home.enter.universe.title.one' })}
            description={intl.formatMessage({ id: 'page.home.enter.universe.description.one' })}
          />
        </div>
        <div className="w-[55%] flex justify-around items-center">
          <FramedAvatar
            imgSrc="/images/kun_framed_01.png"
            backgroundStyle="rounded-[3rem] w-200 h-200"
          />
          <FramedAvatar
            imgSrc="/images/kun_framed_01.png"
            backgroundStyle="rounded-[3rem] w-200 h-200"
          />
          <FramedAvatar
            imgSrc="/images/kun_framed_01.png"
            backgroundStyle="rounded-[3rem] w-200 h-200"
          />
        </div>
      </div>
    </div>
  )
}
