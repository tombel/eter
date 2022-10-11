import { NextApiRequest, NextApiResponse } from 'next'
import { Network, Alchemy } from 'alchemy-sdk'

import { RESPONSE_CODES } from '../../../utils/constants'
import { isValidAddress } from '../../../server/eth/utils'

export default async function getWalletNFTs(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  try {
    if (req.method !== 'GET') return res.status(400).json({ code: RESPONSE_CODES.INVALID_REQUEST })

    const address = req.query.address.toString()
    if (!isValidAddress(address))
      return res.status(400).json({ code: RESPONSE_CODES.INVALID_ADDRESS })

    const settings = {
      apiKey: process.env.ALCHEMY_API_KEY,
      network: process.env.CHAIN_ID === '5' ? Network.ETH_GOERLI : Network.ETH_MAINNET,
    }
    const alchemy = new Alchemy(settings)
    const options = {
      contractAddresses: [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS],
      tokenUriTimeoutInMs: parseInt(process.env.TOKEN_URI_TIMEOUT),
    }
    const nfts = await alchemy.nft.getNftsForOwner(address, options)
    return res.status(200).json(nfts)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ code: RESPONSE_CODES.INTERNAL_ERROR })
  }
}
