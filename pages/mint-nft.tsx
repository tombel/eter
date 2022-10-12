import React, { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { MintAvatar } from '../components/MintAvatar'
import SimpleHeader from '../components/SimpleHeader'
import { useIsMounted } from '../hooks/useIsMounted'

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
    <div className="flex w-full justify-center items-center relative py-40 bg-grey-700 h-screen">
      <SimpleHeader />
      <div className="w-full h-full absolute top-0 left-0 pt-144 z-10 bg-radial-purple">
        <Image
          alt="Kuniverse Logo"
          src="/images/bg_connect_wallet.png"
          layout="fill"
          quality={100}
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="z-20 flex flex-col items-center justify-center mt-20">
        <Image
          alt="Kuniverse Logo"
          src="/images/kuniverse-logo-shadow.png"
          layout="fixed"
          quality={100}
          width={439}
          height={223}
        />
        <MintAvatar />
      </div>
    </div>
  )
}
