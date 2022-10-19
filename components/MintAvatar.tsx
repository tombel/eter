import React from 'react'
import Image from 'next/image'

import AvatarSelector from './AvatarSelector'
import LoadingIcon from './LoadingIcon'
import { useDisconnect } from 'wagmi'
import { useIntl } from 'react-intl'

function Card({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="bg-white rounded-3xl shadow-lg w-full md:w-[500px] min-h-[300px] font-base p-20 flex flex-col items-center">
      {children}
    </div>
  )
}

export interface MintAvatarProps {
  mint: () => void
  allowedToMint: number
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  isPrepareError: boolean
  isReady: boolean
  isAddressNotQualify: boolean
  isLoadingPrepare: boolean
  reset: () => void
  onQuantityChange: (value) => void
  quantity: number
  enoughFounds: boolean
}

export function MintAvatar({
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
  onQuantityChange,
  quantity,
  enoughFounds,
}: MintAvatarProps): JSX.Element {
  const intl = useIntl()
  const { disconnect } = useDisconnect()

  if (isLoadingPrepare)
    return (
      <Card>
        <div className="flex flex-1 items-center h-full">
          <div className="flex flex-1 flex-col items-center h-full">
            <LoadingIcon />
            <p className="text-black font-base mb-20">
              {intl.formatMessage({ id: 'page.mint.nft.wait.prepare' })}
            </p>
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
            <p className="text-black text-center font-base mb-20">
              {intl.formatMessage({ id: 'page.mint.nft.transaction' })}
            </p>
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
              {intl.formatMessage({ id: 'page.mint.nft.success.title' })}
            </h1>
            <p className="text-black text-center font-base mb-20">
              {intl.formatMessage({ id: 'page.mint.nft.success.text' })}
            </p>
          </div>
        </div>
      </Card>
    )

  if (isAddressNotQualify)
    return (
      <Card>
        <div className="flex flex-1 items-center h-full">
          <div className="flex flex-col items-center font-base mb-20">
            <h1 className="text-black font-semibold text-xl mt-12">
              {intl.formatMessage({ id: 'page.mint.nft.not.whitelisted.title' })}
            </h1>
            <p className="text-black mb-20 text-center">
              {intl.formatMessage({ id: 'page.mint.nft.not.whitelisted.text' })}
            </p>
            <button className="theme-primary" onClick={() => reset()}>
              {intl.formatMessage({ id: 'page.mint.nft.not.whitelisted.button' })}
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
            <h1 className="text-black font-semibold text-xl mt-12">
              {intl.formatMessage({ id: 'page.mint.nft.not.available.title' })}
            </h1>
            <p className="text-black mb-20 text-center">
              {intl.formatMessage({ id: 'page.mint.nft.not.available.text' })}
            </p>
            <button className="theme-primary" onClick={() => disconnect()}>
              {intl.formatMessage({ id: 'page.mint.nft.not.whitelisted.button' })}
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
            <h1 className="text-warning font-semibold text-xl mt-12">
              {intl.formatMessage({ id: 'general.error.title' })}
            </h1>
            <p className="text-warning mb-20">{intl.formatMessage({ id: 'general.error.text' })}</p>
            <button className="theme-primary" onClick={() => reset()}>
              {intl.formatMessage({ id: 'page.connect.wallet.try.again' })}
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
          <h1 className="text-primary-color-500 font-semibold text-xl text-center">
            {intl.formatMessage({ id: 'page.mint.nft.connected' })}
          </h1>
          <Image
            alt="Avatar"
            src="/images/Avatars/Ekun_02_static.gif"
            layout="fixed"
            quality={100}
            width={60}
            height={80}
          />
          <p className="text-black text-center my-12">
            {intl.formatMessage({ id: 'page.mint.nft.connected.how.many' })}
          </p>
          <AvatarSelector
            max={allowedToMint}
            quantity={quantity}
            onChange={(value) => {
              onQuantityChange(Number(value.value))
            }}
            disabled={!isReady}
          />

          {!enoughFounds ? (
            <p className="text-warning text-sm text-center mt-5">
              {intl.formatMessage({ id: 'page.mint.nft.not.enough.sand.founds' })}
            </p>
          ) : null}
          <button
            className="theme-primary mt-12 w-[200px]"
            type="submit"
            disabled={!isReady || !enoughFounds}
          >
            {intl.formatMessage({ id: 'page.mint.nft.mint.now' })}
          </button>
        </div>
      </form>
    </Card>
  )
}
