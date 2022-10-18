import React, { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { MintAvatar } from '../components/MintAvatar'
import SimpleHeader from '../components/SimpleHeader'
import { useIsMounted } from '../hooks/useIsMounted'

import Faq from '../components/Faq'
import Brands from '../components/Brands'
import Footer from '../components/Footer'

export default function MintNft(): JSX.Element {
  const intl = useIntl()
  const isMounted = useIsMounted()
  const router = useRouter()
  const { isConnected } = useAccount()

  useEffect(() => {
    if (!isConnected) {
      router.push('/connect')
    }
  }, [isConnected, router])

  if (!isMounted) return null

  return (
    <>
      <div className="flex w-full justify-center items-center relative px-24 py-40 h-screen bg-mint-section">
        <SimpleHeader />
        <div className="z-20 pt-96 flex flex-col items-center justify-center">
          <div className="mb-40">
            <div className="relative w-[250px] h-[138px] md:w-[300px] md:h-[166px]">
              <Image
                alt="Kuniverse Logo"
                src="/images/kuniverse-logo-black.png"
                quality={100}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <MintAvatar />

          <div className="my-20 flex flex-col space-y-10">
            <div className="flex items-center text-black space-x-10">
              <Image
                alt="Kuniverse Logo"
                src="/images/sand-logo-circle.svg"
                layout="fixed"
                width={50}
                height={50}
              />
              <div className="space-x-10">
                <span className="text-3xl font-bold">100</span>
                <span className="text-xl">SAND</span>
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <Link href="https://www.binance.com/en/trade/SAND_BTC">
                <a className="bg-[#febf36] text-lg text-black font-bold py-8 px-24 rounded-full">
                  {intl.formatMessage({ id: 'page.mint.buy.sand' })}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Faq />
      <Brands />
      <Footer />
    </>
  )
}
