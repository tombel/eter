import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  globalSetup: './tests/setup.ts',
}

export default config
