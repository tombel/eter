import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig, configureChains, createClient, chain } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { Analytics } from '@vercel/analytics/react'

import { QueryClient, QueryClientProvider } from 'react-query'

import en from '../langs/en.json'
import es from '../langs/es.json'
import { useEffect } from 'react'
const translations = {
  en,
  es,
}

// Create a client
const queryClient = new QueryClient()

const { chains, provider, webSocketProvider } = configureChains(
  [...(process.env.NEXT_PUBLIC_CHAIN_ID == '1' ? [chain.mainnet] : [chain.goerli])], // this works because run the server side, but it should be NEXT_PUBLIC_CHAIN_ID
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY, priority: 0 }),
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
  const { locale, events } = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('878422343962474') // facebookPixelId
        ReactPixel.pageView()

        events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [events])

  return (
    <>
      <IntlProvider locale={locale} messages={translations[locale]}>
        <QueryClientProvider client={queryClient}>
          <WagmiConfig client={client}>
            <Component {...pageProps} />
          </WagmiConfig>
        </QueryClientProvider>
      </IntlProvider>
      <Analytics />
    </>
  )
}

export default MyApp
