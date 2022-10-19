import { useQuery, UseQueryResult } from 'react-query'

export interface IMintData {
  signature: string
  signatureId: string
  tokenPrice: string
  isMintAllowed: boolean
  waveIndex: number
  waveMaxTokensToBuy: number
  claimedCount: number
}

async function getMintData(
  address: string,
  amount: number,
  signal: AbortSignal,
): Promise<IMintData> {
  const response = await fetch(`/api/mintdata/${address}/${amount}`, {
    signal,
  })
  if (response.status !== 200) {
    throw new Error((await response.json())?.code)
  }
  return await response.json()
}

export function useMintData({
  address,
  amount,
}: {
  address: string
  amount: number
}): UseQueryResult<IMintData, Error> {
  const query = useQuery<IMintData, Error>(
    ['mintDATA', address, amount],
    async ({ signal }) => getMintData(address, amount, signal),
    {
      cacheTime: 0,
    },
  )
  return query
}
