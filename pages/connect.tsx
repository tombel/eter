import { ConnectWallet } from '../components/ConnectWallet'
import Image from 'next/image'
import SimpleHeader from '../components/SimpleHeader'

export default function Connect(): JSX.Element {
  return (
    <div className="flex w-full justify-center items-center bg-black relative py-40 bg-grey-700 h-screen">
      <SimpleHeader />
      <div className="w-full h-full absolute top-0 left-0 pt-144 z-10 bg-radial-purple">
        <Image
          alt="Kuniverse Logo"
          src="/images/bg_connect_wallet.png"
          layout="fill"
          quality={100}
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="z-20 flex flex-col items-center justify-center -mt-40">
        <Image
          alt="Kuniverse Logo"
          src="/images/kuniverse-logo-shadow.png"
          className="shadow-lg"
          layout="fixed"
          quality={100}
          width={439}
          height={223}
        />
        <ConnectWallet />
      </div>
    </div>
  )
}
