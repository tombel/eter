import { isWithinInterval } from 'date-fns'
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
} from '../../../../server/eth/utils'

interface MintDataResponse {
  code: string
  signature?: string
  signatureId?: string
  waveIndex?: number
  tokenPrice?: string
  claimedCount?: number
  isMintAllowed?: boolean
  waveMaxTokensToBuy?: number
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
    if (amount < 1 || amount > 5 || isNaN(amount)) {
      return res.status(400).json({ code: RESPONSE_CODES.INVALID_AMOUNT })
    }

    let waveIndex = 0
    let whitelistedAddresses = []
    const currentTime = process.env.CUSTOM_DATE
      ? new Date(process.env.CUSTOM_DATE).getTime()
      : new Date().getTime()

    if (isWithinInterval(currentTime, config.wave1.interval)) {
      waveIndex = 1
      whitelistedAddresses = config.wave1.whitelistedAddresses
    } else if (isWithinInterval(currentTime, config.wave2.interval)) {
      waveIndex = 2
      whitelistedAddresses = config.wave2.whitelistedAddresses
    } else if (isWithinInterval(currentTime, config.wave3.interval)) {
      waveIndex = 3
    } else return res.status(400).json({ code: RESPONSE_CODES.WAVES_NOT_ACTIVE_WAVE })
    if ((waveIndex === 1 || waveIndex === 2) && !whitelistedAddresses.includes(address))
      return res.status(200).json({ code: RESPONSE_CODES.ADDRESS_NOT_QUALIFY })

    const result = await Promise.all([
      getSignature(address),
      getTokenPrice(),
      getClaimedCount(address, waveIndex),
      checkMintAllowed(address, amount),
      getWaveMaxTokensToBuy(),
    ])

    const [
      { signature, signatureId },
      tokenPrice,
      claimedCount,
      isMintAllowed,
      waveMaxTokensToBuy,
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
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ code: RESPONSE_CODES.INTERNAL_ERROR })
  }
}
