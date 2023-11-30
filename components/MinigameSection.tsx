import React from 'react'
import { useIntl } from 'react-intl'
import TextModule from './TextModule'
import CustomButton from './Button'
import Link from 'next/link'

export default function MinigameSection(): JSX.Element {
  const intl = useIntl()

  return (
    <div className="flex flex-wrap justify-center items-center bg-cover bg-gradient-to-b from-[#2a0029] via-[#3388c8] via-50% to-[#2a0029]">
      <div className="relative w-4/5 lg:w-5/6 flex justify-center items-center flex-wrap my-40 lg:my-100">
        <div className="lg:w-1/2 flex flex-wrap justify-center items-center pt-60 lg:pt-0 lg:px-80">
          <TextModule
            title={intl.formatMessage({ id: 'page.home.minigame.title' })}
            description={intl.formatMessage({ id: 'page.home.minigame.description.one' })}
            description2={intl.formatMessage({ id: 'page.home.minigame.description.two' })}
          />
          <CustomButton className="theme-collectibles">
            <Link href="/mint-nft">
              {intl.formatMessage({ id: 'page.home.collectibles.get.your.avatar' })}
            </Link>
          </CustomButton>
        </div>
        <img src="/images/mcdonalds_banner.png" className="w-1/2 p-60 hidden lg:block" />
        <img
          src="/images/mc_obelisco.png"
          className="absolute w-1/4 -bottom-40 -translate-x-[60px] hidden lg:block"
        />
      </div>
    </div>
  )
}
