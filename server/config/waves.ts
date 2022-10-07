const config = {
  wave1: {
    interval: {
      start: Date.UTC(2022, 9, 4, 13), // Tue, 04 Oct 2022 13:00:00 UTC
      end: Date.UTC(2022, 9, 14, 13), // Fri, 14 Oct 2022 13:00:00 UTC
    },
    whitelistedAddresses: [
      '0x016C8780e5ccB32E5CAA342a926794cE64d9C364',
      '0x185a4dc360ce69bdccee33b3784b0282f7961aea',
      '0x5686d92ce354ea768a69c77f5929c35cf42fed34',
      '0x5686D92Ce354Ea768A69c77f5929c35Cf42FeD34', // Rafael
      '0x3340d79fB3Bee22823f06AC1c66fc90F8d6287bb', // Cris
      '0x98950164AC54776B7Bce6CC8a0aDba4986d9d754', // Alan
      '0xC92600E942A1c219FC3BCE656e0e938d70aa7e0d',
      '0x1894D403A6aB2ded7Cb1F2F3164DF1571bCA1C54',
      '0xC92600E942A1c219FC3BCE656e0e938d70aa7e0d', // Cris CoinBase,
      '0xBAef5f83a04b326c4CA4769EeE56e1175CA74CdA', // people to test
      '0x280aB5798A21c207fFee83557aA459C8B0a09E5d',
      '0x52C0C5c5391dD08C109D003E286A8A98956F7f7d',
      '0x094d40b0dA8E50575eD54B8f0A0B610e944504d2',
      '0xe40806C81be2A12fa06022b250Af402f486dC7d6', // util here
    ],
  },
  wave2: {
    interval: {
      start: Date.UTC(2022, 10, 11, 13), // Fri, 11 Nov 2022 13:00:00 UTC
      end: Date.UTC(2022, 10, 12, 13), // Sat, 12 Nov 2022 13:00:00 UTC
    },
    whitelistedAddresses: [
      '0x016C8780e5ccB32E5CAA342a926794cE64d9C364',
      '0x185a4dc360ce69bdccee33b3784b0282f7961aea',
    ],
  },
  wave3: {
    interval: {
      start: Date.UTC(2022, 10, 14, 13), // Mon, 14 Nov 2022 13:00:00 UTC
      end: Date.UTC(2027, 10, 14, 13), // Sun, 14 Nov 2027 13:00:00 UTC
    },
    whitelistedAddresses: ['*'],
  },
}

export default config
