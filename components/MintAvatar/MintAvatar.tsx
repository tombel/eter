import React from 'react'
import { useMinter } from '../../hooks/useMinter'

export function MintAvatar(): JSX.Element {
  const [quantity, setQuantity] = React.useState<number>(1)
  const { mint, isLoading, isSuccess, isError, data, isPrepareError, prepareError, error } =
    useMinter({
      quantity,
    })

  if (isLoading) return <div>Your transctions is being processed.</div>

  if (isSuccess)
    return (
      <div>
        Successfully minted your NFT!
        <div>
          <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>Etherscan</a>
        </div>
      </div>
    )

  if (isError || isPrepareError)
    return (
      <pre className="w-[600px]">
        <code>Error: {(prepareError || error)?.message}</code>
      </pre>
    )

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          mint?.()
        }}
      >
        <div className="space-y-12">
          <div>NO AVATAR MINTED</div>
          <div className="flex flex-col space-y-12">
            <div>How many avatars do you want?</div>
            <input
              name="quantity"
              type="number"
              value={quantity}
              min={0}
              max={10} // temporary
              onChange={(event) => setQuantity(Number(event.target.value))}
            />
            <button className="bg-white hover:bg-blue-700 text-black font-bold py-6 px-8 rounded">
              {isLoading ? 'Minting...' : 'Mint'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
