import { useIntl } from 'react-intl'
import CustomButton from './Button'
import Link from 'next/link'

export default function JoinUsSection(): JSX.Element {
  const intl = useIntl()

  return (
    <div className="bg-gradient-to-r from-[#290028] via-[#31234e] via-30% to-[#290028] flex flex-wrap justify-center items-center py-80 relative min-h-[400px]">
      <img src="/images/bg-join-us-2.png" className="hidden lg:block absolute h-full lg:w-full" />
      <img
        src="/images/join-us-kun.png"
        className="absolute h-1/2 lg:h-5/6 bottom-0 right-0 lg:right-200"
      />
      <div className="absolute lg:left-300 w-3/5 lg:w-1/3 md:px-60 z-10">
        <p className="font-base font-semibold lg:text-xl text-white w-full text-center text-justify mb-20">
          {intl.formatMessage({ id: 'page.home.join.us.text.one' })}
        </p>
        <p className="font-base font-semibold lg:text-xl text-white w-full text-center text-justify mb-40">
          {intl.formatMessage({ id: 'page.home.join.us.text.two' })}
        </p>
        <CustomButton className="bg-[#9205CC] text-white font-base font-semibold py-6 px-24 rounded-full shadow uppercase md:text-xl md:py-16 md:px-24 md:mb-30 mt-30 xl:w-[300px] xl:text-3xl">
          <Link href="/mint-nft">{intl.formatMessage({ id: 'page.home.join.us.button' })}</Link>
        </CustomButton>
      </div>
    </div>
  )
}
