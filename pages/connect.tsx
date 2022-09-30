import { ConnectWallet } from '../components/ConnectWallet'
import Image from 'next/image'

export default function Connect(): JSX.Element {
  return (
    <div className="flex w-full justify-center items-center bg-black relative py-40 bg-grey-700 h-screen">
      <div className="w-full absolute top-0 left-0 pt-144 z-10 bg-radial min-h-[540px]">
        <Image
          alt="Kuniverse Logo"
          src="/images/bg_connect.png"
          layout="fill"
          quality={100}
          objectFit="cover"
        />
      </div>
      <div className="z-20 flex flex-col items-center justify-center -mt-40">
        <Image
          alt="Kuniverse Logo"
          src="/images/kuniverse-logo.png"
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
