import React, { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'

import { MintAvatar } from '../components/MintAvatar/MintAvatar'

export default function Mint(): JSX.Element {
  const router = useRouter()
  const { isConnected } = useAccount()
  useEffect(() => {
    if (!isConnected) {
      router.push('/connect')
    }
  }, [isConnected, router])

  return (
    <div className="flex w-full justify-center h-screen items-center">
      <MintAvatar />
    </div>
  )
}
