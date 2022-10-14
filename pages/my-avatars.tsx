import React from 'react'
import Image from 'next/image'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import EmptyAvatar from '../components/EmptyAvatar'
import MyAvatarCard from '../components/MyAvatarCard'
import SimpleHeader from '../components/SimpleHeader'
import { useNFTList } from '../hooks/useNFTList'
import { useIsMounted } from '../hooks/useIsMounted'
import { GetServerSideProps } from 'next/types'
import { useIntl } from 'react-intl'

export const getServerSideProps: GetServerSideProps = async () => {
  // ...
  return {
    props: {
      network: process.env.CHAIN_ID,
    },
  }
}

function generateOpenSeaLink(address: string, tokenId: string, network): string {
  if (network === '5') {
    return `https://testnets.opensea.io/assets/goerli/${address}/${tokenId}`
  }

  return `https://opensea.io/assets/ethereum/${address}/${tokenId}`
}

export default function MyAvatars({ network }: { network: string }): JSX.Element {
  const intl = useIntl()
  const isMounted = useIsMounted()
  const router = useRouter()
  const { isConnected, address } = useAccount()

  React.useEffect(() => {
    if (!isConnected) {
      router.push('/connect')
    }
  }, [isConnected, router])

  const { isLoading, data } = useNFTList(address)

  if (!isMounted) return null

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

        <div className="container">
          <h1 className="font-base text-3xl font-bold text-white mb-24 text-center">
            {intl.formatMessage({ id: 'page.my.avatars.title' })}
          </h1>
          <div className="bg-white rounded-3xl shadow-lg w-full font-base p-20 flex flex-wrap gap-12 items-center">
            {isLoading ? (
              <MyAvatarCard
                name={intl.formatMessage({ id: 'page.my.avatars.loading' })}
                url={'/images/unrevealed.jpeg'}
              />
            ) : (
              data?.ownedNfts
                .map((x) => {
                  return (
                    <MyAvatarCard
                      key={x.tokenId}
                      name={x.title}
                      url={x.rawMetadata.image_url}
                      openseaURL={generateOpenSeaLink(x.contract.address, x.tokenId, network)}
                    />
                  )
                })
                .concat(<EmptyAvatar key={'empty'} />)
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
