import React, { useState } from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import LanguajeSelector from './LanguajeSelector'
import CustomButton from './Button'
import SandboxIcon from './SandboxIcon'

function Header(): JSX.Element {
  const intl = useIntl()
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <div className="header-container">
      <header
        className={`header flex items-center h-70 lg:h-96 py-16 fixed top-0 left-0 right-0 text-black transition-all z-50 ${
          mobileMenu ? 'active-white' : 'active'
        }`}
      >
        <div className="container xl:w-2/3 2xl:w-1/2">
          {/* Mobile menu */}
          <nav className={`mobile-main-nav z-0 lg:hidden ${mobileMenu ? 'active' : ''}`}>
            <div className="w-full">
              <ul className="flex flex-col items-center w-full justify-center lg:flex-row px-32">
                <li className="block w-full">
                  <Link
                    href="/"
                    //</li>onClick={() => setMobileMenu(false)}
                  >
                    <a className="main-nav-link">
                      {intl.formatMessage({ id: 'header.menu.home' })}
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link
                    href="/#kuniverse"
                    //</li>onClick={() => setMobileMenu(false)}
                  >
                    <a className="main-nav-link">
                      {intl.formatMessage({ id: 'header.menu.kuniverse' })}
                    </a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link
                    href="/#avatars"
                    //</li>onClick={() => setMobileMenu(false)}
                  >
                    <a className="main-nav-link">{intl.formatMessage({ id: 'header.menu.faq' })}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex items-center relative justify-center lg:justify-between md z-10">
            <nav className="main-nav w-full hidden lg:block">
              <ul className="flex flex-col items-center lg:flex-row whitespace-nowrap">
                <SandboxIcon />
                <li className="block w-full text-center">
                  <Link href="/">
                    <a className="main-nav-link">
                      {intl.formatMessage({ id: 'header.menu.home' })}
                    </a>
                  </Link>
                </li>
                <li className="block w-full text-center">
                  <Link href="/#kuniverse" className="main-nav-link">
                    <a className="main-nav-link">
                      {intl.formatMessage({ id: 'header.menu.kuniverse' })}
                    </a>
                  </Link>
                </li>
                <li className="block w-full text-center">
                  <Link href="/my-avatars" className="main-nav-link">
                    <a className="main-nav-link">{intl.formatMessage({ id: 'header.menu.faq' })}</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-between w-full mx-12 lg:gap-12 lg:justify-end">
              <div className="mt-2 lg:hidden">
                <SandboxIcon />
              </div>
              <CustomButton className="theme-header">
                <Link href="/mint-nft">
                  {intl.formatMessage({ id: 'header.menu.mint.your.avatar' })}
                </Link>
              </CustomButton>
              <LanguajeSelector />

              {/* Burger menu */}
              <div
                className={`burger-icon lg:hidden ${mobileMenu ? 'active' : ''}`}
                onClick={() => {
                  setMobileMenu((prev) => !prev)
                }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
