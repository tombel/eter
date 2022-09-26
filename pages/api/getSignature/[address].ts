import { NextApiRequest, NextApiResponse } from 'next'

import config from '../../../server/config/waves'
import { RESPONSE_CODES } from '../../../utils/constants'
import { getSignature, isValidAddress } from '../../../server/eth/signature'

export default async function getApprovalSignature(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'GET') return res.status(400).json({ code: RESPONSE_CODES.INVALID_REQUEST })

    const address = req.query.address.toString()
    if (!isValidAddress(address))
      return res.status(400).json({ code: RESPONSE_CODES.INVALID_ADDRESS })

    if (!config.wave1.includes(address))
      return res.status(200).json({ code: RESPONSE_CODES.ADDRESS_NOT_QUALIFY })

    const signature = getSignature()
    return res.status(200).json({ code: RESPONSE_CODES.ADDRESS_QUALIFY, signature })
  } catch (error) {
    return res.status(500).json({ code: RESPONSE_CODES.INTERNAL_ERROR })
  }
}
