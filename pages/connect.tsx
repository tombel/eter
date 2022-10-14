import { ConnectWallet } from '../components/ConnectWallet'
import Image from 'next/image'
import SimpleHeader from '../components/SimpleHeader'

export default function Connect(): JSX.Element {
  return (
    <div className="flex w-full justify-center items-center relative py-40 bg-mint-section h-screen">
      <SimpleHeader />
      <div className="z-20 pt-144 flex flex-col items-center justify-center">
        <div className="mb-40">
          <Image
            alt="Kuniverse Logo"
            src="/images/kuniverse-logo-black.png"
            layout="fixed"
            quality={100}
            width={300}
            height={166}
          />
        </div>
        <ConnectWallet />
      </div>
    </div>
  )
}
