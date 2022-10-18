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

import { generateOpenSeaLink } from '../utils/generateOpenSeaLink'
import LoadingIcon from '../components/LoadingIcon'

export const getServerSideProps: GetServerSideProps = async () => {
  // ...
  return {
    props: {
      network: process.env.CHAIN_ID,
    },
  }
}

function LoadingAvatars(): JSX.Element {
  return (
    <div className="flex flex-1 items-center justify-center">
      <LoadingIcon />
    </div>
  )
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
              <LoadingAvatars />
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
