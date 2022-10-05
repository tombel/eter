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
} from '../../../../server/eth/signature'

interface ApprovalSignatureResponse {
  code: string
  signature?: string
  signatureId?: string
  waveIndex?: number
  tokenPrice?: string
  claimedCount?: number
  isMintAllowed?: boolean
}

export default async function getApprovalSignature(
  req: NextApiRequest,
  res: NextApiResponse<ApprovalSignatureResponse>,
): Promise<void> {
  try {
    if (req.method !== 'GET') return res.status(400).json({ code: RESPONSE_CODES.INVALID_REQUEST })

    const address = req.query.address.toString()
    const amountParam = req.query.amount.toString()
    if (!isValidAddress(address))
      return res.status(400).json({ code: RESPONSE_CODES.INVALID_ADDRESS })

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
    ])
    const { signature, signatureId } = result[0]
    const tokenPrice = result[1]
    const claimedCount = result[2]
    const isMintAllowed = result[3]
    return res.status(200).json({
      code: RESPONSE_CODES.ADDRESS_QUALIFY,
      signature,
      signatureId,
      waveIndex,
      tokenPrice,
      claimedCount,
      isMintAllowed,
    })
  } catch (error) {
    return res.status(500).json({ code: RESPONSE_CODES.INTERNAL_ERROR })
  }
}
