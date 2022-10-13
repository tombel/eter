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
    <div>
      <SimpleHeader />
      <div className="relative w-full">
        <div className="bg-radial-purple">
          <Image
            alt="Kuniverse Background"
            src="/images/bg_connect_wallet.png"
            layout="fill"
            quality={100}
            objectFit="cover"
            className="opacity-20"
          />
        </div>
        <div className="container py-96">
          <div className="z-20 h-full flex flex-col items-center justify-center">
            <Image
              alt="Kuniverse Logo"
              src="/images/kuniverse-logo-shadow.png"
              layout="fixed"
              quality={100}
              width={439}
              height={223}
            />

            <p className="font-base text-3xl font-bold text-white mb-24 text-center">MY AVATARS</p>
            <div className="bg-white rounded-3xl shadow-lg w-full font-base p-20 flex flex-wrap gap-12 items-center">
              {isLoading ? (
                <MyAvatarCard name="Loading..." url={'/images/unrevealed.jpeg'} />
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
    </div>
  )
}
