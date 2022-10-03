import { createMocks } from 'node-mocks-http'

import config from '../server/config/waves'
import { RESPONSE_CODES } from '../utils/constants'
import getApprovalSignature from '../pages/api/getSignature/[address]'

describe('GET /api/getSignature/:address', () => {
  let req: any
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
    await getApprovalSignature(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.INVALID_ADDRESS })
  })

  test('should retrieve error code WAVES_NOT_ACTIVE when date is before the start of wave #1', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    process.env.CUSTOM_DATE = new Date(config.wave1.interval.start - 1).toUTCString()
    await getApprovalSignature(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.WAVES_NOT_ACTIVE_WAVE })
  })

  test('should retrieve error code ADDRESS_NOT_QUALIFY when date is valid for wave #1 but address is not whitelisted', async () => {
    req.query.address = '0x33f7701E8CD3719a63B58C7CF16Cc1C07dC7C113'
    process.env.CUSTOM_DATE = new Date(config.wave1.interval.start).toUTCString()
    await getApprovalSignature(req, res)
    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.ADDRESS_NOT_QUALIFY })
  })

  test('should retrieve signature and wave=1 when date is within the invarval of wave #1 and address is whitelisted', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    process.env.CUSTOM_DATE = new Date(config.wave1.interval.start).toUTCString()
    await getApprovalSignature(req, res)
    const response = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(response.code === RESPONSE_CODES.ADDRESS_QUALIFY).toBe(true)
    expect(response.signature.length === 132).toBe(true)
    expect(response.signatureId.length === 66).toBe(true)
    expect(response.waveIndex === 1).toBe(true)
  })

  test('should retrieve signature and wave=1 when date is within the invarval of wave #1 and address is whitelisted', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    process.env.CUSTOM_DATE = new Date(config.wave1.interval.end).toUTCString()
    await getApprovalSignature(req, res)
    const response = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(response.code === RESPONSE_CODES.ADDRESS_QUALIFY).toBe(true)
    expect(response.signature.length === 132).toBe(true)
    expect(response.signatureId.length === 66).toBe(true)
    expect(response.waveIndex === 1).toBe(true)
  })

  test('should retrieve error code WAVES_NOT_ACTIVE when date is after the end of wave #1', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    process.env.CUSTOM_DATE = new Date(config.wave1.interval.end)
      .toUTCString()
      .replace('13:00:00', '13:00:00:1')
    await getApprovalSignature(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.WAVES_NOT_ACTIVE_WAVE })
  })

  test('should retrieve error code WAVES_NOT_ACTIVE when date is before the start of wave #2', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    process.env.CUSTOM_DATE = new Date(config.wave2.interval.start - 1).toUTCString()
    await getApprovalSignature(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.WAVES_NOT_ACTIVE_WAVE })
  })

  test('should retrieve error code ADDRESS_NOT_QUALIFY when date is valid for wave #2 but address is not whitelisted', async () => {
    req.query.address = '0x33f7701E8CD3719a63B58C7CF16Cc1C07dC7C113'
    process.env.CUSTOM_DATE = new Date(config.wave2.interval.start).toUTCString()
    await getApprovalSignature(req, res)
    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.ADDRESS_NOT_QUALIFY })
  })

  test('should retrieve signature and wave=2 when date is within the invarval of wave #2 and address is whitelisted', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    process.env.CUSTOM_DATE = new Date(config.wave2.interval.start).toUTCString()
    await getApprovalSignature(req, res)
    const response = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(response.code === RESPONSE_CODES.ADDRESS_QUALIFY).toBe(true)
    expect(response.signature.length === 132).toBe(true)
    expect(response.signatureId.length === 66).toBe(true)
    expect(response.waveIndex === 2).toBe(true)
  })

  test('should retrieve signature and wave=2 when date is within the invarval of wave #2 and address is whitelisted', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    process.env.CUSTOM_DATE = new Date(config.wave2.interval.end).toUTCString()
    await getApprovalSignature(req, res)
    const response = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(response.code === RESPONSE_CODES.ADDRESS_QUALIFY).toBe(true)
    expect(response.signature.length === 132).toBe(true)
    expect(response.signatureId.length === 66).toBe(true)
    expect(response.waveIndex === 2).toBe(true)
  })

  test('should retrieve error code WAVES_NOT_ACTIVE when date is after the end of wave #2', async () => {
    req.query.address = '0x016C8780e5ccB32E5CAA342a926794cE64d9C364'
    process.env.CUSTOM_DATE = new Date(config.wave2.interval.end)
      .toUTCString()
      .replace('13:00:00', '13:00:00:1')
    await getApprovalSignature(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.WAVES_NOT_ACTIVE_WAVE })
  })

  test('should retrieve signature and wave=3 when date is within the invarval of wave #3. Any address qualify', async () => {
    req.query.address = '0x33f7701E8CD3719a63B58C7CF16Cc1C07dC7C113'
    process.env.CUSTOM_DATE = new Date(config.wave3.interval.start).toUTCString()
    await getApprovalSignature(req, res)
    const response = JSON.parse(res._getData())
    expect(res._getStatusCode()).toBe(200)
    expect(response.code === RESPONSE_CODES.ADDRESS_QUALIFY).toBe(true)
    expect(response.signature.length === 132).toBe(true)
    expect(response.signatureId.length === 66).toBe(true)
    expect(response.waveIndex === 3).toBe(true)
  })

  test('should retrieve error code WAVES_NOT_ACTIVE when date is after the end of wave #3', async () => {
    req.query.address = '0x33f7701E8CD3719a63B58C7CF16Cc1C07dC7C113'
    process.env.CUSTOM_DATE = new Date(config.wave3.interval.end)
      .toUTCString()
      .replace('13:00:00', '13:00:00:1')
    await getApprovalSignature(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(JSON.parse(res._getData())).toStrictEqual({ code: RESPONSE_CODES.WAVES_NOT_ACTIVE_WAVE })
  })
})
