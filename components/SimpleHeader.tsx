import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LanguajeSelector from './LanguajeSelector'

function SimpleHeader(): JSX.Element {
  return (
    <div className="header-container">
      <header className="header active flex items-center h-70 py-16 fixed top-0 left-0 right-0 text-black transition-all z-50">
        <div className="container mx-auto">
          <div className="flex items-center relative justify-between md z-10">
            <div className="flex gap-14 items-center">
              <Link href="/">
                <Image
                  alt="Sandbox Logo"
                  src="/images/arrow-left.svg"
                  className="cursor-pointer"
                  layout="fixed"
                  quality={100}
                  width={32}
                  height={32}
                />
              </Link>
              <Image
                alt="Sandbox Logo"
                src="/images/sandbox-logo-white.svg"
                layout="fixed"
                quality={100}
                width={134}
                height={40}
              />
            </div>
            <div className="flex gap-12">
              <LanguajeSelector />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default SimpleHeader
