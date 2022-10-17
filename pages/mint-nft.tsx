import React, { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { MintAvatar } from '../components/MintAvatar'
import SimpleHeader from '../components/SimpleHeader'
import { useIsMounted } from '../hooks/useIsMounted'
import Link from 'next/link'

export default function MintNft(): JSX.Element {
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
    <div className="flex w-full justify-center items-center relative py-40 h-screen bg-mint-section">
      <SimpleHeader />
      <div className="z-20 pt-96 flex flex-col items-center justify-center">
        <div className="mb-40">
          <Image
            alt="Kuniverse Logo"
            src="/images/kuniverse-logo-black.png"
            layout="fixed"
            quality={100}
            width={300}
            height={166}
          />
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
                BUY SAND
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
