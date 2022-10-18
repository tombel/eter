import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLongLeftIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { useAccount, useDisconnect } from 'wagmi'
import LanguajeSelector from './LanguajeSelector'

function SimpleHeader(): JSX.Element {
  const { isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  return (
    <div className="header-container">
      <header className="header active flex items-center h-70 px-8 py-16 md:p-16 fixed top-0 left-0 right-0 text-black transition-all z-50">
        <div className="container mx-auto">
          <div className="flex items-center relative justify-between md z-10">
            <div className="flex gap-12 items-center">
              <Link href="/">
                <a>
                  <ArrowLongLeftIcon className="h-24 w-24 text-white" aria-hidden="true" />
                </a>
              </Link>
              <div className="relative w-[125px] h-[38px] md:w-[134px] md:h-[40px]">
                <Image
                  alt="Sandbox Logo"
                  src="/images/sandbox-logo-white.svg"
                  quality={100}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex gap-12">
              <LanguajeSelector />
              {isConnected ? (
                <button
                  className="theme-primary flex gap-4 items-center"
                  onClick={() => disconnect()}
                >
                  <p className="hidden md:block">Logout</p>
                  <ArrowRightOnRectangleIcon
                    className="h-24 w-24 text-white block md:hidden"
                    aria-hidden="true"
                  />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default SimpleHeader
