import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createClient, chain } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

//import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { QueryClient, QueryClientProvider } from 'react-query'

// Create a client
const queryClient = new QueryClient()

const { chains, provider, webSocketProvider } = configureChains(
  [...(process.env.CHAIN_ID == '1' ? [chain.mainnet] : [chain.goerli])], // this works because run the server side, but it should be NEXT_PUBLIC_CHAIN_ID
  [publicProvider()],
)

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'Kuniverse',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </QueryClientProvider>
  )
}

export default MyApp
