import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/24/outline'
import CustomButton from './Button'

export default function EmptyAvatar(): JSX.Element {
  return (
    <div className="w-[48%] md:w-[24%] h-[285px] nft-current mb-16 flex items-center justify-center">
      <CustomButton>
        <Link href="/mint-nft">
          <div className="flex flex-col items-center justify-center">
            <PlusIcon className="h-60 w-60 text-grey-100 mb-10" aria-hidden="true" />
            <p className="text-grey-100 font-base font-semibold">MINT NOW</p>
          </div>
        </Link>
      </CustomButton>
    </div>
  )
}