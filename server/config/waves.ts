const config = {
  wave1: {
    interval: {
      start: Date.UTC(2022, 8, 30, 13), // Fri, 30 Sep 2022 13:00:00 UTC
      end: Date.UTC(2022, 8, 31, 13), // Sat, Oct 01 Sep 2022 13:00:00 UTC
    },
    whitelistedAddresses: [
      '0x016C8780e5ccB32E5CAA342a926794cE64d9C364',
      '0x185a4dc360ce69bdccee33b3784b0282f7961aea',
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
