import React from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import Head from 'next/head'
import { MintAvatar } from '../components/MintAvatar'
import SimpleHeader from '../components/SimpleHeader'
import { useIsMounted } from '../hooks/useIsMounted'

import Faq from '../components/Faq'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import { useMinter } from '../hooks/useMinter'
import toast, { Toaster } from 'react-hot-toast'
import { useDebounce } from 'use-debounce'
import { formatNumber } from '../utils/formatNumber'

export default function MintNft(): JSX.Element {
  const [quantity, setQuantity] = React.useState<number>(1)
  const intl = useIntl()
  const isMounted = useIsMounted()
  const router = useRouter()
  const { isConnected } = useAccount()
  const [qualityDebounced] = useDebounce(quantity, 300)

  React.useEffect(() => {
    if (!isConnected) {
      router.push('/connect')
    }
  }, [isConnected, router])

  const minter = useMinter({
    quantity: qualityDebounced,
  })

  React.useEffect(() => {
    let timeout

    if (minter.isSuccess) {
      toast.success(intl.formatMessage({ id: 'page.mint.nft.success.title' }), {
        duration: 4000,
        position: 'top-right',
      })

      timeout = setTimeout(() => {
        router.push('/my-avatars')
      }, 3e3)
    }

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minter.isSuccess])

  if (!isMounted) return null

  return (
    <>
      <Toaster
        containerStyle={{
          top: 80,
        }}
      />
      <Head>
        <title>Mint your Avatar</title>
        <meta name="description" content="KunUniverse Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-center items-center relative px-24 pt-40 pb-80 h-fit bg-mint-section">
        <SimpleHeader />
        <div className="z-20 pt-96 lg:pt-144 flex flex-col items-center justify-center">
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
          <MintAvatar
            onQuantityChange={(value) => {
              setQuantity(value)
            }}
            quantity={quantity}
            {...minter}
          />

          <div className="my-20 flex flex-col space-y-10">
            <div className="flex items-center text-black space-x-10">
              <Image
                alt="Kuniverse Logo"
                src="/images/sand-logo-circle.svg"
                layout="fixed"
                width={50}
                height={50}
              />
              {minter.isLoadingPrepare ? (
                <div>Loading price...</div>
              ) : (
                <div className="space-x-10">
                  <span className="text-3xl font-bold">
                    {formatNumber(minter.mintData.tokenPrice)}
                  </span>
                  <span className="text-xl">SAND</span>
                </div>
              )}
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
