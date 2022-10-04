import Image from 'next/image'
import AvatarSelector from '../components/AvatarSelector'
import CustomButton from '../components/CustomButton'
import SimpleHeader from '../components/SimpleHeader'

export default function MintNft(): JSX.Element {
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
      <div className="z-20 flex flex-col items-center justify-center mt-20">
        <Image
          alt="Kuniverse Logo"
          src="/images/kuniverse-logo-shadow.png"
          layout="fixed"
          quality={100}
          width={439}
          height={223}
        />
        <div>
          <p className="font-base text-3xl font-bold text-white mb-24">MINT YOUR OWN AVATAR NOW!</p>
          <div className="bg-white rounded-3xl shadow-lg w-[500px] min-h-[300px] font-base p-20 flex flex-col items-center">
            <h1 className="text-primary-color font-semibold text-xl text-center">
              YOUR WALLET IS CONNECTED!
            </h1>
            <Image
              alt="Kuniverse Logo"
              src="/images/Avatars/Ekun_02.png"
              layout="fixed"
              quality={100}
              width={80}
              height={80}
            />
            <p className="text-black text-center my-12">How many avatars do you want?</p>
            <AvatarSelector />
            <CustomButton className="theme-primary mt-12 w-[200px]">Mint Now</CustomButton>
          </div>
        </div>
      </div>
    </div>
  )
}
