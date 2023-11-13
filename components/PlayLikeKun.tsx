import { useIntl } from 'react-intl'

export default function PlayLikeKun(): JSX.Element {
  const intl = useIntl()

  return (
    <div
      className="-mt-2 w-full relative flex justify-center items-center bg-no-repeat bg-top h-[75vh] py-20"
      style={{ backgroundImage: 'url(/images/bg_9320_avatars.png)', backgroundSize: '100% 100%' }}
    >
      <div
        className="w-[98%] h-160 bg-center bg-contain absolute -top-100"
        style={{ backgroundImage: 'url(/images/transition_1.png)' }}
      ></div>
      <div className="flex relative flex-wrap justify-center items-start w-full md:w-3/5 rounded-[5rem] bg-gradient-to-r from-white/30 via-[#003787]/60 via-50% to-white/30">
        <div className="flex justify-center items-center my-30 w-full">
          <img src="/images/9320.png" />
          <h3 className="font-base font-bold text-2xl xl:text-4xl text-white ml-20">AVATARS</h3>
        </div>
        <h3 className="font-base font-bold italic text-2xl xl:text-3xl text-white w-full text-center mb-40">
          {intl.formatMessage({ id: 'page.home.play.like.a.kun.title' })}
        </h3>
        <p className="font-base font-semibold text-xl text-white w-full text-center md:mx-200 mb-20">
          {intl.formatMessage({ id: 'page.home.play.like.a.kun.text.one' })}
        </p>
        <p className="font-base font-semibold text-xl text-white w-full text-center md:mx-200 mb-20">
          {intl.formatMessage({ id: 'page.home.play.like.a.kun.text.two' })}
        </p>
        <p className="font-base font-semibold text-xl text-white w-full text-center md:mx-200 mb-60">
          {intl.formatMessage({ id: 'page.home.play.like.a.kun.text.three' })}
        </p>
        <img className="absolute bottom-0 -left-60" src="/images/kun_arms_crossed.png" />
      </div>
    </div>
  )
}
