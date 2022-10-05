import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAccount, useConnect } from 'wagmi'
import type { Connector } from 'wagmi'
import { useIsMounted } from '../../hooks/useIsMounted'
import LoadingIcon from '../LoadingIcon'
import CustomButton from '../CustomButton'

import styles from '../../styles/ConnectWallet.module.css'

function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="bg-white rounded-3xl shadow-lg w-[500px] min-h-[300px] font-base p-20 flex flex-col items-center">
      <p className="font-base text-lg	text-grey-200 font-medium text-center mb-32 mt-20">
        CONNECT YOUR WALLET
      </p>
      {children}
    </div>
  )
}

function getIcon(id: string): string {
  const iconsMap = [
    {
      id: 'metaMask',
      url: '/images/metamask.svg',
    },
    {
      id: 'walletConnect',
      url: '/images/walletconnect.svg',
    },
    {
      id: 'coinbaseWallet',
      url: '/images/coinbase.svg',
    },
  ]

  const found = iconsMap.find((x) => x.id === id)
  return found ? found.url : ''
}

export function ConnectWallet(): JSX.Element {
  const isMounted = useIsMounted()
  const router = useRouter()
  const { connector, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, reset } = useConnect()

  useEffect(() => {
    let timeout

    if (isConnected) {
      timeout = setTimeout(() => {
        router.push('/')
      }, 5e3)
    }

    return () => clearTimeout(timeout)
  }, [isConnected, router])

  if (!isMounted) return null

  if (isLoading)
    return (
      <Card>
        <div className="flex flex-col items-center">
          <LoadingIcon />
          <p className="text-black font-base mb-20">Sign in...</p>
        </div>
      </Card>
    )

  if (isConnected)
    return (
      <Card>
        <div className="flex flex-col items-center font-base mb-20">
          <Image
            alt="Wallet fails"
            src="/images/wallet-check.svg"
            layout="fixed"
            quality={100}
            width={40}
            height={40}
          />
          <h1 className="text-primary-color font-semibold text-xl mt-12">
            WALLET IS BEING VERIFIED
          </h1>
          <p className="text-black">Please wait while you are redirected</p>
        </div>
      </Card>
    )

  if (error)
    return (
      <Card>
        <div className="flex flex-col items-center font-base mb-20">
          <Image
            alt="Wallet fails"
            src="/images/wallet-failed.svg"
            layout="fixed"
            quality={100}
            width={40}
            height={40}
          />
          <h1 className="text-warning font-semibold text-xl mt-12">SOMETHING WENT WRONG</h1>
          <p className="text-warning mb-20">The Application has encountered an unknown error</p>
          <CustomButton className="theme-primary" onClick={() => reset()}>
            Try Again
          </CustomButton>
        </div>
      </Card>
    )

  return (
    <Card>
      <div className="flex flex-col w-full space-y-8">
        {!isConnected
          ? connectors
              .filter((x: Connector) => x.ready && x.id !== connector?.id)
              .map((x: Connector) => (
                <CustomButton key={x.id} onClick={() => connect({ connector: x })}>
                  <div className="bg-grey-100 text-base text-black font-semibold rounded shadow w-full flex gap-14 items-center">
                    <div className={styles.iconContainer}>
                      <Image alt={x.name} src={getIcon(x.id)} width={30} height={30} />
                    </div>
                    <p className="">{x.name}</p>
                  </div>
                </CustomButton>
              ))
          : null}
      </div>
      {error && <div className="text-black my-3">{error.message}</div>}
    </Card>
  )
}
