import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogos}>
        <Image
          alt="Sandbox Logo"
          src="/images/sandbox-logo-white.svg"
          layout="fixed"
          quality={100}
          width={147}
          height={44}
        />
        <Image
          alt="Sandbox Logo"
          src="/images/k-logo.png"
          layout="fixed"
          quality={100}
          width={108}
          height={92}
        />
      </div>
      <div className={styles.footerMedia}>
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
        <a href="https://www.instagram.com/kuniverse_gg/" target="_blank" rel="noopener noreferrer">
          <Image
            alt="Instagram Logo"
            src="/images/instagram-white.svg"
            layout="fixed"
            quality={100}
            width={40}
            height={40}
          />
        </a>
      </div>
    </footer>
  )
}
