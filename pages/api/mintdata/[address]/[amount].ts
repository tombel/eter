import { NextApiRequest, NextApiResponse } from 'next'

import config from '../../../../server/config/waves'
import { RESPONSE_CODES } from '../../../../utils/constants'
import {
  getSignature,
  getTokenPrice,
  getClaimedCount,
  checkMintAllowed,
  isValidAddress,
  getWaveMaxTokensToBuy,
  getCurrentWaveIndex,
  getSandBalance,
} from '../../../../server/eth/utils'

interface MintDataResponse {
  code: RESPONSE_CODES
  signature?: string
  signatureId?: string
  waveIndex?: number
  tokenPrice?: string
  claimedCount?: number
  isMintAllowed?: boolean
  waveMaxTokensToBuy?: number
  balance?: string
}

export default async function getMintData(
  req: NextApiRequest,
  res: NextApiResponse<MintDataResponse>,
): Promise<void> {
  try {
    if (req.method !== 'GET') return res.status(400).json({ code: RESPONSE_CODES.INVALID_REQUEST })

    const address = req.query.address ? req.query.address.toString() : ''
    if (!isValidAddress(address))
      return res.status(400).json({ code: RESPONSE_CODES.INVALID_ADDRESS })

    const amountParam = req.query.amount ? req.query.amount.toString() : ''
    const amount = parseInt(amountParam)
    if (amount < 1 || amount > 10 || isNaN(amount)) {
      return res.status(400).json({ code: RESPONSE_CODES.INVALID_AMOUNT })
    }

    const waveIndex = process.env.CUSTOM_WAVE_INDEX
      ? parseInt(process.env.CUSTOM_WAVE_INDEX)
      : await getCurrentWaveIndex()

    if (waveIndex === 0) {
      return res.status(400).json({ code: RESPONSE_CODES.WAVES_NOT_ACTIVE_WAVE })
    }

    const whitelistedAddresses =
      waveIndex <= config.length - 1 ? config[waveIndex].whitelistedAddresses : ['']
    if (whitelistedAddresses.length > 0 && !whitelistedAddresses.includes(address))
      return res.status(400).json({ code: RESPONSE_CODES.ADDRESS_NOT_QUALIFY })

    const result = await Promise.all([
      getSignature(address),
      getTokenPrice(),
      getClaimedCount(address, waveIndex),
      checkMintAllowed(address, amount),
      getWaveMaxTokensToBuy(),
      getSandBalance(address),
    ])

    const [
      { signature, signatureId },
      tokenPrice,
      claimedCount,
      isMintAllowed,
      waveMaxTokensToBuy,
      balance,
    ] = result
    return res.status(200).json({
      code: RESPONSE_CODES.ADDRESS_QUALIFY,
      signature,
      signatureId,
      waveIndex,
      tokenPrice,
      claimedCount,
      isMintAllowed,
      waveMaxTokensToBuy,
      balance,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ code: RESPONSE_CODES.INTERNAL_ERROR })
  }
}
