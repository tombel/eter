const config = [
  {
    interval: {
      start: 0,
      end: 0,
    },
    whitelistedAddresses: [''],
  },
  {
    interval: {
      start: Date.UTC(2022, 9, 12, 15), // Wed, 12 Oct 2022 15:00:00 UTC
      end: Date.UTC(2022, 9, 13, 15), // Thu, 13 Oct 2022 15:00:00 UTC
    },
    whitelistedAddresses: [
      '0x016C8780e5ccB32E5CAA342a926794cE64d9C364',
      '0x185a4dc360ce69bdccee33b3784b0282f7961aea',
      '0x5686D92Ce354Ea768A69c77f5929c35Cf42FeD34', // Rafael
      '0x3340d79fB3Bee22823f06AC1c66fc90F8d6287bb', // Cris
      '0x98950164AC54776B7Bce6CC8a0aDba4986d9d754', // Alan
      '0x5888EdD6579abE7C895d128594b255860F134693', // Leo
      '0x33f7701E8CD3719a63B58C7CF16Cc1C07dC7C113', // Alonso
      '0xC92600E942A1c219FC3BCE656e0e938d70aa7e0d',
      '0x1894D403A6aB2ded7Cb1F2F3164DF1571bCA1C54',
      '0xC92600E942A1c219FC3BCE656e0e938d70aa7e0d', // Cris CoinBase,
      '0xBAef5f83a04b326c4CA4769EeE56e1175CA74CdA', // people to test
      '0x280aB5798A21c207fFee83557aA459C8B0a09E5d',
      '0x52C0C5c5391dD08C109D003E286A8A98956F7f7d',
      '0x094d40b0dA8E50575eD54B8f0A0B610e944504d2',
      '0xe40806C81be2A12fa06022b250Af402f486dC7d6', // util here
      '0x21050a72Ce061B1184D266a4a41545d04E76DEfc', // TSB 1
      '0x08F8cCB26c077Bb750165D1c439EaB35cCC11385', // TSB 2
      '0xA7939c9F64e95Cfbe5a6F02f0dD40693B8510E64', // TSB 3
      '0x1f306B8d96B9ACc5B53304C09409571571a16af2', // TSB 4
    ],
  },
  {
    interval: {
      start: Date.UTC(2022, 9, 13, 15), // Thu, 13 Oct 2022 15:00:00 UTC
      end: Date.UTC(2022, 9, 15, 15), // Sat, 15 Oct 2022 15:00:00 UTC
    },
    whitelistedAddresses: [
      '0x016C8780e5ccB32E5CAA342a926794cE64d9C364',
      '0x185a4dc360ce69bdccee33b3784b0282f7961aea',
      '0x5686D92Ce354Ea768A69c77f5929c35Cf42FeD34', // Rafael
      '0x3340d79fB3Bee22823f06AC1c66fc90F8d6287bb', // Cris
      '0x98950164AC54776B7Bce6CC8a0aDba4986d9d754', // Alan
      '0x5888EdD6579abE7C895d128594b255860F134693', // Leo
      '0x33f7701E8CD3719a63B58C7CF16Cc1C07dC7C113', // Alonso
      '0xC92600E942A1c219FC3BCE656e0e938d70aa7e0d',
      '0xC92600E942A1c219FC3BCE656e0e938d70aa7e0d', // Cris CoinBase,
      '0xBAef5f83a04b326c4CA4769EeE56e1175CA74CdA', // people to test
      '0x280aB5798A21c207fFee83557aA459C8B0a09E5d',
      '0x52C0C5c5391dD08C109D003E286A8A98956F7f7d',
      '0x094d40b0dA8E50575eD54B8f0A0B610e944504d2',
      '0xe40806C81be2A12fa06022b250Af402f486dC7d6', // util here
      '0x19054fF28Ab5666727e7719BA193f7759bBE1a9D', // Cris wave 2 only
      '0x21050a72Ce061B1184D266a4a41545d04E76DEfc', // TSB 1
      '0x08F8cCB26c077Bb750165D1c439EaB35cCC11385', // TSB 2
      '0xA7939c9F64e95Cfbe5a6F02f0dD40693B8510E64', // TSB 3
      '0x1f306B8d96B9ACc5B53304C09409571571a16af2', // TSB 4
    ],
  },
  {
    interval: {
      start: Date.UTC(2022, 9, 15, 15), // Sat, 15 Oct 2022 15:00:00 UTC
      end: Date.UTC(2027, 9, 15, 15), // Sun, 15 Oct 2027 15:00:00 UTC
    },
    whitelistedAddresses: [],
  },
]

export default config
