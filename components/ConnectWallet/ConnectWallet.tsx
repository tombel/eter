import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAccount, useConnect } from 'wagmi'
import type { Connector } from 'wagmi'
import { useIsMounted } from '../../hooks/useIsMounted'

// please delete those components 👇🏻
// ------------------------------
function LoadingIcon(): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      className="mb-12 w-24 h-24 text-primary-color animate-spin dark:text-gray-600 fill-white"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  )
}

function Button(
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLButtonElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>,
): JSX.Element {
  return (
    <button
      className="bg-grey-100 text-base text-black font-semibold py-6 px-6 rounded shadow w-full"
      {...props}
    />
  )
}

function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="w-[500px] rounded-xl overflow-hidden shadow-lg bg-white p-12">
      <p className="font-base text-lg	text-grey-200 font-medium text-center mb-32 mt-20">
        CONNECT YOUR WALLET
      </p>
      {children}
    </div>
  )
}
// ------------------------------
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
            WALLET IS BEEING VERIFY
          </h1>
          <p className="text-black">Please, wait while redirect</p>
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
          <h1 className="text-warning font-semibold text-xl mt-12">SOMETHING WENT WONG</h1>
          <p className="text-warning mb-20">The Application has encountered an unknown error</p>
          <Button
            className="bg-black text-base text-white font-semibold py-6 px-12 rounded shadow"
            onClick={() => reset()}
          >
            Try Again
          </Button>
        </div>
      </Card>
    )

  return (
    <Card>
      <div className="flex flex-col space-y-8">
        {!isConnected
          ? connectors
              .filter((x: Connector) => x.ready && x.id !== connector?.id)
              .map((x: Connector) => (
                <Button key={x.id} onClick={() => connect({ connector: x })}>
                  {x.name}
                </Button>
              ))
          : null}
      </div>
      {error && <div className="text-black my-3">{error.message}</div>}
    </Card>
  )
}
