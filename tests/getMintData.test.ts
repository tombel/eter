import { createMocks } from 'node-mocks-http'

import { RESPONSE_CODES } from '../utils/constants'
import getMintData from '../pages/api/mintdata/[address]/[amount]'

jest.setTimeout(10000)

describe('GET /api/mintdata/:address/:amount', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let req: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let res: any

  beforeEach(() => {
    const mocks = createMocks({
      method: 'GET',
      query: {},
    })
    req = mocks.req
    res = mocks.res
  })

  test('should retrieve error code INVALID_ADDRESS when address is not valid', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C3xx'
    req.query.amount = '1'
    await getMintData(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.INVALID_ADDRESS })
  })

  test('should retrieve error code INVALID_AMOUNT when amount is not a number', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    req.query.amount = 'x'
    await getMintData(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.INVALID_AMOUNT })
  })

  test('should retrieve error code WAVES_NOT_ACTIVE when waveIndex=0', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    req.query.amount = '1'
    process.env.CUSTOM_WAVE_INDEX = '0'
    await getMintData(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.WAVES_NOT_ACTIVE_WAVE })
  })

  test('should retrieve error code ADDRESS_NOT_QUALIFY when waveIndex=1 but address is not whitelisted', async () => {
    req.query.address = '0x3845badade8e6dff049820680d1f14bd3903a5d0'
    req.query.amount = '1'
    process.env.CUSTOM_WAVE_INDEX = '1'
    await getMintData(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.ADDRESS_NOT_QUALIFY })
  })

  test('should retrieve signature and waveIndex=1 when address is whitelisted', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    req.query.amount = '1'
    process.env.CUSTOM_WAVE_INDEX = '1'
    await getMintData(req, res)
    const response = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(response.code === RESPONSE_CODES.ADDRESS_QUALIFY).toBe(true)
    expect(response.signature.length === 132).toBe(true)
    expect(response.signatureId.length === 66).toBe(true)
    expect(response.waveIndex === 1).toBe(true)
    expect(response.tokenPrice === '0.0').toBe(true)
    expect(response.claimedCount === 0).toBe(true)
    expect(response.isMintAllowed).toBe(true)
    expect(response.waveMaxTokensToBuy === 4).toBe(true)
    expect(response.balance === '0.0').toBe(true)
  })

  test('should retrieve signature, waveIndex=1 and isMintAllowed=false when address is whitelisted but amount is not valid', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    req.query.amount = '5'
    process.env.CUSTOM_WAVE_INDEX = '1'
    await getMintData(req, res)
    const response = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(response.code === RESPONSE_CODES.ADDRESS_QUALIFY).toBe(true)
    expect(response.signature.length === 132).toBe(true)
    expect(response.signatureId.length === 66).toBe(true)
    expect(response.waveIndex === 1).toBe(true)
    expect(response.tokenPrice === '0.0').toBe(true)
    expect(response.claimedCount === 0).toBe(true)
    expect(response.isMintAllowed).toBe(false)
    expect(response.waveMaxTokensToBuy === 4).toBe(true)
    expect(response.balance === '0.0').toBe(true)
  })

  test('should retrieve error code ADDRESS_NOT_QUALIFY when waveIndex=2 but address is not whitelisted', async () => {
    req.query.address = '0x3845badade8e6dff049820680d1f14bd3903a5d0'
    req.query.amount = '1'
    process.env.CUSTOM_WAVE_INDEX = '2'
    await getMintData(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.ADDRESS_NOT_QUALIFY })
  })

  test('should retrieve signature and waveIndex=2 when address is whitelisted', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    req.query.amount = '1'
    process.env.CUSTOM_WAVE_INDEX = '2'
    await getMintData(req, res)
    const response = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(response.code === RESPONSE_CODES.ADDRESS_QUALIFY).toBe(true)
    expect(response.signature.length === 132).toBe(true)
    expect(response.signatureId.length === 66).toBe(true)
    expect(response.waveIndex === 2).toBe(true)
    expect(response.tokenPrice === '0.0').toBe(true)
    expect(response.claimedCount === 0).toBe(true)
    expect(response.isMintAllowed).toBe(true)
    expect(response.waveMaxTokensToBuy === 4).toBe(true)
    expect(response.balance === '0.0').toBe(true)
  })
})
