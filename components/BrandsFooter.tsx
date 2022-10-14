import Image from 'next/image'
import { useIntl } from 'react-intl'
import styles from '../styles/BrandsSection.module.css'

export default function BrandsFooter(): JSX.Element {
  const intl = useIntl()

  return (
    <div className={styles.BrandsFooter}>
      <div className="container text-center">
        <div className={styles.BrandsFooterContent}>
          <p> {intl.formatMessage({ id: 'page.home.brands.participation' })}</p>
          <Image
            alt="SnoopDogg Logo"
            src="/images/miindedstuido-logo.svg"
            layout="fixed"
            quality={100}
            width={210}
            height={87}
          />
        </div>
      </div>
    </div>
  )
}
