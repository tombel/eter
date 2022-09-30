import React, { useState } from 'react'
import Link from 'next/link'

function Header(): JSX.Element {
<<<<<<< HEAD
  const [mounted, setMounted] = React.useState(false)
=======
>>>>>>> 43135e0 (fix: linter errors)
  const [mobileMenu, setMobileMenu] = useState(false)

  React.useEffect(() => setMounted(true), [])

  if (mounted) {
    return null
  }

  return (
    <div className="header-container">
      <header
        className={`header flex items-center h-70 lg:h-auto py-16 fixed top-0 left-0 right-0 text-black transition-all z-50 ${
          mobileMenu ? 'active-white' : 'active'
        }`}
      >
        <div className="container mx-auto">
          {/* Mobile menu */}
          <nav className={`mobile-main-nav z-0 lg:hidden ${mobileMenu ? 'active' : ''}`}>
            <div className="w-full">
              <ul className="flex flex-col items-center lg:flex-row">
                <li className="block w-full">
                  <Link
                    href="/#home"
                    //</li>onClick={() => setMobileMenu(false)}
                  >
                    <a className="main-nav-link">Home</a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link
                    href="/#kuniverse"
                    //</li>onClick={() => setMobileMenu(false)}
                  >
                    <a className="main-nav-link">Kuniverse</a>
                  </Link>
                </li>
                <li className="block w-full">
                  <Link
                    href="/#avatars"
                    //</li>onClick={() => setMobileMenu(false)}
                  >
                    <a className="main-nav-link">Avatars</a>
                  </Link>
                </li>
                <li className="block w-full my-10">
                  <button className="btn-primary">Mint Now</button>
                </li>
                <li className="block w-full my-10">
                  <button className="btn-primary w-[100px]">EN</button>
                </li>
              </ul>
            </div>
          </nav>

          <div className="flex items-center relative justify-end lg:justify-between md z-10">
            <nav className="main-nav hidden lg:block -mx-20">
              <ul className="flex flex-col items-center lg:flex-row whitespace-nowrap">
                <li className="block w-full px-64">
                  <Link href="/#home">
                    <a className="main-nav-link">Home</a>
                  </Link>
                </li>
                <li className="block w-full px-64">
                  <Link href="/#kuniverse" className="main-nav-link">
                    <a className="main-nav-link">Kuniverse</a>
                  </Link>
                </li>
                <li className="block w-full px-64">
                  <Link href="/#avatars" className="main-nav-link">
                    <a className="main-nav-link">Avatars</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="hidden lg:flex gap-12">
              <button className="btn-primary">Mint Now</button>
              <button className="btn-primary w-[100px]">EN</button>
            </div>
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
      </header>
    </div>
  )
}

export default Header
