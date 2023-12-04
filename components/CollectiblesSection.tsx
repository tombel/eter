import React from 'react'
import { useIntl } from 'react-intl'
import TextModule from './TextModule'
import FramedVideoPlayer from './FramedVideoPlayer'
import CustomButton from './Button'
import Link from 'next/link'
import CollectiblesCarousel from './CollectiblesCarrousel'

export default function CollectiblesSection(): JSX.Element {
  const intl = useIntl()

  return (
    <div className="flex flex-wrap justify-center items-center bg-[#2a0029]">
      <div className="w-4/5 lg:w-5/6 flex justify-center items-center flex-wrap my-100 lg:my-128">
        <div className="w-full lg:w-1/2 flex justify-center">
          <FramedVideoPlayer
            videoSrc="/video/kuniverse-video-trailer.mp4"
            posterSrc="/images/trailer_poster_2.png"
          />
        </div>
        <div className="lg:w-1/2 flex flex-wrap justify-center items-center pt-60 lg:pt-0 lg:px-80">
          <TextModule
            title={intl.formatMessage({ id: 'page.home.enter.universe.title.two' })}
            description={intl.formatMessage({ id: 'page.home.enter.universe.description.two' })}
            description2={intl.formatMessage({ id: 'page.home.enter.universe.description.three' })}
          />
          <CustomButton className="theme-collectibles">
            <Link href="/mint-nft">
              {intl.formatMessage({ id: 'page.home.collectibles.get.your.avatar' })}
            </Link>
          </CustomButton>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-wrap border-solid border-y-4 border-pink shadow-glow pb-30 lg:pb-0">
        <h2 className="font-base font-bold italic text-2xl md:text-4xl uppercase text-pink my-30">
          {intl.formatMessage({ id: 'page.home.collectibles.title' })}
        </h2>
        <CollectiblesCarousel />
        <CustomButton className="theme-secondary" style={{ pointerEvents: 'none' }}>
          <Link href="">{intl.formatMessage({ id: 'page.home.collectibles.marketplace' })}</Link>
        </CustomButton>
      </div>
    </div>
  )
}
