const config = {
  wave1: {
    interval: {
      start: Date.UTC(2022, 9, 4, 13), // Tue, 04 Oct 2022 13:00:00 UTC
      end: Date.UTC(2022, 12, 14, 13), // Fri, 14 Oct 2022 13:00:00 UTC
    },
    whitelistedAddresses: [
      '0x016C8780e5ccB32E5CAA342a926794cE64d9C364',
      '0x185a4dc360ce69bdccee33b3784b0282f7961aea',
      '0x5686d92ce354ea768a69c77f5929c35cf42fed34',
      '0x5686D92Ce354Ea768A69c77f5929c35Cf42FeD34',
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
