import Head from 'next/head'
import Image from 'next/image'

import AvatarsSection from '../components/AvatarsSection'
import Brands from '../components/Brands'
import BrandsFooter from '../components/BrandsFooter'
import EnterKuniverse from '../components/EnterKuniverse'
import Faq from '../components/Faq'
import Header from '../components/Header'
import LetsPlay from '../components/LetsPlay'
import PlayLikeKun from '../components/PlayLikeKun'
import VideoSection from '../components/VideoSection'
import styles from '../styles/Home.module.css'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kuniverse</title>
        <meta name="description" content="KunUniverse Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <AvatarsSection />
        <VideoSection />
        <PlayLikeKun />
        <EnterKuniverse />
        <LetsPlay />
        <Faq />
        <Brands />
        <BrandsFooter />
      </main>

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
        </div>
      </footer>
    </div>
  )
}
