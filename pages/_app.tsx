import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createClient, chain } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { QueryClient, QueryClientProvider } from 'react-query'

import en from '../langs/en.json'
import es from '../langs/es.json'
const translations = {
  en,
  es,
}

// Create a client
const queryClient = new QueryClient()

const { chains, provider, webSocketProvider } = configureChains(
  [...(process.env.CHAIN_ID == '1' ? [chain.mainnet] : [chain.goerli])], // this works because run the server side, but it should be NEXT_PUBLIC_CHAIN_ID
  [
    jsonRpcProvider({
      rpc: () => ({
        http: process.env.RPC_URL,
      }),
      priority: 0,
    }),
    publicProvider({
      priority: 1,
    }),
  ],
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
  const { locale } = useRouter()

  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={client}>
          <Component {...pageProps} />
        </WagmiConfig>
      </QueryClientProvider>
    </IntlProvider>
  )
}

export default MyApp
