import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export interface MyAvatarCardProps {
  name: string
  url: string
}

export default function MyAvatarCard({ name, url }: MyAvatarCardProps): JSX.Element {
  return (
    <div className="w-[48%] md:w-[24%] nft-current mb-16">
      <div className="relative bg-grey-100 rounded-2xl">
        <Image
          alt="Kuniverse Logo"
          src={url}
          className="w-full rounded-2xl cursor-pointer"
          layout="fixed"
          quality={100}
          width={212}
          height={212}
          placeholder="empty"
          unoptimized
        />
      </div>
      <div className="flex justify-between mt-16">
        <p className="mb-0 text-center text-sm text-black">{name}</p>
        <button className="text-grey-200">
          <InformationCircleIcon className="h-24 w-24 text-grey-100" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
