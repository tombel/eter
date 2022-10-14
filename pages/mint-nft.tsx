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
    <div className="flex w-full justify-center items-center relative py-40 h-screen bg-mint-section">
      <SimpleHeader />
      <div className="z-20 pt-144 flex flex-col items-center justify-center">
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
      </div>
    </div>
  )
}
