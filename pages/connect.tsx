import { ConnectWallet } from '../components/ConnectWallet'
import Head from 'next/head'
import Image from 'next/image'
import SimpleHeader from '../components/SimpleHeader'
import Faq from '../components/Faq'
import Brands from '../components/Brands'
import Footer from '../components/Footer'

export default function Connect(): JSX.Element {
  return (
    <>
      <Head>
        <title>Connect your Wallet</title>
        <meta name="description" content="Kuniverse Avatars - The Sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex w-full justify-center items-center relative px-24 pt-40 pb-80 bg-mint-section h-fit">
        <SimpleHeader />
        <div className="z-20 pt-96 lg:pt-144 flex flex-col items-center justify-center">
          <div className="mb-40">
            <div className="relative w-[250px] h-[138px] md:w-[300px] md:h-[166px]">
              <Image
                alt="Kuniverse Logo"
                src="/images/kuniverse-logo-black.png"
                quality={100}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <ConnectWallet />
        </div>
      </div>
      <Faq />
      <Brands />
      <Footer />
    </>
  )
}
