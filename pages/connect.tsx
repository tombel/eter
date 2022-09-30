import { ConnectWallet } from '../components/ConnectWallet'

export default function Home(): JSX.Element {
  return (
    <div className="flex bg-stone-900 w-full justify-center h-screen items-center">
      <div>
        <ConnectWallet />
      </div>
    </div>
  )
}
