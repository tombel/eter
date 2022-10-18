import { ConnectWallet } from '../components/ConnectWallet'
import Image from 'next/image'
import SimpleHeader from '../components/SimpleHeader'
import Faq from '../components/Faq'
import Brands from '../components/Brands'
import Footer from '../components/Footer'

export default function Connect(): JSX.Element {
  return (
    <>
      <div className="flex w-full justify-center items-center relative px-24 py-40 bg-mint-section h-screen">
        <SimpleHeader />
        <div className="z-20 pt-96 md:pt-144 flex flex-col items-center justify-center">
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
