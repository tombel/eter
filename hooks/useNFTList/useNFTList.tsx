import { useQuery, UseQueryResult } from 'react-query'

export interface INFTInfo {
  contract: {
    address: string
    name: string
  }
  tokenId: string
  title: string
  rawMetadata: {
    image_url: string
    description: string
  }
  token_uri: string
}

export interface GetNFTsPayloadData {
  ownedNfts: INFTInfo[] | null
}

async function getNFTData(address: string, signal: AbortSignal): Promise<GetNFTsPayloadData> {
  const response = await fetch(`/api/getWalletNFTs/${address}/`, {
    signal,
  })
  if (response.status !== 200) {
    throw new Error((await response.json())?.code)
  }
  return await response.json()
}

export function useNFTList(address: string): UseQueryResult<GetNFTsPayloadData, Error> {
  const query = useQuery<GetNFTsPayloadData, Error>(
    'nftList',
    async ({ signal }) => getNFTData(address, signal),
    {
      cacheTime: 0,
    },
  )
  return query
}
