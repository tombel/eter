import Head from 'next/head'
// import Image from 'next/image'
import Script from 'next/script'
import AvatarsSection from '../components/AvatarsSection'
import Brands from '../components/Brands'
import EnterKuniverse from '../components/EnterKuniverse'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Header from '../components/Header'
import CollectiblesSection from '../components/CollectiblesSection'
import PlayLikeKun from '../components/PlayLikeKun'
import VideoSection from '../components/VideoSection'
import styles from '../styles/Home.module.css'
import NewUserSection from '../components/NewUserSection'
import SandboxMetaverseSection from '../components/SandboxMetaverseSection'
import JoinUsSection from '../components/JoinUsSection'
import MinigameSection from '../components/MinigameSection'

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kuniverse</title>
        <meta name="description" content="Kuniverse Avatars - The Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <AvatarsSection />
        <VideoSection />
        <PlayLikeKun />
        <EnterKuniverse />
        <MinigameSection />
        <CollectiblesSection />
        <NewUserSection />
        <Faq />
        <Brands />
        <SandboxMetaverseSection />
        <JoinUsSection />
      </main>
      <Footer />
      <Script src="../utils/twitterPixel.js" strategy="lazyOnload" />
    </div>
  )
}
