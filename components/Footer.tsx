import Image from 'next/image'
import FooterLink from './FooterLink'
import { useIntl } from 'react-intl'

export default function Footer(): JSX.Element {
  const intl = useIntl()

  return (
    <footer className="w-full bg-[#2a0029] flex justify-center items-center">
      <div className="flex w-full lg:w-5/6 bg-[#210E18] lg:py-40 justify-between flex-wrap">
        {/* Sandbox Logo */}

        <img
          alt="Sandbox Logo"
          src="/images/sandbox-logo-white.svg"
          className="w-3/5 lg:w-1/5 mx-auto p-40"
        />

        {/* Footer Links */}

        <ul className="w-full lg:w-1/2 flex justify-start flex-wrap">
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://medium.com/sandbox-game" content="News" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandbox.game/en/map/" content="Map" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink
              href="https://installers.sandbox.game/The_Sandbox_One_Pager_2020.pdf"
              content="One Pager"
            />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandbox.game/en/create/vox-edit/" content="Create" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandbox.game/en/about/sand/" content="Sand" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandboxgame.gitbook.io/the-sandbox/" content="FAQ" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandbox.game/en/shop/" content="Market" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://press.sandbox.game/" content="Press" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://careers.sandbox.game/" content="Careers" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandbox.game/en/play/" content="Play" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandbox.game/en//partnerships/" content="Partners" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandbox.game/en/licenses/" content="Licenses" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink
              href="https://installers.sandbox.game/The_Sandbox_Whitepaper_2020.pdf"
              content="Whitepaper"
            />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandbox.game/en/about/terms-of-use/" content="Terms of use" />
          </li>
          <li className="w-4/12 pb-1 text-center lg:text-left">
            <FooterLink href="https://sandbox.game/en/privacypolicy/" content="Privacy Policy" />
          </li>
        </ul>

        {/* Socials Logos */}

        <div className="w-full lg:w-1/5 lg:mx-40 flex flex-wrap justify-center lg:justify-start items-center">
          <p className="font-base font-semibold lg:text-xl text-white text-center lg:text-start w-full mt-20 lg:my-20">
            {intl.formatMessage({ id: 'page.home.footer.follow.us' })}
          </p>
          <a href="https://discord.com/invite/bFZJkBFHXb" target="_blank" rel="noopener noreferrer">
            <Image
              alt="Discord Logo"
              src="/images/discord-white.svg"
              layout="fixed"
              quality={100}
              width={40}
              height={40}
            />
          </a>
          <a href="https://twitter.com/Kuniverse_GG" target="_blank" rel="noopener noreferrer">
            <Image
              alt="Twitter Logo"
              src="/images/twitter-white.svg"
              layout="fixed"
              quality={100}
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.instagram.com/kuniverse_gg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              alt="Instagram Logo"
              src="/images/instagram-white.svg"
              layout="fixed"
              quality={100}
              width={40}
              height={40}
            />
          </a>
          <p className="font-base text-xs lg:text-sm w-full text-center lg:text-justify text-[#909090] mb-20 lg:my-20">
            {intl.formatMessage({ id: 'page.home.footer.copyright' })}
          </p>
        </div>
      </div>
    </footer>
  )
}
