import { utils } from 'ethers'

import { useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'

import { useMintData } from '../../hooks/useMintData'

export interface IuseMinterValues {
  isLoading: boolean
  error: Error
  isSuccess: boolean
  data: {
    hash?: string
  }
  isError: boolean
  isPrepareError: boolean
  prepareError: Error
  isReady: boolean
  allowedToMint: number
  mint: () => void
  reset: () => void
}

export function useMinter({ quantity }: { quantity: number }): IuseMinterValues {
  const { isConnected, address } = useAccount()
  const {
    status,
    data: initialMintData,
    error: mintDataError,
  } = useMintData({
    address,
    amount: quantity,
  })

  const iface = new utils.Interface([
    'function mint(address _wallet, uint256 _amount, uint256 _signatureId, bytes memory _signature)',
  ])

  const allowedToMint =
    Number(initialMintData?.waveMaxTokensToBuy) - Number(initialMintData?.claimedCount)

  console.log(mintDataError)

  const isReady =
    isConnected &&
    !mintDataError &&
    Boolean(address) &&
    status == 'success' &&
    quantity <= allowedToMint

  const dataContract = isReady
    ? iface.encodeFunctionData('mint', [
        address,
        quantity, // amount less or equal to max amount <= Max_Per_user - User_Tokens
        initialMintData?.signatureId,
        initialMintData?.signature,
      ])
    : null

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: process.env.NEXT_PUBLIC_SAND_CONTRACT_ADDRESS,
    contractInterface: [
      {
        constant: false,
        inputs: [
          {
            name: 'target',
            type: 'address',
          },
          {
            name: 'amount',
            type: 'uint256',
          },
          {
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'approveAndCall',
        outputs: [
          {
            name: '',
            type: 'bytes',
          },
        ],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    functionName: 'approveAndCall',
    overrides: {
      gasLimit: 1_000_000,
    },
    args: [
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      utils.parseUnits(initialMintData?.tokenPrice || '0', 18).mul(quantity),
      dataContract,
    ], // sandAmount = nftsToMint * nftSandPrice
    enabled: isReady,
  })

  const { data, error, isError: isErrorWhite, write, isLoading, reset } = useContractWrite(config)

  const {
    isLoading: isLoadingTransation,
    isSuccess,
    isError,
    data: transactionData,
  } = useWaitForTransaction({
    hash: data?.hash,
  })

  return {
    isLoading: isLoadingTransation || isLoading,
    error,
    isSuccess,
    data,
    isError: isErrorWhite || isError || transactionData?.status === 0,
    mint: write,
    isPrepareError,
    prepareError,
    isReady,
    reset,
    allowedToMint,
  }
}
