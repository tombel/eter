import { NextApiRequest, NextApiResponse } from 'next'
import Moralis from 'moralis'
import { EvmChain } from '@moralisweb3/evm-utils'

import { RESPONSE_CODES } from '../../../utils/constants'
import { isValidAddress } from '../../../server/eth/signature'

export default async function getWalletNFTs(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') return res.status(400).json({ code: RESPONSE_CODES.INVALID_REQUEST })

    const address = req.query.address.toString()
    if (!isValidAddress(address))
      return res.status(400).json({ code: RESPONSE_CODES.INVALID_ADDRESS })

    const chain = EvmChain.create(parseInt(process.env.CHAIN_ID))
    const tokenAddresses = [process.env.CONTRACT_ADDRESS]
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY })

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
      tokenAddresses,
    })
    return res.status(200).json(response)
  } catch (error) {
    return res.status(500).json({ code: RESPONSE_CODES.INTERNAL_ERROR })
  }
}
