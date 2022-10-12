import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMinter } from '../hooks/useMinter'
import AvatarSelector from './AvatarSelector'
import LoadingIcon from './LoadingIcon'

function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="bg-white rounded-3xl shadow-lg w-[500px] min-h-[300px] font-base p-20 flex flex-col items-center">
      {children}
    </div>
  )
}

export function MintAvatar(): JSX.Element {
  const router = useRouter()
  const [quantity, setQuantity] = React.useState<number>(1)
  const {
    mint,
    allowedToMint,
    isLoading,
    isSuccess,
    isError,
    isPrepareError,
    isReady,
    isAddressNotQualify,
    isLoadingPrepare,
    reset,
  } = useMinter({
    quantity,
  })

  React.useEffect(() => {
    let timeout

    if (isSuccess) {
      timeout = setTimeout(() => {
        router.push('/my-avatars')
      }, 3e3)
    }

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  if (isLoadingPrepare)
    return (
      <Card>
        <div className="flex flex-1 items-center h-full">
          <div className="flex flex-1 flex-col items-center h-full">
            <LoadingIcon />
            <p className="text-black font-base mb-20">Wait until we prepare your wallet</p>
          </div>
        </div>
      </Card>
    )

  if (isLoading)
    return (
      <Card>
        <div className="flex flex-1 items-center h-full">
          <div className="flex flex-1 flex-col items-center h-full">
            <LoadingIcon />
            <p className="text-black font-base mb-20">Your transaction is being processed.</p>
          </div>
        </div>
      </Card>
    )

  if (isSuccess)
    return (
      <Card>
        <div className="flex flex-1 items-center h-full">
          <div className="flex flex-1 flex-col items-center">
            <h1 className="text-primary-color font-semibold text-xl text-center">
              Successfully minted your NFT!
            </h1>
            <p className="text-black font-base mb-20">Please wait while you are redirected</p>
          </div>
        </div>
      </Card>
    )

  if (isAddressNotQualify)
    return (
      <Card>
        <div className="flex flex-1 items-center h-full">
          <div className="flex flex-col items-center font-base mb-20">
            <h1 className="text-black font-semibold text-xl mt-12">NOT WHITELISTED</h1>
            <p className="text-black mb-20">
              Your connected wallet is not in the welcome list. Make sure to be connected with the
              correct wallet.
            </p>
            <button className="theme-primary" onClick={() => reset()}>
              Reconnect
            </button>
          </div>
        </div>
      </Card>
    )

  if (allowedToMint == 0)
    return (
      <Card>
        <div className="flex flex-1 items-center h-full">
          <div className="flex flex-col items-center font-base mb-20">
            <h1 className="text-black font-semibold text-xl mt-12">NOT AVAILABLE</h1>
            <p className="text-black mb-20">
              Your connected wallet is not allowed to mint more avatars.
            </p>
            <button className="theme-primary" onClick={() => reset()}>
              Try again
            </button>
          </div>
        </div>
      </Card>
    )

  if (isError || isPrepareError)
    return (
      <Card>
        <div className="flex flex-1 items-center h-full">
          <div className="flex flex-col items-center font-base mb-20">
            <Image
              alt="Mint fails"
              src="/images/wallet-failed.svg"
              layout="fixed"
              quality={100}
              width={40}
              height={40}
            />
            <h1 className="text-warning font-semibold text-xl mt-12">SOMETHING WENT WRONG</h1>
            <p className="text-warning mb-20">The Application has encountered an unknown error</p>
            <button className="theme-primary" onClick={() => reset()}>
              Try Again
            </button>
          </div>
        </div>
      </Card>
    )

  return (
    <Card>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          mint?.()
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-primary-color font-semibold text-xl text-center">
            YOUR WALLET IS CONNECTED!
          </h1>
          <Image
            alt="Kuniverse Logo"
            src="/images/Avatars/Ekun_02.png"
            layout="fixed"
            quality={100}
            width={80}
            height={80}
          />
          <p className="text-black text-center my-12">How many avatars do you want?</p>
          <AvatarSelector
            max={allowedToMint}
            onChange={(value) => {
              setQuantity(Number(value.value))
            }}
            disabled={!isReady}
          />
          <button className="theme-primary mt-12 w-[200px]" type="submit" disabled={!isReady}>
            Mint Now
          </button>
        </div>
      </form>
    </Card>
  )
}
